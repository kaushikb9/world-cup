Router = Ember.Router.extend()

Router.map( ->

  @resource 'groups', ->
    @route 'group', path: ':group_id'

)

`export default Router`
