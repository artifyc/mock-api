var express = require("express");
var router = express.Router();

router.get("/", function(req, res, next) {
    mockResponse = [
        {
          "id": 1,
          "artworkTitle": "Jack of Spades",
          "artistName": "sabimaki",
          "artistAvailability": "Open",
          "commissionType": "Half-body",
          "priceRange": "$$",
          "imageSource": "http://localhost:9000/images/jackofspades",
          "tags": ["prince", "jack"]
        },
        {
          "id": 2,
          "artworkTitle": "Bojack Crew",
          "artistName": "sabimaki",
          "artistAvailability": "Waitlist",
          "commissionType": "Full-body",
          "priceRange": "$",
          "imageSource": "http://localhost:9000/images/bojackcrew",
          "tags": ["bojack", "crew"]
        },
        {
          "id": 3,
          "artworkTitle": "Demon Slayer Girl",
          "artistName": "sabimaki",
          "artistAvailability": "Open",
          "commissionType": "Half-body",
          "priceRange": "$$",
          "imageSource": "http://localhost:9000/images/demonslayergirl",
          "tags": ["demon", "girl"]
        },
        {
          "id": 4,
          "artworkTitle": "Zelda Sketch",
          "artistName": "sabimaki",
          "artistAvailability": "Open",
          "commissionType": "Half-body",
          "priceRange": "$$",
          "imageSource": "http://localhost:9000/images/zeldasketch",
          "tags": ["zelda"]
        },
      ];

      res.json(mockResponse);
});

module.exports = router;
