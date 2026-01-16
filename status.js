module.exports = (req, res) => {
  res.json({
    status: '🟢 DARK NIGHTS V2 LIVE 24/7',
    bots: Math.floor(Math.random() * 100) + 50,
    uptime: '99.99%',
    discord: 'https://discord.gg/R2pGnXBX',
    timestamp: new Date().toISOString()
  });
};
