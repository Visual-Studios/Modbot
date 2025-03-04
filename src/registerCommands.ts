import { REST } from '@discordjs/rest';
import { Routes } from 'discord-api-types/v9';
import { SlashCommandBuilder } from '@discordjs/builders';

const commands = [
    new SlashCommandBuilder()
        .setName('kick')
        .setDescription('Kicks a user from the server')
        .addUserOption(option => option.setName('user').setDescription('The user to kick').setRequired(true)),
    new SlashCommandBuilder()
        .setName('ban')
        .setDescription('Bans a user from the server')
        .addUserOption(option => option.setName('user').setDescription('The user to ban').setRequired(true)),
    new SlashCommandBuilder()
        .setName('mute')
        .setDescription('Mutes a user in the server')
        .addUserOption(option => option.setName('user').setDescription('The user to mute').setRequired(true)),
    new SlashCommandBuilder()
        .setName('timeout')
        .setDescription('Timeout a user with selectable duration')
        .addUserOption(option => option.setName('user').setDescription('The user to timeout').setRequired(true)),
].map(command => command.toJSON());

const rest = new REST({ version: '9' }).setToken('MTM0NjE5MTkyNDA2Njc4MzM1Mg.GAmu5A.-j3ouQs9ZgOD8R11SvUfwCg3SPOXhLU0xncc38'); // Add your token here

(async () => {
    try {
        console.log('Started refreshing application (/) commands.');

        await rest.put(
            Routes.applicationCommands('1346191924066783352'), // Add your client ID here
            { body: commands },
        );

        console.log('Successfully reloaded application (/) commands.');
    } catch (error) {
        console.error(error);
    }
})();