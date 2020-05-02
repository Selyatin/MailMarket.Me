import Router from "next/router";
import Head from "next/head";
import checkAuth from "../lib/checkAuth";
import axios from "axios";
export default class DashBoardIndex extends React.Component {

    constructor(props) {
        super(props);

        this.typingTimeout = null;

        this.state = {
            sent: 0,
            points: 0,
            pointsToUse: 0,
            from: null,
            subject: null,
            msgToSend: null,
            customEmailList: [],
            totalEmailsSent: 0,
            pageLoading: true,
            decisor: false,
            decisorLoading: false,
            decisorResult: false,
            products: false,
        }

        this.setDecisorOn = this.setDecisorOn.bind(this);
        this.setDecisorOff = this.setDecisorOff.bind(this);
        this.setProductsOn = this.setProductsOn.bind(this);
        this.setProductsOff = this.setProductsOff.bind(this);
        this.setPointsToUse = this.setPointsToUse.bind(this);
        this.setMsgToSend = this.setMsgToSend.bind(this);
        this.setFrom = this.setFrom.bind(this);
        this.setSubject = this.setSubject.bind(this);
        this.setCustomEmailList = this.setCustomEmailList.bind(this);

        this.sendRequest = this.sendRequest.bind(this);
    }

    static async getInitialProps({ req, res }) {
        return checkAuth(req, res);
    }

    componentDidMount() {
        if (this.props.loggedIn && this.props.id != null) {
            axios({
                url: "/api/user",
                method: "POST",
                data: {
                    id: this.props.id
                }
            }).then(response => {
                this.setState({
                    pageLoading: false,
                    sent: response.data.sent,
                    points: response.data.points,
                    totalEmailsSent: response.data.totalEmailsSent
                });
            }).catch(err => Router.push("/login"));
        }
    }

    sendRequest() {
        if (this.state.msgToSend != null) {
            this.setState({
                decisorLoading: true,
            });

            axios({
                url: "/api/mailer",
                method: "POST",
                data: {
                    id: this.props.id,
                    pointsToUse: this.state.pointsToUse,
                    from: this.state.from,
                    subject: this.state.subject,
                    msgToSend: this.state.msgToSend,
                    customEmailList: this.state.customEmailList
                }
            }).then(result => {
                if (result.status == 200) {
                    this.setState({
                        decisor: false,
                        decisorLoading: false,
                        decisorResult: true,
                        points: this.state.points - this.state.pointsToUse,
                        pointsToUse: 0,
                        sent: parseInt(this.state.sent) + parseInt(this.state.pointsToUse),
                        totalEmailsSent: this.state.pointsToUse + this.state.totalEmailsSent,
                        customEmailList: [],
                    })
                }
            }).catch(err => {
                this.setState({
                    decisorLoading: false,
                    decisorResult: false,
                });
                alert(err);
            });
        } else {
            alert("Your message is empty!");
        }
    }


    setPointsToUse(elem) {
        clearTimeout(this.typingTimeout);
        let value = elem.target.value;
        this.typingTimeout = setTimeout(() => {
            this.setState({
                pointsToUse: this.state.customEmailList.length > 0 ? parseInt(value) + this.state.customEmailList.length : parseInt(value)
            });
        }, 500);
    }
    setFrom(elem) {
        this.setState({
            from: elem.target.value
        });
    }

    setSubject(elem) {
        this.setState({
            subject: elem.target.value
        });
    }

    setMsgToSend(elem) {
        this.setState({
            msgToSend: elem.target.value
        });
    }

    setCustomEmailList(elem) {
        clearTimeout(this.typingTimeout);
        let value = elem.target.value
        this.typingTimeout = setTimeout(() => {
            let mails = value.length > 1 ? value.replace(" ", "").replace(",", "\n").split("\n").filter(Boolean) : [];
            let pointsToUse = this.state.pointsToUse;

            if (mails.length > this.state.customEmailList.length) {
                pointsToUse = (mails.length - this.state.customEmailList.length) + this.state.pointsToUse
            }
            if (mails.length < this.state.customEmailList.length) {
                pointsToUse = this.state.pointsToUse - (this.state.customEmailList.length - mails.length);
            }
            if (mails.length == 0) {
                pointsToUse = this.state.pointsToUse - this.state.customEmailList.length;
            }
            this.setState({
                customEmailList: mails,
                pointsToUse: pointsToUse
            });
        }, 800);
    }

    setDecisorOn() {
        if (this.state.pointsToUse > 0) {
            if (this.state.from == null || this.state.subject == null || this.state.msgToSend == null) {
                alert("Error: Some form(s) are left empty");
            } else {
                this.setState({
                    decisor: true
                });
            }
        } else {
            alert("Error: You cannot use 0 points");
        }
    }

    setDecisorOff() {
        this.setState({
            decisor: false,
        });
    }

    setProductsOn(){
        this.setState({
            products: true
        })
    }

    setProductsOff(){
        this.setState({
            products: false
        })
    }

    render() {

        function decisorDom(self) {
            if (self.state.pointsToUse <= self.state.points) {
                return (
                    <div className="container decisor-items-container" onClick={self.setDecisorOff}>
                        <div className="row">
                            <div className="col-md-12">
                                <h2>You will use <b>{self.state.pointsToUse}</b> points.<br></br><br></br>Points left: <b>{self.state.points - self.state.pointsToUse}</b><br></br><br></br>Are you sure?</h2>
                            </div>
                            <div className={self.state.decisorLoading ? "col-md-12 decisor-loading" : "col-md-12 decisor-loading hide"}>
                                <div className="loadingio-spinner-eclipse-h5c55szghjc" style={{ transform: "scale(0.7)" }}>
                                    <div className="ldio-3kphjdhe4ws">
                                        <div></div>
                                    </div>
                                </div>
                            </div>
                            <div className={self.state.decisorLoading ? "col-md-12 row hide" : "col-md-12 row"}>
                                <div className="col-md-6">
                                    <button className="decisor-button" onClick={self.sendRequest}>Yes</button>
                                </div>
                                <div className="col-md-6">
                                    <button className="decisor-button black" onClick={self.setDecisorOff}>No</button>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            } else {
                return (
                    <div className="container decisor-items-container">
                        <div className="row">
                            <div className="col-md-12">
                                <h2>You don't have enough points.<br></br><br></br>You need {self.state.pointsToUse - self.state.points == 1 ? self.state.pointsToUse - self.points + " point" : self.state.pointsToUse - self.points + " points"}.</h2>
                            </div>
                            <div className="col-md-12 row">
                                <div className="col-md-6">
                                    <button className="decisor-button">Add Points</button>
                                </div>
                                <div className="col-md-6">
                                    <button className="decisor-button black" onClick={self.setDecisorOff}>Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        }


        return (
            <React.Fragment>
                <Head>
                    <title>Dashboard</title>
                    <link href="/css/bootstrap.css" rel="stylesheet"></link>
                    <link href="/css/dashboard.css" rel="stylesheet"></link>
                </Head>
                <div className={this.state.pageLoading ? "loading" : "loading hide"}>
                    <div className="loadingio-spinner-eclipse-h5c55szghjc">
                        <div className="ldio-3kphjdhe4ws">
                            <div></div>
                        </div>
                    </div>
                </div>
                <div className={this.state.products ? "decisor active" : "decisor"}>
                    <div className="container" onClick={this.setProductsOff}>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="product-details">
                                    <h2>Starter Pack</h2>
                                    <h2>100 Points</h2>
                                    <h2>1.00$</h2>
                                    <button>Pay with PayPal</button>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="product-details">
                                    <h2>Medium Pack</h2>
                                    <h2>400 Points</h2>
                                    <h2>2.50$</h2>
                                    <button className="black">Pay with PayPal</button>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="product-details">
                                    <h2>Marketer Pack</h2>
                                    <h2>700 Points</h2>
                                    <h2>5$</h2>
                                    <button>Pay with PayPal</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={this.state.decisor ? "decisor active" : "decisor"}>
                    {decisorDom(this)}
                </div>
                <div className="container-fluid">
                    <div className="row center">
                        <div className="col-md-4">
                            <div className="statistics-block">
                                <h2>E-Mails Sent</h2>
                                <h3>{this.state.sent}</h3>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="statistics-block">
                                <h2>Available Points</h2>
                                <h3>{this.state.points}</h3>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="statistics-block">
                                <h2>Total E-Mails Sent</h2>
                                <h3>{this.state.totalEmailsSent}</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row" style={{ margin: "5rem 0" }}>
                        <div className="col-md-4 input-block center">
                            <h3>Custom E-Mail List</h3>
                            <textarea className="custom-list" type="text" placeholder="Leave blank if you don't want to add custom E-Mails" onChange={this.setCustomEmailList}></textarea>
                            <button style={{ padding: "1rem 36.5%" }} onClick={this.setProductsOn}>Add Points</button>
                        </div>
                        <div className="col-md-8 input-block center">
                            <h3>Template</h3>
                            <div className="col-md-2 inputter">
                                <input type="number" className="center" placeholder="Amount" onChange={this.setPointsToUse}></input>
                            </div>
                            <div className="col-md-5 inputter">
                                <input type="text" className="center" placeholder="From" onChange={this.setFrom}></input>
                            </div>
                            <div className="col-md-5 inputter">
                                <input type="text" className="center" placeholder="Subject" onChange={this.setSubject}></input>
                            </div>
                            <div className="col-md-12">
                                <textarea type="text" placeholder="Enter your Custom HTML or your Message" onChange={this.setMsgToSend}></textarea>
                                <button onClick={this.setDecisorOn}>Send!</button>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}