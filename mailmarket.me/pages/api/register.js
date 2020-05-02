const MongoClient = require('mongodb').MongoClient;
const uri = "";
const client = new MongoClient(uri, {useNewUrlParser: true, useUnifiedTopology: true});

export default (req, res) => {
  if(req.method === "POST" && req.body.username != undefined && req.body.username != null && req.body.password != undefined && req.body.password != null){
    client.connect(err => {
      if(err) throw err;
      const db = client.db("MailMarketMe");
      const username = req.body.username;
      const password = req.body.password;
        db.collection("accounts").findOne({email: username}, (err, result) => {
          if(result == null){
            db.collection("accounts").insertOne({
              email: username,
              password: password,
              sent: 0,
              points: 100,
              totalEmailsSent: 0,
            }, (err, result) => {
                if (err){
                    res.status(406).end();
                }else {
                    res.status(200).end();
                }
            });
          }else {
            res.status(406).end();
          }
          }
        );
    });
  }
  else{
    res.status(404);
  }
}
