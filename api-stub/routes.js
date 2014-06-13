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
              {"id":"E","teams":["sui","ecu","fra","hon"]},
              {"id":"F","teams":["arg","bih","irn","nga"]},
              {"id":"G","teams":["ger","por","gha","usa"]},
              {"id":"H","teams":["bel","alg","rus","kor"]}
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
    
    server.get('rounds', function(req, res){
      var rounds = {
        "rounds": [
          {"title":"Matchday 1","start_at":"2014/06/12","end_at":"2014/06/12","id":"matchday1"},
          {"title":"Matchday 2","start_at":"2014/06/13","end_at":"2014/06/13","id":"matchday2"},
          {"title":"Matchday 3","start_at":"2014/06/14","end_at":"2014/06/14","id":"matchday3"},
          {"title":"Matchday 4","start_at":"2014/06/15","end_at":"2014/06/15","id":"matchday4"},
          {"title":"Matchday 5","start_at":"2014/06/16","end_at":"2014/06/16","id":"matchday5"},
          {"title":"Matchday 6","start_at":"2014/06/17","end_at":"2014/06/17","id":"matchday6"},
          {"title":"Matchday 7","start_at":"2014/06/18","end_at":"2014/06/18","id":"matchday7"},
          {"title":"Matchday 8","start_at":"2014/06/19","end_at":"2014/06/19","id":"matchday8"},
          {"title":"Matchday 9","start_at":"2014/06/20","end_at":"2014/06/20","id":"matchday9"},
          {"title":"Matchday 10","start_at":"2014/06/21","end_at":"2014/06/21","id":"matchday10"},
          {"title":"Matchday 11","start_at":"2014/06/22","end_at":"2014/06/22","id":"matchday11"},
          {"title":"Matchday 12","start_at":"2014/06/23","end_at":"2014/06/23","id":"matchday12"},
          {"title":"Matchday 13","start_at":"2014/06/24","end_at":"2014/06/24","id":"matchday13"},
          {"title":"Matchday 14","start_at":"2014/06/25","end_at":"2014/06/25","id":"matchday14"},
          {"title":"Matchday 15","start_at":"2014/06/26","end_at":"2014/06/26","id":"matchday15"},
          {"title":"Round of 16","start_at":"1912/01/01","end_at":"1912/01/01","id":"matchday16"},
          {"title":"Quarter-finals","start_at":"1912/01/01","end_at":"1912/01/01","id":"matchday17"},
          {"title":"Semi-finals","start_at":"1912/01/01","end_at":"1912/01/01","id":"matchday18"},
          {"title":"Round 19  -  Match for third place","start_at":"1912/01/01","end_at":"1912/01/01","id":"matchday19"},
          {"title":"Final","start_at":"1912/01/01","end_at":"1912/01/01","id":"matchday20"}
        ]
      }
      res.send(rounds);
    });

    server.get('matches', function(req, res){
      var matches = {
        "matches": [
          {"team1_key":"mex","team2_key":"cmr","play_at":"2014/06/13","score1":null,"score2":null,"score1ot":null,"score2ot":null,"score1p":null,"score2p":null,"matchday":"matchday2","id":"2-mex:cmr"},
          {"team1_key":"esp","team2_key":"ned","play_at":"2014/06/13","score1":null,"score2":null,"score1ot":null,"score2ot":null,"score1p":null,"score2p":null,"matchday":"matchday2","id":"2-esp:ned"},
          {"team1_key":"chi","team2_key":"aus","play_at":"2014/06/13","score1":null,"score2":null,"score1ot":null,"score2ot":null,"score1p":null,"score2p":null,"matchday":"matchday2","id":"2-chi:aus"},
          {"team1_key":"bra","team2_key":"cro","play_at":"2014/06/12","score1":null,"score2":null,"score1ot":null,"score2ot":null,"score1p":null,"score2p":null,"matchday":"matchday1","id":"1-bra:cro"},
          {"team1_key":"col","team2_key":"gre","play_at":"2014/06/14","score1":null,"score2":null,"score1ot":null,"score2ot":null,"score1p":null,"score2p":null,"matchday":"matchday3","id":"3-col:gre"},
          {"team1_key":"civ","team2_key":"jpn","play_at":"2014/06/14","score1":null,"score2":null,"score1ot":null,"score2ot":null,"score1p":null,"score2p":null,"matchday":"matchday3","id":"3-civ:jpn"},
          {"team1_key":"uru","team2_key":"crc","play_at":"2014/06/14","score1":null,"score2":null,"score1ot":null,"score2ot":null,"score1p":null,"score2p":null,"matchday":"matchday3","id":"3-uru:crc"},
          {"team1_key":"eng","team2_key":"ita","play_at":"2014/06/14","score1":null,"score2":null,"score1ot":null,"score2ot":null,"score1p":null,"score2p":null,"matchday":"matchday3","id":"3-eng:ita"},
          {"team1_key":"irn","team2_key":"nga","play_at":"2014/06/16","score1":null,"score2":null,"score1ot":null,"score2ot":null,"score1p":null,"score2p":null,"matchday":"matchday5","id":"5-irn:nga"},
          {"team1_key":"ger","team2_key":"por","play_at":"2014/06/16","score1":null,"score2":null,"score1ot":null,"score2ot":null,"score1p":null,"score2p":null,"matchday":"matchday5","id":"5-ger:por"},
          {"team1_key":"gha","team2_key":"usa","play_at":"2014/06/16","score1":null,"score2":null,"score1ot":null,"score2ot":null,"score1p":null,"score2p":null,"matchday":"matchday5","id":"5-gha:usa"},
          {"team1_key":"sui","team2_key":"ecu","play_at":"2014/06/15","score1":null,"score2":null,"score1ot":null,"score2ot":null,"score1p":null,"score2p":null,"matchday":"matchday4","id":"4-sui:ecu"},
          {"team1_key":"fra","team2_key":"hon","play_at":"2014/06/15","score1":null,"score2":null,"score1ot":null,"score2ot":null,"score1p":null,"score2p":null,"matchday":"matchday4","id":"4-fra:hon"},
          {"team1_key":"arg","team2_key":"bih","play_at":"2014/06/15","score1":null,"score2":null,"score1ot":null,"score2ot":null,"score1p":null,"score2p":null,"matchday":"matchday4","id":"4-arg:bih"},
          {"team1_key":"bel","team2_key":"alg","play_at":"2014/06/17","score1":null,"score2":null,"score1ot":null,"score2ot":null,"score1p":null,"score2p":null,"matchday":"matchday6","id":"6-bel:alg"},
          {"team1_key":"rus","team2_key":"kor","play_at":"2014/06/17","score1":null,"score2":null,"score1ot":null,"score2ot":null,"score1p":null,"score2p":null,"matchday":"matchday6","id":"6-rus:kor"},
          {"team1_key":"bra","team2_key":"mex","play_at":"2014/06/17","score1":null,"score2":null,"score1ot":null,"score2ot":null,"score1p":null,"score2p":null,"matchday":"matchday6","id":"6-bra:mex"},
          {"team1_key":"cmr","team2_key":"cro","play_at":"2014/06/18","score1":null,"score2":null,"score1ot":null,"score2ot":null,"score1p":null,"score2p":null,"matchday":"matchday7","id":"7-cmr:cro"},
          {"team1_key":"esp","team2_key":"chi","play_at":"2014/06/18","score1":null,"score2":null,"score1ot":null,"score2ot":null,"score1p":null,"score2p":null,"matchday":"matchday7","id":"7-esp:chi"},
          {"team1_key":"aus","team2_key":"ned","play_at":"2014/06/18","score1":null,"score2":null,"score1ot":null,"score2ot":null,"score1p":null,"score2p":null,"matchday":"matchday7","id":"7-aus:ned"},
          {"team1_key":"col","team2_key":"civ","play_at":"2014/06/19","score1":null,"score2":null,"score1ot":null,"score2ot":null,"score1p":null,"score2p":null,"matchday":"matchday8","id":"8-col:civ"},
          {"team1_key":"jpn","team2_key":"gre","play_at":"2014/06/19","score1":null,"score2":null,"score1ot":null,"score2ot":null,"score1p":null,"score2p":null,"matchday":"matchday8","id":"8-jpn:gre"},
          {"team1_key":"uru","team2_key":"eng","play_at":"2014/06/19","score1":null,"score2":null,"score1ot":null,"score2ot":null,"score1p":null,"score2p":null,"matchday":"matchday8","id":"8-uru:eng"},
          {"team1_key":"ita","team2_key":"crc","play_at":"2014/06/20","score1":null,"score2":null,"score1ot":null,"score2ot":null,"score1p":null,"score2p":null,"matchday":"matchday9","id":"9-ita:crc"},
          {"team1_key":"sui","team2_key":"fra","play_at":"2014/06/20","score1":null,"score2":null,"score1ot":null,"score2ot":null,"score1p":null,"score2p":null,"matchday":"matchday9","id":"9-sui:fra"},
          {"team1_key":"hon","team2_key":"ecu","play_at":"2014/06/20","score1":null,"score2":null,"score1ot":null,"score2ot":null,"score1p":null,"score2p":null,"matchday":"matchday9","id":"9-hon:ecu"},
          {"team1_key":"arg","team2_key":"irn","play_at":"2014/06/21","score1":null,"score2":null,"score1ot":null,"score2ot":null,"score1p":null,"score2p":null,"matchday":"matchday10","id":"10-arg:irn"},
          {"team1_key":"nga","team2_key":"bih","play_at":"2014/06/21","score1":null,"score2":null,"score1ot":null,"score2ot":null,"score1p":null,"score2p":null,"matchday":"matchday10","id":"10-nga:bih"},
          {"team1_key":"ger","team2_key":"gha","play_at":"2014/06/21","score1":null,"score2":null,"score1ot":null,"score2ot":null,"score1p":null,"score2p":null,"matchday":"matchday10","id":"10-ger:gha"},
          {"team1_key":"jpn","team2_key":"col","play_at":"2014/06/24","score1":null,"score2":null,"score1ot":null,"score2ot":null,"score1p":null,"score2p":null,"matchday":"matchday13","id":"13-jpn:col"},
          {"team1_key":"civ","team2_key":"gre","play_at":"2014/06/24","score1":null,"score2":null,"score1ot":null,"score2ot":null,"score1p":null,"score2p":null,"matchday":"matchday13","id":"13-civ:gre"},
          {"team1_key":"ita","team2_key":"uru","play_at":"2014/06/24","score1":null,"score2":null,"score1ot":null,"score2ot":null,"score1p":null,"score2p":null,"matchday":"matchday13","id":"13-ita:uru"},
          {"team1_key":"crc","team2_key":"eng","play_at":"2014/06/24","score1":null,"score2":null,"score1ot":null,"score2ot":null,"score1p":null,"score2p":null,"matchday":"matchday13","id":"13-crc:eng"},
          {"team1_key":"usa","team2_key":"por","play_at":"2014/06/22","score1":null,"score2":null,"score1ot":null,"score2ot":null,"score1p":null,"score2p":null,"matchday":"matchday11","id":"11-usa:por"},
          {"team1_key":"bel","team2_key":"rus","play_at":"2014/06/22","score1":null,"score2":null,"score1ot":null,"score2ot":null,"score1p":null,"score2p":null,"matchday":"matchday11","id":"11-bel:rus"},
          {"team1_key":"kor","team2_key":"alg","play_at":"2014/06/22","score1":null,"score2":null,"score1ot":null,"score2ot":null,"score1p":null,"score2p":null,"matchday":"matchday11","id":"11-kor:alg"},
          {"team1_key":"hon","team2_key":"sui","play_at":"2014/06/25","score1":null,"score2":null,"score1ot":null,"score2ot":null,"score1p":null,"score2p":null,"matchday":"matchday14","id":"14-hon:sui"},
          {"team1_key":"ecu","team2_key":"fra","play_at":"2014/06/25","score1":null,"score2":null,"score1ot":null,"score2ot":null,"score1p":null,"score2p":null,"matchday":"matchday14","id":"14-ecu:fra"},
          {"team1_key":"nga","team2_key":"arg","play_at":"2014/06/25","score1":null,"score2":null,"score1ot":null,"score2ot":null,"score1p":null,"score2p":null,"matchday":"matchday14","id":"14-nga:arg"},
          {"team1_key":"bih","team2_key":"irn","play_at":"2014/06/25","score1":null,"score2":null,"score1ot":null,"score2ot":null,"score1p":null,"score2p":null,"matchday":"matchday14","id":"14-bih:irn"}
        ]
      }
      res.send(matches);
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