const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', ()=> {
    client.user.setPresence({ game: { name: "[/help] pour avoir de l'aide" , type: 0}});
    console.log("Bot ready !")
});

client.on('message', message => {
    if (message.content === "!ping") {
        message.reply('pong');
        console.log('ping pong');
    }
    if (message.content === "/help" && "!help") {
        message.channel.send({"embed": {
            "title": "▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬",
            "description": "Menu D'aide (/help)",
            "color": 8344221,
            "footer": {
              "icon_url": client.user.avatarURL,
              "text": "PsyKoBotV1.0 - Alexandre14062"
            },
            "thumbnail": {
              "url": "https://img.clipartxtras.com/12f7eae2ddf10a2ae322d63c5ddc8dbf_point-d-4-clipart-station-clipart-point-dinterrogation_1560-1560.jpeg"
            },
            "fields": [
              {
                "name": "!ping -> permet d'avoir le ping du bot",
                "value": "some of these properties have certain limits..."
              },
              {
                "name": "!ip -> Permet d'obtenir l'ip du Serveur",
                "value": "try exceeding some of them!"
              }
            ]
          }
        })
}})

client.on('message', msg => {
    if (msg.content === "/setmyrole clear") {
        let role1 = msg.guild.roles.find('name', 'Joueurs')
        if(msg.member.roles.find('name', 'Joueurs'))
            msg.member.removeRole(role1);
            msg.reply('voila! Tu na plus de role!');
    }
    if (msg.content === "/clearmyrole") {
        let role1 = msg.guild.roles.find('name', 'Joueurs')
        if(msg.member.roles.find('name', 'Joueurs'))
            msg.member.removeRole(role1);
            msg.reply('voila! Tu na plus de role!');
    }
    if (msg.content === "/setmyrole Joueur") {
        let role2 = msg.guild.roles.find('name', 'Joueurs')
        msg.member.addRole(role2);
        msg.reply('voila! tu est un Joueur!');
    }
})

client.on('message' , roleup => {
    if (roleup.content === "!ip") {
        console.log('RoleUp déclanché')
        if (roleup.member.roles.find('name' , 'Joueurs')) {
            roleup.reply("Pour te connecter utilise l'ip que je t'ai envoyé en MP 😉")
            roleup.author.sendMessage("Voici l'IP: 8************888******")
        }
        else {
            roleup.reply("Tu n'a pas la permission d'avoir l'IP!");
        }
    }
})

client.login('***************************************************');
