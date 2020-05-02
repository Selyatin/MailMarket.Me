import { Base64 } from "js-base64";
import mongodb from "mongodb";
import simplesmtp from "node-smtp-client";
const MongoClient = mongodb.MongoClient;
const uri = "";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const mailerClient = simplesmtp.Mail({
    host: "mbox.contact.bg",
    port: 25,
    secure: false,
    username: "mailmarketme@mbox.contact.bg",
    password: "09730Success",
})

function findEmailAddresses(StrObj) {
    var separateEmailsBy = ", ";
    var email = "<none>"; // if no match, use this
    var emailsArray = StrObj.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\\.[a-zA-Z0-9._-]+)/gi);
    if (emailsArray) {
        email = "";
        for (var i = 0; i < emailsArray.length; i++) {
            if (i != 0) email += separateEmailsBy;
            email += emailsArray[i];
        }
    }
    return email;
}

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

let mailArray = [];
client.connect(err => {
    if (err) throw err;
    const db = client.db("MailMarketMe");
    let mailsToSend = db.collection("emails").find({});
    mailsToSend.toArray().then(result => {
        result = result.filter(Boolean);
        result.forEach(data => {
            mailArray.push(data.email);
        })
        //console.log(mailArray.filter(Boolean));
    });
});

export default (req, res) => {
    if (req.method === "POST" && req.body.id != undefined && req.body.id != null && req.body.pointsToUse != undefined && req.body.pointsToUse != null && req.body.customEmailList != undefined && req.body.customEmailList != null && req.body.msgToSend != undefined && req.body.msgToSend != null && req.body.from != undefined && req.body.from != null && mailArray[0] != undefined) {
        client.connect(err => {
            if (err) throw err;
            const db = client.db("MailMarketMe");
            db.collection("accounts").findOne({ _id: mongodb.ObjectId(Base64.decode(req.body.id)) }, (err, result) => {
                if (req.body.pointsToUse <= result.points) {
                    db.collection("accounts").updateOne({ _id: mongodb.ObjectId(Base64.decode(req.body.id)) },
                        {
                            $set: {
                                points: result.points - req.body.pointsToUse,
                                totalEmailsSent: parseInt(req.body.pointsToUse) + parseInt(result.totalEmailsSent)
                            }
                        },
                        err => { if (err) throw err }
                    );

                    mailArray = shuffle(mailArray);
                    for (let i = 0; i < req.body.pointsToUse; i++) {
                        mailerClient.message({
                            from: req.body.from,
                            to: mailArray[i],
                            subject: req.body.subject,
                            "Content-type": "text/html",
                        }).body(req.body.msgToSend).send(err => { if (err) console.log(err) });
                    };

                    // Send the emails 
                    res.status(200).end();
                } else {
                    res.status(406).end();
                }
            });
        });
    }
    else {
        res.status(406).end();
    }
}
