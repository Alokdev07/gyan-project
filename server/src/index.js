import express from 'express'

const app = express()

app.get('/',(req,res) => {
    res.json("hello world")
})

app.listen(4001,() => {
    console.log("app is listening in port 4001")
})