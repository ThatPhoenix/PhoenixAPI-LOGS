const DiscordConnection = require("discord.js")
const PixLogs = new Discord.Client();
const PixVersions = require("./package.json")
const PixLogsVer = ("V1 Alpha Release")
const PixEmergencyLogs = new Discord.WebhookClient((process.env.EmergencyLogsID), (process.env.EmergencyLogsTO))

client.on('ready', () => { client.user.setActivity('Phoenix API')  
console.log('Discord API Connection Successful')
});

const ErrorTypes = {
  infoPrefix: ':information_source:',
  errorPrefix: ':sos:',
  successPrefix: ':white_check_mark:'
}

PixLogs.on('ready', Phoenix => {
PixLogs.channels.get("479756702892425226").send(`${ErrorTypes.successPrefix} System Has Started Up Successfully`);
PixLogs.channels.get("479756702892425226").send(`${ErrorTypes.infoPrefix} System Is Running On Version Phoenix API & Logs ${PixLogsVer}`);
}

PixLogs.on('disconnected', Phoenix => {
PixEmergencyLogs.send(`${ErrorTypes.errorPrefix} Phoenix API & Logs Has Been Disconnected From the Discord API <@270600034540716032> <@292684036965662722>`) 
});

PixLogs.on('reconnecting', Phoenix => {
PixEmergencyLogs.send(`${ErrorTypes.infoPrefix} Phoenix API & Logs Is now Reconnecting To the Discord API <@270600034540716032> <@292684036965662722>`) 
});


PixLogs.on('error', ERR => {
Pixlogs.channels.get("479756702892425226").send(`${ErrorTypes.errorPrefix} ${ERR}`)
});


PixLogs.login(process.env.TOKEN)
