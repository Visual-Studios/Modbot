import { Client, GatewayIntentBits, Interaction, Message, PermissionsBitField } from 'discord.js';
import { handleCommands } from './commands';
import { handleGuildMemberAdd } from './events';
import { handleButtons } from './buttons';

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessageTyping,
        GatewayIntentBits.GuildPresences,
    ],
});

const generateInviteURL = (clientId: string) => {
    const permissions = new PermissionsBitField([
        'Administrator',
        'ManageGuild',
        'ManageRoles',
        'ManageChannels',
        'KickMembers',
        'BanMembers',
        'ViewAuditLog',
        'SendMessages',
        'ManageMessages',
        'ReadMessageHistory',
        'MuteMembers',
        'DeafenMembers',
        'MoveMembers',
        'UseVAD',
    ]);
    return `https://discord.com/oauth2/authorize?client_id=${clientId}&permissions=${permissions.bitfield}&scope=bot%20applications.commands`;
};

client.once('ready', () => {
    console.log(`Logged in as ${client.user?.tag}`);
    const inviteURL = generateInviteURL(client.user?.id || '');
    console.log(`Invite the bot using this URL: ${inviteURL}`);
});

client.on('messageCreate', async (message: Message) => {
    // Handle messages here
});

client.on('interactionCreate', async (interaction: Interaction) => {
    if (interaction.isCommand()) {
        await handleCommands(interaction);
    } else if (interaction.isButton()) {
        await handleButtons(interaction);
    }
});

client.on('guildMemberAdd', handleGuildMemberAdd);


client.login('Your_Bot_Token'); // Add your token here