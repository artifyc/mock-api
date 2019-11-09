var express = require('express');
var router = express.Router();

/* GET specific image */
router.get('/:id', function(req, res, next) {
    var options = {
        root: path.join(__dirname, 'public'),
        dotfiles: 'deny',
        headers: {
          'x-timestamp': Date.now(),
          'x-sent': true
        }
      }
    res.send("lol");
});

module.exports = router;
