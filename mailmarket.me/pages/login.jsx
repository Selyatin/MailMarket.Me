import Head from "next/head";
import Router from "next/router";
import axios from "axios";
import checkAuth from "../lib/checkAuth";
export default class Form extends React.Component {

    static async getInitialProps({req, res}){
        const auth = checkAuth(req, res);
        if(auth.loggedIn){
            res.writeHead(302, {Location: "/dashboard"});
            res.end();
        }
        return auth;
    }

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
        Router.push("/register");
    }

    handleSubmit(event){
        const res = axios({
            method: "POST",
            url: "/api/auth",
            data: {
                username: this.state.username,
                password: this.state.password
            }
        }).then(response => {
            if(response.status === 200){
                console.log(response.data);
                document.cookie = "id=" + response.data + ";path=/";
                Router.push("/dashboard");
            }
        }).catch(err => {
            alert("Wrong credentials");
        })
    }

    render(){
        
        return(
            <React.Fragment>
                <Head>
                    <title>Login</title>
                    <link href="/css/bootstrap.css" rel="stylesheet"></link>
                    <link href="/css/main.css" rel="stylesheet"></link>
                </Head>
                <div className="container-fluid form-container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form">
                                <h2>Login</h2>
                                <input type="email" onChange={this.handleUsernameChange} placeholder="E-Mail"></input>
                                <input type="password" onChange={this.handlePasswordChange} placeholder="Password"></input>
                                <button onClick={this.handleSubmit}>Login</button>
                                <button onClick={this.handleCreateAccount}>Create Account</button>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}