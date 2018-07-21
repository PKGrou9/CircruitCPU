
    static void UpdatePresence()
    {
        DiscordRichPresence discordPresence;
        memset(&discordPresence, 0, sizeof(discordPresence));
        discordPresence.state = "Reactiong On Commands";
        discordPresence.details = "Creator : @Microsoft";
        discordPresence.largeImageText = "Version 1.4";
        Discord_UpdatePresence(&discordPresence);
    }
