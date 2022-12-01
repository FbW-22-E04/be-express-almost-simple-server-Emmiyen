import express from 'express'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const port = process.env.PORT || 4001

app.listen(port, () => console.log('server is up and running at port', port))

const greetings = (req, res)=> {
    res.send('Its the Queen')
}

const sendTime = (req, res)=>{
    res.send(new Date().toLocaleString())
}

const getRandom = (req, res)=> res.send(Math.ceil(Math.random() * 100).toString())

const checkNumber = (req, res)=> {
    if(Number.isNaN(req.params.value)){

        res.send('Can NOT be converted to a number')
    }else{

        res.send('CAN be converted to a number')  
    }
}
const checkNumberQuery = (req, res)=> {
    console.log('value is', req.query)

    if(Number.isNaN(req.query.value)){

        res.send('Can NOT be converted to a number')
    }else{

        res.send('CAN be converted to a number')  
    }
}


app.get('/hallo', greetings)
app.get('/time', sendTime)
app.get('/random', getRandom)
app.get('/isnumber/:value', checkNumber)
app.get('/isnumberquery', checkNumberQuery)

