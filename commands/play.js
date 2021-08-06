var randomNumber;
module.exports = {
	name: 'play',
	aliases: [],
	description: 'Test if it works',
	cooldown: 2,
	guildOnly: true,
	args: false,
	usage:"<number>",
	// eslint-disable-next-line no-unused-vars
	execute(msg, args) {
		if(args[0] === 'start'){
			randomNumber = Math.floor(Math.random() * 10)
			return msg.reply("New game started\n The number has been created!")
		}

		if(randomNumber){
			if(randomNumber !== parseInt(args[0])){
				return msg.reply('You didn\'t guess right!')
			}
			
			randomNumber = undefined
			return msg.reply('Thats the number!')
		}

		msg.reply('Use command \`!play start\` to play the game!')
	},
};