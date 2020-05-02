import cookie from "cookie";
const checkLogin = (req, res) => {
    if(req != undefined){
        if(req.headers != undefined){
            if(req.headers.cookie != undefined && req.headers.cookie != null){
                const cookies = cookie.parse(req.headers.cookie);
                if(cookies.id){
                    return {loggedIn: true, id: cookies.id};
                }else {
                    if(res){
                        res.writeHead(302, {Location: "/login"});
                        res.end();
                    }
                }
            }
        }
    }
    return {loggedIn: false, id: null}
}

export default checkLogin;