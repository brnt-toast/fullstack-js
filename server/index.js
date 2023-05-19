import express from "express";
import morgan from "morgan";

const app = express()
const port = 3999

app.use(morgan('combined'))

app.get('/', (req, res) => {
    res.send("Hello World\n")
})

app.listen(port, () => {
    console.log(`Listening on ${port}`)
})