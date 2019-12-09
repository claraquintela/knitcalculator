let express = require('express')
let app = express()
let reloadMagic = require('./reload-magic.js')

reloadMagic(app)

let MongoClient = require("mongodb").MongoClient;
let ObjectID = require("mongodb").ObjectID;
let multer = require("multer");

let upload = multer({
    dest: __dirname + "/uploads/"
});
let cookieParser = require("cookie-parser");
app.use(cookieParser());
let sessions = {};

let dbo = undefined;
let url =
    "mongodb+srv://knit:knit@cluster0-71uur.mongodb.net/test?retryWrites=true&w=majority";

MongoClient.connect(
    url, {
        useNewUrlParser: true
    },
    (err, db) => {
        dbo = db.db("knitcalculator");
    }
);
app.use('/', express.static('build')); // Needed for the HTML and JS files
app.use('/', express.static('public')); // Needed for local assets

// Your endpoints go after this line
app.post("/signup", upload.none(), (req, res) => {
    console.log("Signup are you working?");
    let name = req.body.username;
    let pwd = req.body.password;
    let email = req.body.email;
    let subscription = req.body.subscription;
    dbo.collection("users").findOne({
            username: name
        },
        (err, user) => {
            if (err) {
                res.send(
                    JSON.stringify({
                        success: false
                    })
                );
                return;
            }
            if (user !== null) {
                res.send(
                    JSON.stringify({
                        success: false
                    })
                );
                return;
            }
            if (user === null) {
                dbo.collection("users").insertOne({
                    username: name,
                    password: pwd,
                    email: email,
                    subscription: subscription,
                });
                let sessionId = generateId();
                sessions[sessionId] = name;
                res.cookie("sid", sessionId);
                res.send(
                    JSON.stringify({
                        success: true
                    })
                );
                return;
            }
        }
    );
});

app.post("/login", upload.none(), (req, res) => {
    let name = req.body.username;
    let password = req.body.password;
    dbo.collection("users").findOne({
            username: name
        },
        (err, user) => {
            if (err) {
                res.send(
                    JSON.stringify({
                        success: false
                    })
                );
                return;
            }

            if (user === null) {
                res.send(
                    JSON.stringify({
                        success: false
                    })
                );
                return;
            }

            if (user.password === password) {

                dbo.collection("patterns").find({
                    username: name
                }).toArray((err, patterns) => {
                    let sessionId = generateId();
                    sessions[sessionId] = name;
                    res.cookie("sid", sessionId);
                    res.send(
                        JSON.stringify({
                            success: true,
                            patterns: patterns
                        })
                    );
                    return;
                })


            } else {
                res.send(
                    JSON.stringify({
                        success: false
                    })
                );
            }

        }
    );
});

let generateId = () => {
    return "" + Math.floor(Math.random() * 100000000);
};

app.post("/pattern", upload.none(), (req, res) => {
    console.log("pattern save working?")
    if (req.body.dataSock) {
        let dataSock = JSON.parse(req.body.dataSock);
        let username = req.body.username;
        dbo.collection("patterns").insertOne({
            username: username,
            dataSock: dataSock,
        });
    }
    if (req.body.dataMittens) {
        let dataMittens = JSON.parse(req.body.dataMittens);
        let username = req.body.username;
        dbo.collection("patterns").insertOne({
            username: username,
            dataMittens: dataMittens,
        });
    }
    if (req.body.dataBabyBlanket) {
        let dataBabyBlanket = JSON.parse(req.body.dataBabyBlanket);
        let username = req.body.username;
        dbo.collection("patterns").insertOne({
            username: username,
            dataBabyBlanket: dataBabyBlanket,
        });
    }
    res.send(
        JSON.stringify({
            success: true
        })
    );
    return;
});

app.post("/getPattern", upload.none(), (req, res) => {
    let username = req.body.username;
    dbo.collection("patterns").find({
        username: username
    }).toArray((err, patterns) => {
        if (err) {
            console.log("error")
            res.send(JSON.stringify({
                success: false
            }))
        }
        if (patterns === null) {
            res.send(
                JSON.stringify({
                    success: false
                })
            );
            return;
        }
        res.send(
            JSON.stringify({
                success: true,
                patterns: patterns
            })
        );
        return;
    });
})

// Your endpoints go before this line

app.all('/*', (req, res, next) => { // needed for react router
    res.sendFile(__dirname + '/build/index.html');
})


app.listen(4000, '0.0.0.0', () => {
    console.log("Server running on port 4000")
})