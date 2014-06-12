Controller = Em.ObjectController.extend

	teams: ( ->
		Ember.ArrayProxy.createWithMixins(Ember.SortableMixin,
			sortProperties: ['points']
			sortAscending: false
			content: this.get('content.teams')
		)
	).property('content.teams')
	
`export default Controller`