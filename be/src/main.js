const express = require('express'), bodyParser = require('body-parser'), conf = require('./config/config')

const app = express()
app.use(require('cors')())
app.use(require('helmet')())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.listen(2101, () => conf.log('listeing', 'Listening on 2101'))