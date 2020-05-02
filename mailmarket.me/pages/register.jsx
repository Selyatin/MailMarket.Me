import Head from "next/head";
import Router from "next/router";
import axios from "axios";
export default class Form extends React.Component {

    constructor(props){
        super(props);
        

        this.state = {
            username: null,
            password: null,
        }

        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleCreateAccount = this.handleCreateAccount.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleUsernameChange(event){
        this.setState({
            username: event.target.value
        })
    }

    handlePasswordChange(event){
        this.setState({ 
            password: event.target.value
        })
    }

    handleCreateAccount(event){
        Router.push("/register")
    }

    handleSubmit(event){
        function validateEmail(email) {
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(email).toLowerCase());
        }
        if(validateEmail(this.state.username)){
            const res = axios({
                method: "POST",
                url: "/api/register",
                data: {
                    username: this.state.username,
                    password: this.state.password
                }
            }).then(response => {
                if(response.status === 200){
                    alert("Your account has been created!");
                    Router.push("/login");
                }
            }).catch(err => {
                alert("There's already an Account with that E-Mail.");
            })
        }else {
            alert("Please enter a valid E-Mail");
        }
    }

    render(){
        
        return(
            <React.Fragment>
                <Head>
                    <title>Register</title>
                    <link href="/css/bootstrap.css" rel="stylesheet"></link>
                    <link href="/css/main.css" rel="stylesheet"></link>
                </Head>
                <div className="container-fluid form-container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form">
                                <h2>Create Account</h2>
                                <input type="email" onChange={this.handleUsernameChange} placeholder="E-Mail"></input>
                                <input type="password" onChange={this.handlePasswordChange} placeholder="Password"></input>
                                <button onClick={this.handleSubmit}>Create Account</button>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}