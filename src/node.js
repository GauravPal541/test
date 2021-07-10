const express = require('express')
const path = require('path')
const hbs = require('hbs')

const app = express()

const viewDir = path.join(__dirname, '../template/views')
const partialDir = path.join(__dirname, '../template/partial')
app.set('view engine', 'hbs')
app.set('views', viewDir)

hbs.registerPartials(partialDir)
app.get('', (req, res) => {
    res.render('index')
})



app.listen(3000,() =>{
    console.log('Server is up at 3000')
})