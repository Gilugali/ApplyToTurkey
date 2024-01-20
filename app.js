const express = require('express')
const app = express()

const port = 2000

app.use(express.static('assets'))


app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/index.html')
})




app.listen(port, ()=>{
    console.log(`listening on ${port}`)
})