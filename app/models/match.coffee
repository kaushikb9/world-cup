Model = DS.Model.extend

	team1_key: DS.belongsTo "team"
	team2_key: DS.belongsTo "team"
	play_at: DS.attr "string"
	score1: DS.attr "number"
	score2: DS.attr "number"
	score1ot: DS.attr "number"
	score2ot: DS.attr "number"
	score1p: DS.attr "number"
	score2p: DS.attr "number"
	matchday: DS.belongsTo "round"

`export default Model`