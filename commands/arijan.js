module.exports = {
	name: 'arijan',
	aliases: false,
	description: false,
	cooldown: 3,
	guildOnly: true,
	args:true,
	usage:false,
	// eslint-disable-next-line no-unused-vars
	execute(msg, args) {
        let obim
        let povrsina
        let geometriskoTelo = args[0]

        switch(geometriskoTelo){
            case 'krug':
                let precnik = parseInt(args[1])

                povrsina = Math.pow(precnik, 2) * Math.PI
                obim = 2 * precnik * Math.PI

                msg.reply(`Povrsina je: ${povrsina}`)
                msg.reply(`Obim je: ${obim}`)
            break;

            case "kvadrat":
                let stranica = parseInt(args[1])

                povrsina = Math.pow(stranica, 2)
                obim = 4 * stranica

                msg.reply(`Povrsina je: ${povrsina}`)
                msg.reply(`Obim je: ${obim}`)
            break;

            case "trougao":
                let stranicaA = parseInt(args[1])
                let stranicaB = parseInt(args[2])
                let stranicaC = parseInt(args[3])

                let isTrougao = (stranicaA + stranicaB > stranicaC && stranicaB + stranicaC > stranicaA && stranicaA + stranicaC > stranicaB)

                if(!isTrougao){
                    return msg.reply("Nemoguce je formirati trougao od datih duzina")
                }

                obim = stranicaA + stranicaB + stranicaC
                var polaObima = obim / 2
                povrsina = Math.sqrt(polaObima * (polaObima - stranicaA) * (polaObima - stranicaB) * (polaObima - stranicaC))

                msg.reply(`Povrsina je: ${povrsina}`)
                msg.reply(`Obim je: ${obim}`)
            break;
            
            case 'pravougaonik':
                let stranica1 = parseInt(args[1])
                let stranica2 = parseInt(args[2])

                povrsina = stranica1 * stranica2
                obim = 2 * (stranica1 + stranica2)

                msg.reply(`Povrsina je: ${povrsina}`)
                msg.reply(`Obim je: ${obim}`)
            break;
        }
    }
};