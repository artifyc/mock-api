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
          "imageSource": "http://localhost:9000/images/jackofspades"
        },
        {
          "id": 2,
          "artworkTitle": "Bojack Crew",
          "artistName": "sabimaki",
          "artistAvailability": "Waitlist",
          "commissionType": "Full-body",
          "priceRange": "$",
          "imageSource": "http://localhost:9000/images/bojackcrew"
        },
        {
          "id": 3,
          "artworkTitle": "Demon Slayer Girl",
          "artistName": "sabimaki",
          "artistAvailability": "Open",
          "commissionType": "Half-body",
          "priceRange": "$$",
          "imageSource": "http://localhost:9000/images/demonslayergirl"
        },
        {
          "id": 4,
          "artworkTitle": "Jack of Spades",
          "artistName": "sabimaki",
          "artistAvailability": "Open",
          "commissionType": "Half-body",
          "priceRange": "$$",
          "imageSource": "http://localhost:9000/images/zeldasketch"
        },
      ];
    
      res.json(mockResponse);
});

module.exports = router;