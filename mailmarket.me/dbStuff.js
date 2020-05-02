const MongoClient = require("mongodb").MongoClient;
const fs = require("fs");
const uri = "";

const client = new MongoClient(uri, {useNewUrlParser: true, useUnifiedTopology: true});

let emails = fs.readFileSync("emailer/email-list.txt").toString().split(",").sort();
client.connect(err => {
    if (err) throw err;

    const collection = client.db("MailMarketMe").collection("emails");

    emails.forEach(data => {
        collection.insertOne({
            email: data
        }, (err, res) => {
            if (err) throw err;
            console.log("Inserted " + data);
        });
    });
});

client.close();
