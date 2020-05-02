import {Base64} from "js-base64";
const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
const uri = "";
const client = new MongoClient(uri, {useNewUrlParser: true, useUnifiedTopology: true});

export default (req, res) => {
  if(req.method === "POST" && req.body.id != undefined && req.body.id != null){
    client.connect(err => {
      if(err) throw err;
      const db = client.db("MailMarketMe");
        db.collection("accounts").findOne({_id: mongodb.ObjectId(Base64.decode(req.body.id))}, (err, result) => {
            if(err) throw err;
            if(result != null){
              res.status(200).end(JSON.stringify({sent: result.sent, points: result.points, totalEmailsSent: result.totalEmailsSent}));
            }else {
              res.status(406).end();
            }
        });
    });
  }
  else{
    res.status(406).end();
  }
}
