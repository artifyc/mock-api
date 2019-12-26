var express = require("express");
var router = express.Router();

router.get("/", function(req, res, next) {
    mockResponse = [
        {
          "id": 1,
          "artistName": "sabimaki",
          "artistDescription": "Hi, I'm sabimaki! All proceeds from commissions will go to paying ransom to Somali pirates. I just want to see my family again, thank you.",
          "joinDate": "2019",
          "origin": "Maryland",
          "muse": "Sypha Belnades",
          "socialIg": "sabimaki",
          "soicalTwit": "sabimaki2",
          "socialTumb": "sabimaki-art",
          "socialFb": "sabimaki",
          "artistprofilePic": "http://localhost:9000/images/kyle",
          "artistWork": [ {"src": "http://localhost:9000/images/jackofspades", "type": "Full-body"},
                          {"src": "http://localhost:9000/images/bojackcrew", "type": "Full-body"},
                          {"src": "http://localhost:9000/images/demonslayergirl", "type": "Full-body"},
                          {"src": "http://localhost:9000/images/zeldasketch", "type": "Full-body"}
                        ],
          "artistAcclaim": [ {"reviewer": "Kyle", "reviewDate": "April 20th, 2018", "stars": 5, "review": "This was awesome!"},
                              {"reviewer": "Allison", "reviewDate": "May 21st, 2019", "stars": 4, "review": "P cool"}
          ]
        }
      ];

      res.json(mockResponse);
});

module.exports = router;
