const express = require('express');
const cors = require('cors');
const app = express()
const port = process.env.PORT || 5001
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config()


//middle wares
app.use(cors())
app.use(express.json())


const uri = `mongodb+srv://${process.env.DB_USER}:${DB_PASSWORD}@cluster0.sduwbrc.mongodb.net/?retryWrites=true&w=majority`

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    client.close();
});


app.get('/', (req, res) => {
    res.send('genius car server is running')
})

app.listen(port, () => {
    console.log(`Genius car server running on port ${port}`)
})