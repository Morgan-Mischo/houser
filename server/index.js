console.log('hit server')
require('dotenv').config(); 
const express = require('express'); 
const ctrl = require('./controller'); 
const massive = require('massive'); 

const { SERVER_PORT, CONNECTION_STRING } = process.env; 

const app = express()

massive(CONNECTION_STRING)
.then(db => {
    app.set('db', db); 
})
.catch(err => console.log(err));

app.use(express.json()); 
app.get('/api/houses', ctrl.getHouses); 

app.listen(SERVER_PORT, ()=> console.log(`Listening on port ${SERVER_PORT}`))
