// import multer from 'multer'
// var express = require('express');
// var router = express.Router();

// var path = require('path');

// const APP_DIR = path.join(__dirname, '..', '..');
// const UPLOAD_DIR_4 = '/uploads/charts-cover/'


// var storage4 = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, APP_DIR + UPLOAD_DIR_4)
//   }
//   ,
//   filename: function (req, file, cb) {
//     var extension = file.originalname.replace(/^.*\./, '');
//     cb(null, 'chart-cover' + '-' + Date.now() + '.' + extension)
//   }
// })

// var upload4 = multer({ storage: storage4 })

// var cCover = require('../content/cover');
// var cChartCover = require('../content/chartcover');


// module.exports = exports = function (server) {
//   /* API: ChartCover*/
//   server.get('/chart-cover', cChartCover.listChart);
//   server.get('/chart-cover/:chart_id(\\d+)', cChartCover.detailChart);
//   server.post('/chart-cover', upload4.single('chartFile'), cChartCover.addChart);
//   server.put('/chart-cover/:chart_id(\\d+)', upload4.single('chartFile'), cChartCover.updateChart);
//   server.delete('/chart-cover/:chart_id(\\d+)', cChartCover.deleteChart);


//   /* API: Cover */
//   server.get('/cover', cCover.listStreaming);
//   server.get('/cover/:streaming_id(\\d+)', cCover.detailStreaming);
//   server.post('/cover/get', cCover.getStreaming);
//   server.post('/cover', cCover.addStreaming);
//   server.put('/cover/:streaming_id(\\d+)', cCover.updateStreaming);
//   server.delete('/cover/:streaming_id(\\d+)', cCover.deleteStreaming);

// }