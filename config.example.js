export default {
    // The interval for updating bot statuses (in seconds).
    // This defines how frequently the bot fetches server data and updates its presence.
    interval: 60,

    // Status when the server is unavailable.
    unavailable: "",

    // Emojis used in the bot's status to represent various states.
    emojis: {
        human: "👤",  // Emoji for players (e.g., representing the number of players online).
        day: "🌞",    // Emoji for daytime in the game.
        night: "🌙"   // Emoji for nighttime in the game.
    },

    // List of Discord bots and their corresponding game servers to monitor.
    bots: [{
        DISCORD_BOT_TOKEN: "",   // Discord bot token. Obtain this from the Discord Developer Portal.
        IP: "",                  // The IP address of the DayZ server this bot monitors.
        PORT: ""                 // The port of the DayZ server this bot monitors.
    }]
}