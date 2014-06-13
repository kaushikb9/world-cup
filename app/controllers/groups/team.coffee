Controller = Em.ObjectController.extend
	
	needs: ["favourites","teams"]

	teamImg: (()->
		"assets/#{@get('id')}.png"
	).property("id")

	isFav: (()->
		@get("id") in @get("controllers.favourites.teams").map((team)->team.get("id"))
	).property("id","controllers.favourites.teams.@each.id")

	actions:
		addToFav: (team, todo)->
			favourites = @get("controllers.favourites")
			@store.find("team", team.get("id")).then((team)->
				if todo is "add"
					favourites.get("teams").pushObject team
				else
					favourites.get("teams").removeObject team
				favourites.get("content").save()
			)

`export default Controller`