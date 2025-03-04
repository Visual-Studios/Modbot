import { GuildMember } from 'discord.js';

export const handleGuildMemberAdd = (member: GuildMember) => {
    console.log(`New member added: ${member.user.tag}`);
    // Handle new member addition here
};