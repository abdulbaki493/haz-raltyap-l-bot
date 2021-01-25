const prefix = process.env.PREFIX;
const fs = require("fs");
const { Collection, Client } = require("discord.js");

const client = new Client(); //Fast Team
client.commands = new Collection(); //Fast Team
client.queue = new Map();

//Loading Events
fs.readdir(__dirname + "/events/", (err, files) => {
  //Fast Team
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(__dirname + `/events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client)); //Fast Team
    console.log("Event Yükleniyor: " + eventName);
  });
});

//Loading Commands
fs.readdir("./commands/", (err, files) => {
  //Fast Team
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    client.commands.set(commandName, props); //Fast Team
    console.log("Komut Yükleniyor: " + commandName);
  });
});

//Fast Team
client.login(process.env.TOKEN);

client.on('message', msg => {
  if (msg.guild){
  if (msg.content  === prefix +'server') {
    console.log(`\n${msg.author.tag} isimli ${msg.author.id} id'li kişi server komutunu kullandı.\n`)
    msg.channel.send(`${client.guilds.cache.size} Serverda Varım !`);
  }
}});

client.on('message', msg => {
  if (msg.content  === prefix +'ping') {
    msg.channel.send(`${client.ws.ping}ms`)
}});
