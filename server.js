//  Declaring required packages below
const express = require('express');
const bodyParser= require('body-parser');
const mongoose = require('mongoose');
const app = express()
app.use(bodyParser.urlencoded({ extended: true }))

//  Set-ExecutionPolicy -Scope Process -ExecutionPolicy RemoteSigned
//  Configuring the port
app.listen(3000, function(){
    console.log('Frankinstien !! It is alive!! @ 3000')
})
//  Establishing connection with the database
const uri = "mongodb+srv://gladiator:gladiator@cluster0.eykzi.mongodb.net/star-wars-quotes?retryWrites=true&w=majority";
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000
}).catch(err => console.log(err.reason));

app.get('/', function (req,res) {
    res.send('Hello World!')
})

app.get('/dirName', (req, res) => {
    res.sendFile(__dirname + '/index.html')
    // Note: __dirname is directory current directory you're in. Try logging it and see what you get!
    // Mine was '/Users/zellwk/Projects/demo-repos/crud-express-mongo' for this app.
  })

app.post('/quotes', (req, res) => {
  quotesCollection.insertOne(req.body)
    .then(result => {
      console.log(result)
    })
    .catch(error => console.error(error))
})