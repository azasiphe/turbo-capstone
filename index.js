import express from 'express'
import {config} from 'dotenv'

import {pool} from './config/config.js'

import cors from 'cors'
import cookieParser from 'cookie-parser'
import userRouter from './routes/user.js'
import prodRouter from './routes/product.js'
import loginRouter from './routes/login.js'
import revRouter from './routes/review.js'
import cartRouter from './routes/cart.js'
import loggedUser from './middleware/loggingUser.js'
import token from './middleware/token.js'

config()
const PORT = process.env.PORT
console.log(pool);
const app = express()

app.use(cors(
    {origin: "*", 
  credentials: true}
))
app.use( (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Request-Methods", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Expose-Headers", "Authorization");
    next();
});
app.use(express.json())
app.use(cookieParser())
app.use(express.static('views'))
app.use('/login',loggedUser,token,loginRouter)
app.use('/reviews',revRouter)
app.use('/users',userRouter)
app.use('/products',prodRouter)
app.use('/cart',cartRouter)

app.listen( PORT, ()=>{
    console.log(`http://localhost: ${PORT}`);
})