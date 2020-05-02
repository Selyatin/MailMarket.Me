import {Base64} from "js-base64";
const MongoClient = require('mongodb').MongoClient;
const uri = "";

const client = new MongoClient(uri, {useNewUrlParser: true, useUnifiedTopology: true});

export default (req, res) => {
  if(req.method === "POST" && req.body.username != undefined && req.body.username != null && req.body.password != undefined && req.body.password != null){
    client.connect(err => {
      if(err) throw err;
      const db = client.db("MailMarketMe");
      let username = req.body.username;
      let password = req.body.password;
        db.collection("accounts").findOne({email: username}, (err, result) => {
            if(password == result.password){
              res.status(200).end(Base64.encode(result._id.toString()));
            }else {
              res.status(404).end();
            }
        });
    });
  }
  else{
    res.status(404);
  }
}
