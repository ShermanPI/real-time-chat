import express from 'express'
import morgan from 'morgan'

const PORT = process.env.PORT || 3000

const app = express()
app.use(morgan('tiny'))

app.get('/', (req, res) => {
    res.send('Hello World!!!')
})

app.listen(PORT, () => {
    console.log(`App listening on http://localhost:${PORT}`)
})