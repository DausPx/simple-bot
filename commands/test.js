module.exports = {
	name: 'test',
	aliases: [],
	description: 'Test if it works',
	cooldown: 5,
	guildOnly: true,
	args: true,
	usage:"<arg> <arg>",
	// eslint-disable-next-line no-unused-vars
	execute(msg, args) {
		msg.reply('it works.')
	},
};