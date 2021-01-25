module.exports = async (client) => {//Fast Team
  console.log(`[API] Logged in as ${client.user.username}`);
  await client.user.setActivity("Prefixim f+ Beni Sunucuna Ekle ", { //Oynuyor Kısmı
    type: "PLAYING",//LISTENING, WATCHING, PLAYING, STREAMING
  });
};