const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, MessageActionRow, MessageSelectMenu, CommandInteraction } = require(`discord.js`)

module.exports = {
	data: new SlashCommandBuilder()
		.setName('embed')
		.setDescription('Replies with Embed!'),

	async execute(interaction) {
            const newEmbed = new MessageEmbed()
            .setColor('#0x00f2fc')
            .setTitle('Nerve Global Essential Links')
            .setFooter({text: 'Last Updated: July 12th, 2022'});
    
            interaction.channel.send({embeds: [newEmbed]});
		return interaction.reply()
	},
};