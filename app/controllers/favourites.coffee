Controller = Em.ObjectController.extend

	teams: (()->
		@get("content").get("teams")
	).property("content.teams")

`export default Controller`