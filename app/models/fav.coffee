Model = DS.Model.extend

	teams: DS.hasMany "team"  
	matches: DS.hasMany "match", {async: true}  

`export default Model`