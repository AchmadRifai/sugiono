const express = require('express'), bodyParser = require('body-parser'), conf = require('./config/config'), fs = require('fs')

const app = express()
app.use(require('cors')())
app.use(require('helmet')())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

fs.readdirSync('src/routes')
    .filter(s => fs.statSync('src/routes/' + s).isFile())
    .map(s => s.replace('.js', ''))
    .forEach(s => {
        conf.log('loop', s)
        app.use(s, require('./routes/' + s))
    })

app.all('*', (req, res) => conf.error404(new Error('Not found'), req, res))

app.listen(2101, () => conf.log('listeing', 'Listening on 2101'))