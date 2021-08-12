/* import dependencies */
import express from 'express'
import  mongoose from 'mongoose'
import Pusher from 'pusher'
import cors from 'cors'


/* app config */
const app =express()
const port = process.env.PORT || 9000

/* middlewares */

/* db config */

/* api routes */
app.get('/', (req,res) => res.status(200).send('hello world'))

/* listen */
app.listen(port, ()=> console.log(`listenin on localhost ${port}`))
