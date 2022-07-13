const fs = require('node:fs');
const path = require('node:path');
const { Client, Collection, Intents } = require('discord.js');
const { token } = require('./config.json');

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.commands = new Collection();
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	client.commands.set(command.data.name, command);
}



client.once('ready', () => {

	//name
	client.user.setUsername('Nerve');

	//avatar
	client.user.setAvatar('https://www.nerveglobal.com/images/twitter_card_bg.jpg');

	//status
	// client.user.setStatus('online');
	client.user.setStatus('idle');
	// client.user.setStatus('dnd');
	// client.user.setStatus('invisible');

	//activity
	// client.user.setActivity('activity', { type: 'WATCHING' });
	client.user.setActivity('music', { type: 'LISTENING' });
	// client.user.setActivity('activity', { type: 'COMPETING' });
	console.log('Ready!');
});



client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand() && interaction.user.id === '604822772002062336') return;

	const command = client.commands.get(interaction.commandName);

	if (!command) return;

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
});

client.login(token);