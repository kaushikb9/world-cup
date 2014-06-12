Route = Em.Route.extend

	model: ->
		@.store.find "group"

`export default Route`