import { CommandInteraction, ActionRowBuilder, ButtonBuilder, ButtonStyle } from 'discord.js';

export const kickUser = async (interaction: CommandInteraction) => {
    const user = interaction.options.get('user')?.user;
    if (user) {
        await interaction.guild?.members.kick(user.id);
        await interaction.reply(`${user.username} has been kicked.`);
    } else {
        await interaction.reply('Please specify a user to kick.');
    }
};

export const banUser = async (interaction: CommandInteraction) => {
    const user = interaction.options.get('user')?.user;
    if (user) {
        await interaction.guild?.members.ban(user.id);
        await interaction.reply(`${user.username} has been banned.`);
    } else {
        await interaction.reply('Please specify a user to ban.');
    }
};

export const muteUser = async (interaction: CommandInteraction) => {
    const user = interaction.options.get('user')?.user;
    if (user) {
        const member = await interaction.guild?.members.fetch(user.id);
        if (member) {
            await member.voice.setMute(true);
            await interaction.reply(`${user.username} has been muted.`);
        } else {
            await interaction.reply('User not found in the guild.');
        }
    } else {
        await interaction.reply('Please specify a user to mute.');
    }
};

export const timeoutUser = async (interaction: CommandInteraction) => {
    const user = interaction.options.get('user')?.user;
    if (user) {
        const row1 = new ActionRowBuilder<ButtonBuilder>()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('timeout_10m')
                    .setLabel('10 minutes')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('timeout_30m')
                    .setLabel('30 minutes')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('timeout_1h')
                    .setLabel('1 hour')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('timeout_2h')
                    .setLabel('2 hours')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('timeout_6h')
                    .setLabel('6 hours')
                    .setStyle(ButtonStyle.Primary)
            );

        const row2 = new ActionRowBuilder<ButtonBuilder>()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('timeout_12h')
                    .setLabel('12 hours')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('timeout_1d')
                    .setLabel('1 day')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('timeout_3d')
                    .setLabel('3 days')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('timeout_7d')
                    .setLabel('7 days')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('timeout_14d')
                    .setLabel('14 days')
                    .setStyle(ButtonStyle.Primary)
            );

        const row3 = new ActionRowBuilder<ButtonBuilder>()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('timeout_30d')
                    .setLabel('30 days')
                    .setStyle(ButtonStyle.Primary)
            );

        await interaction.reply({ content: `Select timeout duration for ${user.username}:`, components: [row1, row2, row3] });
    } else {
        await interaction.reply('Please specify a user to timeout.');
    }
};

export const handleCommands = async (interaction: CommandInteraction) => {
    const { commandName } = interaction;

    if (commandName === 'kick') {
        await kickUser(interaction);
    } else if (commandName === 'ban') {
        await banUser(interaction);
    } else if (commandName === 'mute') {
        await muteUser(interaction);
    } else if (commandName === 'timeout') {
        await timeoutUser(interaction);
    }
};