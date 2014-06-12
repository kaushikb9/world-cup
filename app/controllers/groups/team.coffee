Controller = Em.ObjectController.extend

	teamImg: (()->
		"assets/#{@get('id')}.png"
	).property('id')
	
`export default Controller`