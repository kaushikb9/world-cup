module.exports = function(server) {

  // Create an API namespace, so that the root does not
  // have to be repeated for each end point.
  server.namespace('/api', function() {

        server.get('/favs/:id', function(req, res){
          if(req.params.id==="fav_teams"){
            var fav = {
              "fav":{
                "id":"fav_teams",
                "teams":["bra","eng","ger"]
              }
            }
          }else{
            var fav = {
              "fav":{
                "id":"fav_matches",
                "matches":[]
              }
            }
          }
          res.send(fav)
        });

        server.get('/groups', function(req, res){
          var groups = {
            "groups":[
              {"id":"A","teams":["bra","mex","cro","cmr"]},
              {"id":"B","teams":["esp","ned","chi","aus"]},
              {"id":"C","teams":["col","gre","civ","jpn"]},
              {"id":"D","teams":["uru","crc","eng","ita"]},
              {"id":"E","teams":["bra","mex","cro","cmr"]},
              {"id":"F","teams":["bra","mex","cro","cmr"]},
              {"id":"G","teams":["bra","mex","cro","cmr"]},
              {"id":"H","teams":["bra","mex","cro","cmr"]}
            ],
            "teams":[
              {"id":"gre","title":"Greece","code":"GRE","points":10,"fav":false},
              {"id":"rus","title":"Russia","code":"RUS","points":15},
              {"id":"ned","title":"Netherlands","code":"NED","points":10,"fav":false},
              {"id":"ger","title":"Germany","code":"GER","points":10,"fav": true},
              {"id":"por","title":"Portugal","code":"POR","points":10,"fav": true},
              {"id":"esp","title":"Spain","code":"ESP","points":10,"fav":false},
              {"id":"ita","title":"Italy","code":"ITA","points":9},
              {"id":"cro","title":"Croatia","code":"CRO","points":10,"fav":false},
              {"id":"fra","title":"France","code":"FRA","points":9},
              {"id":"eng","title":"England","code":"ENG","points":10,"fav":false},
              {"id":"sui","title":"Switzerland","code":"SUI","points":10,"fav":false},
              {"id":"bel","title":"Belgium","code":"BEL","points":10,"fav":false},
              {"id":"bih","title":"Bosnia-Herzegovina","code":"BIH","points":10,"fav":false},
              {"id":"alg","title":"Algeria","code":"ALG","points":10,"fav":false},
              {"id":"civ","title":"Ivory Coast","code":"CIV","points":10,"fav":false},
              {"id":"gha","title":"Ghana","code":"GHA","points":9},
              {"id":"cmr","title":"Cameroon","code":"CMR","points":10,"fav": true},
              {"id":"nga","title":"Nigeria","code":"NGA","points":9},
              {"id":"mex","title":"Mexico","code":"MEX","points":10,"fav":false},
              {"id":"usa","title":"United States","code":"USA","points":9},
              {"id":"hon","title":"Honduras","code":"HON","points":10,"fav":false},
              {"id":"crc","title":"Costa Rica","code":"CRC","points":10,"fav":false},
              {"id":"arg","title":"Argentina","code":"ARG","points":10,"fav":false},
              {"id":"bra","title":"Brazil","code":"BRA","points":9},
              {"id":"chi","title":"Chile","code":"CHI","points":10,"fav":false},
              {"id":"uru","title":"Uruguay","code":"URU","points":10,"fav":false},
              {"id":"col","title":"Colombia","code":"COL","points":10,"fav":false},
              {"id":"ecu","title":"Ecuador","code":"ECU","points":10,"fav":false},
              {"id":"aus","title":"Australia","code":"AUS","points":15},
              {"id":"jpn","title":"Japan","code":"JPN","points":10,"fav":false},
              {"id":"kor","title":"South Korea","code":"KOR","points":10,"fav": true},
              {"id":"irn","title":"Iran","code":"IRN","points":10,"fav":false}
            ]
          }
          res.send(groups);
        });

        server.get('/teams', function(req, res){
          var teams = {
            "teams":[
              {"id":"gre","title":"Greece","code":"GRE","points":10,"fav":false},
              {"id":"rus","title":"Russia","code":"RUS","points":15},
              {"id":"ned","title":"Netherlands","code":"NED","points":10,"fav":false},
              {"id":"ger","title":"Germany","code":"GER","points":10,"fav": true},
              {"id":"por","title":"Portugal","code":"POR","points":10,"fav": true},
              {"id":"esp","title":"Spain","code":"ESP","points":10,"fav":false},
              {"id":"ita","title":"Italy","code":"ITA","points":9},
              {"id":"cro","title":"Croatia","code":"CRO","points":10,"fav":false},
              {"id":"fra","title":"France","code":"FRA","points":9},
              {"id":"eng","title":"England","code":"ENG","points":10,"fav":false},
              {"id":"sui","title":"Switzerland","code":"SUI","points":10,"fav":false},
              {"id":"bel","title":"Belgium","code":"BEL","points":10,"fav":false},
              {"id":"bih","title":"Bosnia-Herzegovina","code":"BIH","points":10,"fav":false},
              {"id":"alg","title":"Algeria","code":"ALG","points":10,"fav":false},
              {"id":"civ","title":"Ivory Coast","code":"CIV","points":10,"fav":false},
              {"id":"gha","title":"Ghana","code":"GHA","points":9},
              {"id":"cmr","title":"Cameroon","code":"CMR","points":10,"fav": true},
              {"id":"nga","title":"Nigeria","code":"NGA","points":9},
              {"id":"mex","title":"Mexico","code":"MEX","points":10,"fav":false},
              {"id":"usa","title":"United States","code":"USA","points":9},
              {"id":"hon","title":"Honduras","code":"HON","points":10,"fav":false},
              {"id":"crc","title":"Costa Rica","code":"CRC","points":10,"fav":false},
              {"id":"arg","title":"Argentina","code":"ARG","points":10,"fav":false},
              {"id":"bra","title":"Brazil","code":"BRA","points":9},
              {"id":"chi","title":"Chile","code":"CHI","points":10,"fav":false},
              {"id":"uru","title":"Uruguay","code":"URU","points":10,"fav":false},
              {"id":"col","title":"Colombia","code":"COL","points":10,"fav":false},
              {"id":"ecu","title":"Ecuador","code":"ECU","points":10,"fav":false},
              {"id":"aus","title":"Australia","code":"AUS","points":15},
              {"id":"jpn","title":"Japan","code":"JPN","points":10,"fav":false},
              {"id":"kor","title":"South Korea","code":"KOR","points":10,"fav": true},
              {"id":"irn","title":"Iran","code":"IRN","points":10,"fav":false}
            ]
          }
          res.send(teams);
        });

    // Return fixture data for '/api/posts/:id'
    server.get('/posts/:id', function(req, res) {
      var post = {
        "post": {
          "id": 1,
          "title": "Rails is omakase",
          "comments": ["1", "2"],
          "user" : "dhh"
        },

        "comments": [{
          "id": "1",
          "body": "Rails is unagi"
        }, {
          "id": "2",
          "body": "Omakase O_o"
        }]
      };

      res.send(post);
    });
  });
};