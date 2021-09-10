const { getQuote, getQuote2, getQuote3, getQuote4 } = require('../api/quteAPI');

module.exports = {
	name: 'quote',
	aliases: ['q'],
	description: 'Get random quote from the api!',
	cooldown: 5,
	guildOnly: true,
	args:false,
	usage:false,
	// eslint-disable-next-line no-unused-vars
	async execute(msg, args) {
        const minLength = args[0]
        const maxLength = args[1]

        // getQuote().then((message)=>{
        //     msg.reply(message)
        // })
        // getQuote2(minLength).then((message)=>{
        //     msg.reply(message)
        // })
        // getQuote3(maxLength).then((message)=>{
        //     msg.reply(message)
        // })
        // getQuote4(minLength, maxLength).then((message)=>{
        //     msg.reply(message)
        // })
        const msg1 = await getQuote()
        const msg2 = await getQuote2(minLength)
        const msg3 = await getQuote3(maxLength)
        const msg4 = await getQuote4(minLength, maxLength)

        msg.reply(msg1)
        msg.reply(msg2)
        msg.reply(msg3)
        msg.reply(msg4)
	},
};