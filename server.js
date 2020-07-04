console.log('May the node be with me!')
const express = require('express');
const app = express();

app.listen(3000, function(){
    console.log('Frankinstien !! It is alive!! @ 3000')
})

app.get('/', function (req,res) {
    res.send('Hello World!')
})

