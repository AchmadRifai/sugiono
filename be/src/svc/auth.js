const express = require('express'), conf = require('../config/config')

const login = async (req = express.request, res = express.response) => {
    const { username, password } = req.body
    const sandi = conf.hashing(conf.decrypting(password))
    await conf.dbTransaction(async db => {
        const users = await db.collection('users').find({ username, sandi }).toArray()
        if (0 == users.length) throw new Error('User not found')
        const user = users[0]
        const token = conf.encrypt(user._id.toString(), 'global')
        await db.collection('tokens').insertOne({ subject: user._id.toString(), access: 'global', token }, { maxTimeMS: Date.now() + (1000 * 7 * 60) })
        res.setHeader('Authorization', token).json(conf.toDto(user))
    })
}

module.exports = { login }