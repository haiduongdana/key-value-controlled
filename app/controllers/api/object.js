const { sendData, sendError } = require('@utils/responses')
const Objects = require('@models/objects')
const { REQUEST_STATUSES: { BAD_REQUEST } } = require('@constants/index')

module.exports = {
    getObject: (req, res) => {
        let key = req.params.key
        let timestamp = req.query.timestamp
        let conditions = { key }
        if (timestamp)   conditions = { ...conditions, time: timestamp }
        Objects.findOne(conditions , null, { sort: { time: -1 } })
            .then(object => {
                sendData(res, {
                    data: {
                        object
                    }
                })
            })
            .catch((err) => {
                sendError(res, {
                    err,
                    status: BAD_REQUEST
                })
            })
    },
    createObject: (req, res) => {
        let data = req.body
        data.time = new Date(data.time * 1000)
        Objects.create(data, function (err, object) {
            if (err) {
                console.log(err);
                sendError(res, {
                    err,
                    status: BAD_REQUEST
                })
            } else {
                sendData(res, {
                    data: {
                        object
                    }
                })
            }
            // saved!
        });
    }
}
