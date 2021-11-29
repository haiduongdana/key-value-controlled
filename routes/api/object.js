const router = require('express').Router()

// controllers
const object = require('@controllers/api/object')
// middleware

// utils
// const { sendData } = require('@utils/responses')

router.get('/:key', object.getObject)
router.post('/', object.createObject)
module.exports = router
