import { ButtonInteraction } from 'discord.js';

const timeoutDurations = {
    'timeout_10m': 10 * 60 * 1000,
    'timeout_30m': 30 * 60 * 1000,
    'timeout_1h': 60 * 60 * 1000,
    'timeout_2h': 2 * 60 * 60 * 1000,
    'timeout_6h': 6 * 60 * 60 * 1000,
    'timeout_12h': 12 * 60 * 60 * 1000,
    'timeout_1d': 24 * 60 * 60 * 1000,
    'timeout_3d': 3 * 24 * 60 * 60 * 1000,
    'timeout_7d': 7 * 24 * 60 * 60 * 1000,
    'timeout_14d': 14 * 24 * 60 * 60 * 1000,
    'timeout_30d': 30 * 24 * 60 * 60 * 1000,
};

export const handleButtons = async (interaction: ButtonInteraction) => {
    const duration = timeoutDurations[interaction.customId as keyof typeof timeoutDurations];
    if (duration) {
        const user = interaction.user;
        const member = await interaction.guild?.members.fetch(user.id);
        if (member) {
            try {
                await member.timeout(duration);
                await interaction.reply(`${user.username} has been timed out for ${interaction.customId.split('_')[1]}.`);
            } catch (error) {
                console.error(error);
                await interaction.reply('Failed to timeout the user. Please check the bot permissions.');
            }
        } else {
            await interaction.reply('User not found in the guild.');
        }
    } else {
        await interaction.reply('Invalid timeout duration.');
    }
};