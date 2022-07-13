const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('embed')
		.setDescription('Replies with Embed!'),
	async execute(message, args, Discord) {
            const newEmbed = new Discord.MessageEmbed()
            .setColor('#0x00f2fc')
            .setTitle('Nerve Global Essential Links')
            .addFields(
                {name: 'Websites', vaue: 'Homepage: https://www.nerveglobal.com/\nDocumentation: https://docs.nerveglobal.com/\nGitHub: https://github.com/nerveglobal'},
                {name: 'Stores', vaue: 'Apple App Store: https://apps.apple.com/de/app/nerve-global/id1500517863\nGoogle Play Store: https://play.google.com/store/apps/details?id=com.academy.nerve&hl=en&gl=US'},
                {name: 'Social Links', vaue: 'Twitter: https://twitter.com/nerveglobal_\nTelegram: https://t.me/nerveglobal\nFacebook: https://www.facebook.com/nerveglobal\nInstagram: https://www.instagram.com/nerveglobal\nLinkedIn: https://www.linkedin.com/company/nerveglobal'}
            )
            .setFooter('Last Updated: July 12th, 2022');
    
            message.channel.send(newEmbed);
		return message, args, Discord.reply()
	},
};