// module.exports = function(server) {

//   // Create an API namespace, so that the root does not
//   // have to be repeated for each end point.
//   server.namespace('/api', function() {

//     // Return fixture data for '/api/posts/:id'
//     server.get('/groups', function(req, res){
//       var groups = {
//         "groups":[
//           {"id":"A","teams":["bra","mex","cro","cmr"]},
//           {"id":"B","teams":["esp","ned","chi","aus"]},
//           {"id":"C","teams":["col","gre","civ","jpn"]},
//           {"id":"D","teams":["bra","mex","cro","cmr"]},
//           {"id":"E","teams":["bra","mex","cro","cmr"]},
//           {"id":"F","teams":["bra","mex","cro","cmr"]},
//           {"id":"G","teams":["bra","mex","cro","cmr"]},
//           {"id":"H","teams":["bra","mex","cro","cmr"]}
//         ]
//       }
//       res.send(groups);
//     });

//     server.get('/favs', function(req, res){
//       var favs = {
//         "favs":[
//           {"id":"fav_teams","teams":["bra","eng","ger"]}
//         ]
//       }
//       res.send(favs);
//     });

//     server.get('/teams', function(req, res){
//       var teams = {
//         "teams":[
//           {"id":"gre","title":"Greece","code":"GRE","points":10},
//           {"id":"rus","title":"Russia","code":"RUS","points":10},
//           {"id":"ned","title":"Netherlands","code":"NED","points":10},
//           {"id":"ger","title":"Germany","code":"GER","points":10},
//           {"id":"por","title":"Portugal","code":"POR","points":10},
//           {"id":"esp","title":"Spain","code":"ESP","points":10},
//           {"id":"ita","title":"Italy","code":"ITA","points":10},
//           {"id":"cro","title":"Croatia","code":"CRO","points":10},
//           {"id":"fra","title":"France","code":"FRA","points":10},
//           {"id":"eng","title":"England","code":"ENG","points":10},
//           {"id":"sui","title":"Switzerland","code":"SUI","points":10},
//           {"id":"bel","title":"Belgium","code":"BEL","points":10},
//           {"id":"bih","title":"Bosnia-Herzegovina","code":"BIH","points":10},
//           {"id":"alg","title":"Algeria","code":"ALG","points":10},
//           {"id":"civ","title":"Ivory Coast","code":"CIV","points":10},
//           {"id":"gha","title":"Ghana","code":"GHA","points":10},
//           {"id":"cmr","title":"Cameroon","code":"CMR","points":10},
//           {"id":"nga","title":"Nigeria","code":"NGA","points":10},
//           {"id":"mex","title":"Mexico","code":"MEX","points":10},
//           {"id":"usa","title":"United States","code":"USA","points":10},
//           {"id":"hon","title":"Honduras","code":"HON","points":10},
//           {"id":"crc","title":"Costa Rica","code":"CRC","points":10},
//           {"id":"arg","title":"Argentina","code":"ARG","points":10},
//           {"id":"bra","title":"Brazil","code":"BRA","points":10},
//           {"id":"chi","title":"Chile","code":"CHI","points":10},
//           {"id":"uru","title":"Uruguay","code":"URU","points":10},
//           {"id":"col","title":"Colombia","code":"COL","points":10},
//           {"id":"ecu","title":"Ecuador","code":"ECU","points":10},
//           {"id":"aus","title":"Australia","code":"AUS","points":10},
//           {"id":"jpn","title":"Japan","code":"JPN","points":10},
//           {"id":"kor","title":"South Korea","code":"KOR","points":10},
//           {"id":"irn","title":"Iran","code":"IRN","points":10}
//         ],
//         "groups":[
//           {"id":"A","teams":["bra","mex","cro","cmr"]},
//           {"id":"B","teams":["esp","ned","chi","aus"]},
//           {"id":"C","teams":["col","gre","civ","jpn"]},
//           {"id":"D","teams":["bra","mex","cro","cmr"]},
//           {"id":"E","teams":["bra","mex","cro","cmr"]},
//           {"id":"F","teams":["bra","mex","cro","cmr"]},
//           {"id":"G","teams":["bra","mex","cro","cmr"]},
//           {"id":"H","teams":["bra","mex","cro","cmr"]}
//         ]
//       }
//       res.send(teams);
//     });

//     // server.get('/matchdays',function(req, res){
//     //   var matchdays = {
//     //     "matchdays": [
//     //       {"id":"matchday1","title":"Matchday 1","start_at":"2014/06/12","end_at":"2014/06/12"},
//     //       {"id":"matchday2","title":"Matchday 2","start_at":"2014/06/13","end_at":"2014/06/13"},
//     //       {"id":"matchday3","title":"Matchday 3","start_at":"2014/06/14","end_at":"2014/06/14"},
//     //       {"id":"matchday4","title":"Matchday 4","start_at":"2014/06/15","end_at":"2014/06/15"},
//     //       {"id":"matchday5","title":"Matchday 5","start_at":"2014/06/16","end_at":"2014/06/16"},
//     //       {"id":"matchday6","title":"Matchday 6","start_at":"2014/06/17","end_at":"2014/06/17"},
//     //       {"id":"matchday7","title":"Matchday 7","start_at":"2014/06/18","end_at":"2014/06/18"},
//     //       {"id":"matchday8","title":"Matchday 8","start_at":"2014/06/19","end_at":"2014/06/19"},
//     //       {"id":"matchday9","title":"Matchday 9","start_at":"2014/06/20","end_at":"2014/06/20"},
//     //       {"id":"matchday10","title":"Matchday 10","start_at":"2014/06/21","end_at":"2014/06/21"},
//     //       {"id":"matchday11","title":"Matchday 11","start_at":"2014/06/22","end_at":"2014/06/22"},
//     //       {"id":"matchday12","title":"Matchday 12","start_at":"2014/06/23","end_at":"2014/06/23"},
//     //       {"id":"matchday13","title":"Matchday 13","start_at":"2014/06/24","end_at":"2014/06/24"},
//     //       {"id":"matchday14","title":"Matchday 14","start_at":"2014/06/25","end_at":"2014/06/25"},
//     //       {"id":"matchday15","title":"Matchday 15","start_at":"2014/06/26","end_at":"2014/06/26"},
//     //       {"id":"matchday16","title":"Round of 16","start_at":"1912/01/01","end_at":"1912/01/01"},
//     //       {"id":"matchday17","title":"Quarter-finals","start_at":"1912/01/01","end_at":"1912/01/01"},
//     //       {"id":"matchday18","title":"Semi-finals","start_at":"1912/01/01","end_at":"1912/01/01"},
//     //       {"id":"matchday19","title":"Round 19  -  Match for third place","start_at":"1912/01/01","end_at":"1912/01/01"},
//     //       {"id":"matchday20","title":"Final","start_at":"1912/01/01","end_at":"1912/01/01"}
//     //     ]
//     //   }
//     //   res.send(matchdays);
//     // });

//     // server.get('/matchday/:id', function(req, res) {
//     //   switch(id){
//     //     case 1:
//     //       var matchday = {
//     //         "matches": [
//     //           {"team1_key":"bra","team1_title":"Brazil","team1_code":"BRA","team2_key":"cro","team2_title":"Croatia","team2_code":"CRO","play_at":"2014/06/12","score1":null,"score2":null,"score1ot":null,"score2ot":null,"score1p":null,"score2p":null}
//     //         ] 
//     //       }        
//     //     case 2:
//     //       var matchday = {
//     //         "matches": [
//     //           {"team1_key":"bra","team1_title":"Brazil","team1_code":"BRA","team2_key":"cro","team2_title":"Croatia","team2_code":"CRO","play_at":"2014/06/12","score1":null,"score2":null,"score1ot":null,"score2ot":null,"score1p":null,"score2p":null}
//     //         ] 
//     //       }        
//     //     case 3:
//     //       var matchday = {
//     //         "matches": [
//     //           {"team1_key":"bra","team1_title":"Brazil","team1_code":"BRA","team2_key":"cro","team2_title":"Croatia","team2_code":"CRO","play_at":"2014/06/12","score1":null,"score2":null,"score1ot":null,"score2ot":null,"score1p":null,"score2p":null}
//     //         ] 
//     //       }        
//     //   }
//     //   res.send(matchday)
//     // });

//   });
// };


module.exports = function(server) {

  // Create an API namespace, so that the root does not
  // have to be repeated for each end point.
  server.namespace('/api', function() {

        server.get('/groups', function(req, res){
          var groups = {
            "groups":[
              {"id":"A","teams":["bra","mex","cro","cmr"]},
              {"id":"B","teams":["esp","ned","chi","aus"]},
              {"id":"C","teams":["col","gre","civ","jpn"]},
              {"id":"D","teams":["bra","mex","cro","cmr"]},
              {"id":"E","teams":["bra","mex","cro","cmr"]},
              {"id":"F","teams":["bra","mex","cro","cmr"]},
              {"id":"G","teams":["bra","mex","cro","cmr"]},
              {"id":"H","teams":["bra","mex","cro","cmr"]}
            ],
            "teams":[
              {"id":"gre","title":"Greece","code":"GRE","points":10},
              {"id":"rus","title":"Russia","code":"RUS","points":10},
              {"id":"ned","title":"Netherlands","code":"NED","points":10},
              {"id":"ger","title":"Germany","code":"GER","points":10},
              {"id":"por","title":"Portugal","code":"POR","points":10},
              {"id":"esp","title":"Spain","code":"ESP","points":10},
              {"id":"ita","title":"Italy","code":"ITA","points":10},
              {"id":"cro","title":"Croatia","code":"CRO","points":10},
              {"id":"fra","title":"France","code":"FRA","points":10},
              {"id":"eng","title":"England","code":"ENG","points":10},
              {"id":"sui","title":"Switzerland","code":"SUI","points":10},
              {"id":"bel","title":"Belgium","code":"BEL","points":10},
              {"id":"bih","title":"Bosnia-Herzegovina","code":"BIH","points":10},
              {"id":"alg","title":"Algeria","code":"ALG","points":10},
              {"id":"civ","title":"Ivory Coast","code":"CIV","points":10},
              {"id":"gha","title":"Ghana","code":"GHA","points":10},
              {"id":"cmr","title":"Cameroon","code":"CMR","points":10},
              {"id":"nga","title":"Nigeria","code":"NGA","points":10},
              {"id":"mex","title":"Mexico","code":"MEX","points":10},
              {"id":"usa","title":"United States","code":"USA","points":10},
              {"id":"hon","title":"Honduras","code":"HON","points":10},
              {"id":"crc","title":"Costa Rica","code":"CRC","points":10},
              {"id":"arg","title":"Argentina","code":"ARG","points":10},
              {"id":"bra","title":"Brazil","code":"BRA","points":10},
              {"id":"chi","title":"Chile","code":"CHI","points":10},
              {"id":"uru","title":"Uruguay","code":"URU","points":10},
              {"id":"col","title":"Colombia","code":"COL","points":10},
              {"id":"ecu","title":"Ecuador","code":"ECU","points":10},
              {"id":"aus","title":"Australia","code":"AUS","points":10},
              {"id":"jpn","title":"Japan","code":"JPN","points":10},
              {"id":"kor","title":"South Korea","code":"KOR","points":10},
              {"id":"irn","title":"Iran","code":"IRN","points":10}
            ]
          }
          res.send(groups);
        });

        server.get('/teams', function(req, res){
          var teams = {
            "teams":[
              {"id":"gre","title":"Greece","code":"GRE","points":10},
              {"id":"rus","title":"Russia","code":"RUS","points":10},
              {"id":"ned","title":"Netherlands","code":"NED","points":10},
              {"id":"ger","title":"Germany","code":"GER","points":10},
              {"id":"por","title":"Portugal","code":"POR","points":10},
              {"id":"esp","title":"Spain","code":"ESP","points":10},
              {"id":"ita","title":"Italy","code":"ITA","points":10},
              {"id":"cro","title":"Croatia","code":"CRO","points":10},
              {"id":"fra","title":"France","code":"FRA","points":10},
              {"id":"eng","title":"England","code":"ENG","points":10},
              {"id":"sui","title":"Switzerland","code":"SUI","points":10},
              {"id":"bel","title":"Belgium","code":"BEL","points":10},
              {"id":"bih","title":"Bosnia-Herzegovina","code":"BIH","points":10},
              {"id":"alg","title":"Algeria","code":"ALG","points":10},
              {"id":"civ","title":"Ivory Coast","code":"CIV","points":10},
              {"id":"gha","title":"Ghana","code":"GHA","points":10},
              {"id":"cmr","title":"Cameroon","code":"CMR","points":10},
              {"id":"nga","title":"Nigeria","code":"NGA","points":10},
              {"id":"mex","title":"Mexico","code":"MEX","points":10},
              {"id":"usa","title":"United States","code":"USA","points":10},
              {"id":"hon","title":"Honduras","code":"HON","points":10},
              {"id":"crc","title":"Costa Rica","code":"CRC","points":10},
              {"id":"arg","title":"Argentina","code":"ARG","points":10},
              {"id":"bra","title":"Brazil","code":"BRA","points":10},
              {"id":"chi","title":"Chile","code":"CHI","points":10},
              {"id":"uru","title":"Uruguay","code":"URU","points":10},
              {"id":"col","title":"Colombia","code":"COL","points":10},
              {"id":"ecu","title":"Ecuador","code":"ECU","points":10},
              {"id":"aus","title":"Australia","code":"AUS","points":10},
              {"id":"jpn","title":"Japan","code":"JPN","points":10},
              {"id":"kor","title":"South Korea","code":"KOR","points":10},
              {"id":"irn","title":"Iran","code":"IRN","points":10}
            ],
            "groups":[
              {"id":"A","teams":["bra","mex","cro","cmr"]},
              {"id":"B","teams":["esp","ned","chi","aus"]},
              {"id":"C","teams":["col","gre","civ","jpn"]},
              {"id":"D","teams":["bra","mex","cro","cmr"]},
              {"id":"E","teams":["bra","mex","cro","cmr"]},
              {"id":"F","teams":["bra","mex","cro","cmr"]},
              {"id":"G","teams":["bra","mex","cro","cmr"]},
              {"id":"H","teams":["bra","mex","cro","cmr"]}
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