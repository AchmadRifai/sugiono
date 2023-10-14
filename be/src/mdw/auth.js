const express = require('express'), config = require('../config/config'), mongo = require('mongodb')

const login = async (req = express.request, next) => {
    if (req.body) throw new Error('Body not found')
    const { username, password } = req.body
    if (!username || !password) throw new Error('username and password is required')
    config.decrypting(password)
    next()
}

module.exports = { login }