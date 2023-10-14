const jwt = require('jsonwebtoken'), mongo = require('mongodb'), crypto = require('crypto'), express = require('express')

const secret = process.env.SECRET || 'everythinkwhatyouwant'
const MONGO_URL = process.env.MONGO_URL || 'mongodb://127.0.0.1:27017/sugiono'
const dbName = process.env.DB_NAME || 'sugiono'
const secretKey = process.env.SECRET_KEY || 'passwordyoursecretkey'

const decrypting = (encrypted = '') => {
    const key = crypto.createHash('sha512').update(secretKey.padEnd(32, 'z')).digest('hex').substring(0, 32)
    const iv = crypto.createHash('sha512').update(secretKey.padEnd(16, 'z')).digest('hex').substring(0, 16)
    const buff = Buffer.from(encrypted, 'hex')
    const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv)
    return decipher.update(buff.toString('utf8'), 'hex', 'utf8') + decipher.final('utf8')
}

const dbTransaction = async (exec = async (_ = new mongo.Db()) => { }) => {
    const conn = new mongo.MongoClient(MONGO_URL)
    try {
        await conn.connect()
        const session = conn.startSession()
        try {
            session.startTransaction()
            await exec(conn.db(dbName))
            await session.commitTransaction()
        } catch (e) {
            await session.abortTransaction()
            throw e
        } finally {
            await session.endSession()
        }
    } finally {
        await conn.close()
    }
}

const dbConnection = async (exec = async (_ = new mongo.Db()) => { }) => {
    const conn = new mongo.MongoClient(MONGO_URL)
    try {
        await conn.connect()
        await exec(conn.db(dbName))
    } finally {
        await conn.close()
    }
}

const decrypt = token => jwt.verify(token, secret)

const encrypt = (subject, access) => jwt.sign({ access }, secret, { subject, algorithm: 'HS512', expiresIn: Date.now() + (1000 * 7 * 60) })

const refreshToken = async token => {
    const result = decrypt(token)
    return encrypt(result.sub, result.access)
}

const log = (funcName, data) => console.log('[', new Date(), funcName, ']', data)

const error404 = (e = new Error(), req = express.request, res = express.response) => {
    log(req.url, e)
    res.status(404).json({ msg: e.message })
}

const error400 = (e = new Error(), req = express.request, res = express.response) => {
    log(req.url, e)
    res.status(400).json({ msg: e.message })
}

const error500 = (e = new Error(), req = express.request, res = express.response) => {
    log(req.url, e)
    res.status(500).json({ msg: e.message })
}

module.exports = { dbConnection, dbTransaction, error400, error404, error500, decrypt, decrypting, encrypt, log, refreshToken }