Route = Em.Route.extend

	model: ->
		store = @store
		Ember.RSVP.hash(
	      	fav_teams: store.find "fav", "fav_teams"
	      	teams: store.find "team"
	    )

	
	setupController: (controller, models) ->
    	@controllerFor("favourites").set "content", models.fav_teams
    	@controllerFor("teams").set "content", models.teams

`export default Route`