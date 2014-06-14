Route = Em.Route.extend

	model: ->
		@.store.find "match"

`export default Route`