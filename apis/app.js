import express from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'
const mongoose = require('mongoose');

import User from './src/routes/user'

dotenv.config({path: `./${process.env.NODE_ENV}.env`})

const Port = 4000;

const app = express()
const dburl = 'mongodb+srv://NC:NC@cluster0.ahj6o.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

mongoose.connect(dburl)
.then(() =>{
    console.log('DB Connection is Success !!!')
})
.catch((error) => console.log('DB Connection Error :',error))

app.listen(Port, () => {

    console.log('App is running on port', Port)

});

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))
app.use(cors())
app.use('/users', User)
app.listen(process.env.PORT)