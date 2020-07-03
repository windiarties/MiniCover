const ResponseHelper = require('../content/rh')
const dt = require('../content/dt')
const bl = {

    readStreaming: (req, res, next) => {
        var docs = req.body //res=lempar data ke client
        // var param = {
        //     artist_name: docs['artist_name'],
        //     song_name: docs['song_name']
        // }



        dt.readStreamingAllHandlerData(function (items) {
            ResponseHelper.sendResponse(res, 200, items)
        }, docs)

    }
}

module.exports = bl