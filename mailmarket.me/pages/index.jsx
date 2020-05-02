import Navbar from "../components/Navbar";
import Link from "next/link";
export default class Index extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            username: null,
            loggedIn: false
        }
    }

    render(){
        console.log(this.state.username)
        return(
            <React.Fragment>
                <Navbar title="MailMarket.me"/>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 thumbnail">
                        <div className="thumbnail-background"></div>
                            <div className="thumbnail-caption">
                                <div className="row caption-row">
                                    <div className="col-lg-1"></div>
                                    <div className="col-lg-5 caption">
                                        <h2>The Best Mass E-Mail Marketing Service Ever!</h2>
                                        <h3>Try it out for Free! {this.props.username}</h3>
                                    </div>
                                    <div className="col-lg-6"></div>
                                </div>
                                <div className="row button-row">
                                        <div className="col-lg-8 col-md-12"></div>
                                        <div className="col-lg-4 col-md-12">
                                            <Link href="/register"><a className="start-now-button">Start Now</a></Link>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 about-title center">
                            <h1>Why us?</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="about-block">
                                <h2>We offer the best value!</h2>
                                <p>
                                    We offer the best value. You can reach out to 100 people just for one dollar!
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="about-block">
                                <h2>We offer the best support!</h2>
                                <p>
                                    We offer 7/24 support and you will receieve help in less than 48 hours!
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4">
                        <div className="about-block">
                                <h2>We offer Custom Templates!</h2>
                                <p>
                                    We offer the ability to use your own custom E-Mail template with HTML!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="container">
                    <div className="row">
                        <div className="col-md-12 center">
                            <h2>Track your progress through our Dashboard!</h2>
                        </div>
                    </div>
                </div> */}
            </React.Fragment>
        )
    }
}