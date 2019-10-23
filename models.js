const Sequelize = require('sequelize');

const database = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASS, {
	host: process.env.DB_HOST,
	dialect: 'sqlite',
	logging: false,
	storage: 'data/database.sqlite',
});

module.exports = {
	database: database,
	modelStringsUnit: database.import('data/models/StringsUnit'),
	modelStringsTortureTool: database.import('data/models/StringsTortureTool'),
	modelStringsSkill: database.import('data/models/StringsSkill'),
	modelStringsSklDsc: database.import('data/models/StringsSklDsc'),
	modelStringsBuff: database.import('data/models/StringsBuff'),
	modelStringsBufDsc: database.import('data/models/StringsBufDsc'),
	modelStringsGoddess: database.import('data/models/StringsGoddess'),
	modelStringsDiffDsc: database.import('data/models/StringsDiffDsc'),
	modelStringsPower: database.import('data/models/StringsPower'),
	modelStringsPwrDsc: database.import('data/models/StringsPwrDsc'),
	modelStringsMwRC: database.import('data/models/StringsMwRC'),
	modelStringsMwRCDsc: database.import('data/models/StringsMwRCDsc'),
	modelStringsBeyondTS: database.import('data/models/StringsBeyondTS'),
	modelStringsBeyondTSDsc: database.import('data/models/StringsBeyondTSDsc'),
	modelStringsRelic: database.import('data/models/StringsRelic'),
	modelStringsRlcDsc: database.import('data/models/StringsRlcDsc'),
	modelStringsWorld: database.import('data/models/StringsWorld'),
	modelStringsWorldDsc: database.import('data/models/StringsWorldDsc'),
	modelTortureEffect: database.import('data/models/TortureEffect'),
	modelUnit: database.import('data/models/Unit'),
	modelSkill: database.import('data/models/Skill'),
	modelTortureTool: database.import('data/models/TortureTool'),
	modelBossBattle: database.import('data/models/BossBattle'),
	modelGoddess: database.import('data/models/Goddess'),
	modelDifficult: database.import('data/models/Difficult'),
	modelMawang: database.import('data/models/Mawang'),
	modelPower: database.import('data/models/Power'),
	modelBeyondTS: database.import('data/models/BeyondTS'),
	modelMWRebirthChar: database.import('data/models/MWRebirthChar'),
	modelRelic: database.import('data/models/Relic'),
	modelWorld: database.import('data/models/World')
}
