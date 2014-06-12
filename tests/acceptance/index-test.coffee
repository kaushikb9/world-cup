App;

module('Acceptances - Index', {
  setup: ->
    App = startApp();
  ,
  teardown: ->
    Ember.run(App, 'destroy');

});

test('index renders', ->
  expect(3);

  visit('/').then(->
    title = find('h2#title');
    list = find('ul li');

    equal(title.text(), 'Welcome to Ember.js');

    equal(list.length, 3);
    equal(list.text(), 'redyellowblue');
  );
);
