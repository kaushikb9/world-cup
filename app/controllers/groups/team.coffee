Controller = Em.ObjectController.extend
	
	needs: ["favourites","teams"]

	teamImg: (()->
		"assets/#{@get('id')}.png"
	).property("id")

	isFav: (()->
		@get("id") in @get("controllers.favourites.teams").map((team)->team.get("id"))
	).property("id")

	actions:
		addToFav: (team, todo)->
			fav_teams = @get("controllers.favourites.teams")
			# [todo] - check why this cannot be done
			# fav_teams.pushObject team 

			@store.find("team", team.get("id")).then((team)->
				if todo is "add"
					fav_teams.pushObject team
				else
					fav_teams.removeObject team
			)

`export default Controller`