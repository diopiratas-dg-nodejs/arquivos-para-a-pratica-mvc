const express = require('express')
const app = express()
const path = require('path')

const routerHome = require('./routes/home')
const routerAbout = require('./routes/about')

app.use('/', routerHome)
app.use('/about', routerAbout)

app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, '/public')));

app.listen(3000, () => {console.log('Servidor rodando na porta 3000')})