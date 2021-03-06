var express = require('express');
var router = express.Router();
const path = require('path')

/* GET specific image */
router.get('/:name', function(req, res, next) {
  var options = {
    root: path.join(__dirname, '/../public'),
    dotfiles: 'deny',
    headers: {
      'x-timestamp': Date.now(),
      'x-sent': true
    }
  }

  var fileName = "images/" + req.params.name + ".jpg"
  res.sendFile(fileName, options, function (err) {
    if (err) {
      next(err)
    } else {
      console.log('Sent:', fileName)
    }
  })
});

module.exports = router;
