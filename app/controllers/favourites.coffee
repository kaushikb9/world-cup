Controller = Em.ObjectController.extend

	teams: (()->
		@get("content").get("teams")
	).property("content.teams")

	matches: null

`export default Controller`