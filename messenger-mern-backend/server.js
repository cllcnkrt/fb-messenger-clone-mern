/* import dependencies */
import express from 'express'
import mongoose from 'mongoose'
import Pusher from 'pusher'
import cors from 'cors'


/* app config */
const app = express()
const port = process.env.PORT || 9000

/* middlewares */

/* db config */
const mongoURI = "mongodb+srv://admin:p9ji75N52LQ9rAnf@cluster0.wecq9.mongodb.net/messengerDB?retryWrites=true&w=majority"
mongoose.connect(mongoURI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.connection.once('open', () => {
    console.log('DB CONNECTED');
})

/* api routes */
app.get('/', (req, res) => res.status(200).send('hello world'))

/* listen */
app.listen(port, () => console.log(`listenin on localhost ${port}`))