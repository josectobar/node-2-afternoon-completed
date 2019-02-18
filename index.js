require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const massive = require('massive')
const ctrl = require('./products_controller')

const app = express()

app.use(bodyParser.json())

const { CONNECTION_STRING } = process.env

massive(CONNECTION_STRING).then((db) => {
    app.set('db', db)
    app.listen(port, () => console.log('Live at 3000!'))
}).catch((err) => {
    console.log(err)
})

app.route('/api/products/')
    .get(ctrl.getAll)
    .post(ctrl.create)

app.route('/api/product/:id')    
    .get(ctrl.getOne)
    .put(ctrl.update)
    .delete(ctrl.delete)

const port = process.env.PORT || 3000