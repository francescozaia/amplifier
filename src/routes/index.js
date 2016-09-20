import express from 'express';
let router = express.Router();
let PDFDocument = require('pdfkit');
let fs = require('fs');
const stream = require('stream');

/* GET home page. */
router.get('/', function(req, res) {
  let doc = new PDFDocument();
  doc.pipe(res);
  doc.font('aller-light.ttf')
    .text('This is Good!!')
    .moveDown(0.5);
  doc.image('download.png', 320, 15, {fit: [100, 100]})
    .rect(320, 15, 100, 100)
    .stroke()
    .text('Fit', 320, 0);
  doc.addPage()
    .fillColor("blue")
    .text('Here is a link!', 100, 100)
    .underline(100, 100, 160, 27, {color: "#CC0000"})
    .link(100, 100, 160, 27, 'http://google.com/');
  doc.end();
  //res.render('index', {title: 'Express'});
});
module.exports = router;
