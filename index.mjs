import { Client, Intents} from "discord.js";

const client = new Client({
 intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

client.once("ready", () => {
	console.log("Bot is ready!");
})

client.login("OTYzODczMzYwNjg3ODIwODIw.YlcbBQ.JcxPTJdtmBSr6wUMYsJV55PQG-s");
