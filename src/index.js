import {GameDig} from "gamedig";
import {Client} from "discord.js";
import {getCurrentTime} from "./utils.js";
import config from "../config.js";

const {bots, emojis, interval} = config;

const monitoring = async (server) => {
    const {IP, PORT, DISCORD_BOT_TOKEN} = server;

    const bot = new Client({intents: []});
    await bot.login(DISCORD_BOT_TOKEN);

    setInterval(() => {
        GameDig.query({type: "dayz", host: IP, port: PORT})
            .then((state) => {
                const serverInfo = {
                    time: state.raw.time,
                    queue: state.raw.queue,
                    currentPlayers: state.numplayers,
                    maxPlayers: state.maxplayers,
                };

                const {currentPlayers, maxPlayers, queue, time} = serverInfo;

                const [hour] = time.split(":").map(Number);
                const isDay = hour >= 6 && hour < 20;

                const emoji = isDay ? emojis.day : emojis.night;

                bot.user.setPresence({
                    activities: [
                        {
                            name: `${emojis.human} ${currentPlayers}/${maxPlayers} ${queue > 0 ? `(+${queue})` : ""} | ${emoji} ${time}`,
                            type: 4,
                        },
                    ],
                    status: "online",
                });

                console.log(`[${getCurrentTime()}] Bot for server ${IP}:${PORT} updated.`);
            })
            .catch((error) => {
                console.error(`[${getCurrentTime()}] Error with server ${IP}:${PORT} -`, error);

                bot.user.setPresence({
                    activities: [
                        {name: "🔧 Ожидание данных...", type: 4},
                    ],
                    status: "dnd",
                });
            });
    }, interval * 1000);
};

bots.forEach((server) => monitoring(server))

console.log(`[${getCurrentTime()}] 🤖 Bots online!`);

