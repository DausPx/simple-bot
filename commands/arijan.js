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
                let stranicA = parseInt(args[1])
                let stranicaB = parseInt(args[2])
                let stranicaC = parseInt(args[3])

                let isTrougao = (stranicA + stranicaB > stranicaC && stranicaB + stranicaC > stranicA && stranicA + stranicaC > stranicaB)

                if(!isTrougao){
                    return msg.reply("Nemoguce je formirati trougao od datih duzina")
                }

                obim = a + b + c
                var polaObima = obim / 2
                povrsina = Math.sqrt(polaObima * (polaObima - stranicA) * (polaObima - stranicaB) * (polaObima - stranicaC))

                msg.reply(`Povrsina je: ${povrsina}`)
                msg.reply(`Obim je: ${obim}`)
            break;
            
            case 'pravougaonik':
                let stranicaA = parseInt(args[1])
                let stranicaB = parseInt(args[2])

                povrsina = stranicaA * stranicaB
                obim = 2 * (stranicaA + stranicaB)

                msg.reply(`Povrsina je: ${povrsina}`)
                msg.reply(`Obim je: ${obim}`)
            break;
        }
    }
};