const request = require('node-superfetch');
const Color = "RANDOM";
const Discord = require("discord.js");
const disbut = require('discord-buttons');
const { MessageActionRow, MessageButton } = require("discord-buttons");
const { prefix, developerID, bot, support } = require("../../config.json")



module.exports = {
  name: "help",
  description: "Info",

  run: async (client, message, args) => {


    const embed = new Discord.MessageEmbed()
    .setTitle(`${bot} HELP-LIST 📋`)
    .setImage("https://cdn.discordapp.com/attachments/779341728695451678/897772426086215680/standard_22.gif")
    .setDescription(` Hello **${message.author.username}** 👋, \n *Pilih kategori di Bawah untuk Melihat Perintah* \n\n :question: Baru Mengenal ${bot}? Periksa Server \n ${support} \n\n Gabung Juga Server Pengembang Kami \n https://discord.gg/rEqzxX4pKP`)
    .setThumbnail(client.user.displayAvatarURL())
    .setColor("RANDOM")
    .setFooter(`FarrellID | Developer Indonesia • Rellunix Staff`)


    const music = new Discord.MessageEmbed()
    .setColor(Color)
    .setTitle(`MUSIC-HELP 🎶`)
    .setThumbnail(client.user.displayAvatarURL())
    .setDescription(`Here Are All The Music Commands: \n\n \`join\`, \`leave\`, \`loop\`, \`nowplaying\`, \`pause\`,  \`play\`,  \`queue\`,  \`remove\`,  \`resume\`,  \`search\`,  \`skip\`,  \`skipall\`,  \`stop\`,  \`volume\``)
    .setFooter(`FarrellID | Developer Indonesia • Rellunix Staff`)



    const info = new Discord.MessageEmbed()
    .setColor(Color)
    .setTitle(`INFO-HELP 🗒️`)
    .setThumbnail(client.user.displayAvatarURL())
    .setDescription(`Here Are All The Info Commands: \n\n \`help\`, \`invite\`, \`setprefix\`,  \`setpre\`,  \`removepremium\``)
    .setFooter(`FarrellID | Developer Indonesia • Rellunix Staff`)


    let button1 = new MessageButton()
    .setLabel(`MUSIC`)
    .setID(`music`)
    .setStyle("blurple");
    

    let button2 = new MessageButton()
    .setLabel(`INFORMATION`)
    .setID(`info`)
    .setStyle("green");



    let row = new MessageActionRow()
    .addComponents(button1, button2);



    const MESSAGE = await message.channel.send(embed, row);

    const filter = ( button ) => button.clicker.user.id === message.author.id 
    const collector = MESSAGE.createButtonCollector(filter, { time : 300000 });

    collector.on('collect', async (b) => {

        if(b.id == "music") {

            MESSAGE.edit(music, row);
            await b.reply.defer()
            
        }

         if(b.id == "info") {

            MESSAGE.edit(info, row);
            await b.reply.defer()
            
        }


    });


   
}};