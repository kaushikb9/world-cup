var Controller,
  __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

Controller = Em.ObjectController.extend({
  needs: ["favourites", "teams"],
  teamImg: (function() {
    return "assets/" + (this.get('id')) + ".png";
  }).property("id"),
  isFav: (function() {
    var _ref;
    return _ref = this.get("id"), __indexOf.call(this.get("controllers.favourites.teams").map(function(team) {
      return team.get("id");
    }), _ref) >= 0;
  }).property("id", "controllers.favourites.teams.@each.id"),
  actions: {
    addToFav: function(team, todo) {
      var favourites;
      favourites = this.get("controllers.favourites");
      return this.store.find("team", team.get("id")).then(function(team) {
        if (todo === "add") {
          favourites.get("teams").pushObject(team);
        } else {
          favourites.get("teams").removeObject(team);
        }
        return favourites.get("content").save();
      });
    }
  }
});

export default Controller;