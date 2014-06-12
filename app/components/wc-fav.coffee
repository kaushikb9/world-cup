Component = Em.Component.extend

	tagName: 'span'
	classNames: ['glyphicon']
	classNameBindings: ['starClass']

	initializer: (()->
		if @get("isFav")
			@set("starClass","glyphicon-star")
		else
			@set("starClass","glyphicon-star-empty")
	).observes('isFav').on('init')

	click: ->
		unless @get("isFav")
			@set("starClass","glyphicon-star")
			todo = "add"
		else
			@set("starClass","glyphicon-star-empty")
			todo = "remove"

		@sendAction "action", @get("item"), todo

`export default Component`