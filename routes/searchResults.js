var express = require("express");
var router = express.Router();

router.get("/", function(req, res, next) {
    mockResponse = [
        {
          "id": 1,
          "artworkTitle": "blah",
          "artistName": "blah",
          "artistAvailability": "Open",
          "commissionType": "Full-body",
          "priceRange": "$$",
          "imageSource": ""
        },
        {
          "id": 2,
          "artworkTitle": "blah",
          "artistName": "blah",
          "artistAvailability": "Open",
          "commissionType": "Full-body",
          "priceRange": "$$",
          "imageSource": ""
        },
        {
          "id": 3,
          "artworkTitle": "blah",
          "artistName": "blah",
          "artistAvailability": "Open",
          "commissionType": "Full-body",
          "priceRange": "$$",
          "imageSource": ""
        },
        {
          "id": 4,
          "artworkTitle": "blah",
          "artistName": "blah",
          "artistAvailability": "Open",
          "commissionType": "Full-body",
          "priceRange": "$$",
          "imageSource": ""
        },
      ];
      res.json(mockResponse);
});

module.exports = router;