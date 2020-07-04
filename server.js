console.log('May the node be with me!')
const express = require('express');
const bodyParser= require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const app = express()
app.use(bodyParser.urlencoded({ extended: true }))

// Set-ExecutionPolicy -Scope Process -ExecutionPolicy RemoteSigned

app.listen(3000, function(){
    console.log('Frankinstien !! It is alive!! @ 3000')
})

const connectionString = "mongodb+srv://gladiator:gladiator@cluster0.eykzi.mongodb.net/star-wars-quotes?retryWrites=true&w=majority";
MongoClient.connect(connectionString, { useUnifiedTopology: true })
.then(client => {
    console.log('Connected to Database')
    const db = client.db('star-wars-quotes')
    const quotesCollection = db.collection('quotes')
  })
  .catch(error => console.error(error))

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