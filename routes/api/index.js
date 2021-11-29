const router = require('express').Router()
const oauthRoute = require('./oauth')
const testRoute = require('./test')
const objectRoute = require('./object')

router.use('/oauth', oauthRoute)

router.use('/test', testRoute)

router.use('/object', objectRoute)

module.exports = router
