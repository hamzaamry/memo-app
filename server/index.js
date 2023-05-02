import express from 'express' ;
import mongoose from 'mongoose';
import cors from 'cors'
import bodyParser from 'body-parser';

import postRouter from './routes/posts.js'

const app = express();



app.use(bodyParser.json({ limit: "30mb" , extended: true}))
app.use(bodyParser.urlencoded({ limit: "30mb" , extended: true}))
app.use(cors());

app.use('/posts' , postRouter)


const URL_CONNECTION='mongodb+srv://hamzaamry:test1234@cluster0.zunxy73.mongodb.net/test'

const PORT=process.env.PORT || 5000

mongoose.connect(URL_CONNECTION,{ useNewUrlParser: true, useUnifiedTopology: true})
.then(()=> app.listen(PORT , () => console.log(`server running on port ${PORT}`)))
    
.catch((err)=>{
    console.log(err)
})

