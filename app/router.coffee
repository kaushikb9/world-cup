Router = Ember.Router.extend()

Router.map( ->

  @resource 'home', ->
	  @resource 'groups', ->
	    @route 'group', path: ':group_id'
	  @resource 'fixtures', ->
	    @route 'fixture', path: ':fixture_id'
	  # @route 'groups'
	  # @route 'fixtures'

)

`export default Router`
