const express = require('express')
const app = express()
const path = require('path')

const HTTP_PORT = 3000
  , PUBLIC_FOLDER = 'public'
  , INDEX_HTML = path.join(__dirname + `/${PUBLIC_FOLDER}/index.html`)

app.use(`/${PUBLIC_FOLDER}`, express.static(path.join(__dirname, PUBLIC_FOLDER)))

app.get('/', (req, res) => res.sendFile(INDEX_HTML))

app.post('/login', (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    res.send({ user: 'pippo', role: 'user', token: 'TOKEN' })
})

app.post('/logout', (req, res) => {
    if (req.get('authorization') === 'Bearer: TOKEN')
        res.status(200).send()
    else
        res.status(403).send()
})

app.get('/challenge', (req, res) => {
    if (req.get('authorization') === 'Bearer: TOKEN')
        res.status(200).send('congratz!')
    else
        res.status(403).send('nope')
})

app.listen(HTTP_PORT, () => console.log('Example app listening on port 3000!'))
