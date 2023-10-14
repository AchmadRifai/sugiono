const express = require('express'), conf = require('../config/config'), mdw = require('../mdw/auth'), svc = require('../svc/auth')

const router = express.Router()

router.post('/login', (req, res, next) => mdw.login(req, next).catch(e => conf.error400(e, res)),
    (req, res) => svc.login(req, res).catch(e => conf.error500(e, res)))

module.exports = router