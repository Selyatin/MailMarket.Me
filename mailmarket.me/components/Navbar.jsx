import Head from "next/head";
import Link from "next/link"
export default class Navbar extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            navOn: false,
        }
    }

    
    render() {
        
        function navTrigger(){
            this.state.navOn ? this.setState({navOn: false}) : this.setState({navOn: true});
        }

        return (
            <React.Fragment>
                <Head>
                    <title>{this.props.title}</title>
                    <link href="/css/bootstrap.css" rel="stylesheet"></link>
                    <link href="/css/main.css" rel="stylesheet"></link>
                </Head>
                <nav className="navbar">
                    <div className="container-fluid">
                        <div className="nav-content desktop row">
                            <div className="nav-logo col-md-6">
                                <Link href="/">
                                    <a>Mail Market.<span>Me!</span></a>
                                </Link>
                            </div>
                            <div className="nav-links col-md-6">
                                <Link href="/"><a className="nav-link">Support</a></Link>
                                <Link href="/login"><a className="nav-link log">Login</a></Link>
                                <Link href="/register"><a className="nav-link log">Create Account</a></Link>
                            </div>
                            <div className="nav-mobile-button">
                                <button className={this.state.navOn ? "active" : ""} onClick={() => {
                                    this.state.navOn ? this.setState({navOn: false}) : this.setState({navOn: true})
                                }}><span className="line"></span></button>
                            </div>
                        </div>

                        <div className={this.state.navOn ? "nav-mobile-wrapper container-fluid active" : "nav-mobile-wrapper container-fluid"}>
                            <div className="nav-content mobile row">
                                <div className="nav-links col-md-12">
                                    <ul>
                                        <li><Link href="/"><a className="nav-link">Support</a></Link></li>
                                        <li><Link href="/login"><a className="nav-link log">Login</a></Link></li>
                                        <li><Link href="/register"><a className="nav-link log">Create Account</a></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </React.Fragment>
        )
    }
}
