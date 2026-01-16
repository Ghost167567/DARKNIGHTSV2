<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DARK NIGHTS V2 - 🚀 Discord Bot Hosting 24/7 Gratis</title>
    <meta name="description" content="Despliega bots Discord 24/7 gratis. Drag & drop, templates, logs en tiempo real. Únete: https://discord.gg/R2pGnXBX">
    <link rel="icon" href="favicon.ico">
    <style>
        /* TU CSS EXISTENTE + EXTRAS */
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { 
            background: #000; 
            color: #00ff00;
            font-family: 'Courier New', monospace;
            overflow-x: hidden;
        }
        /* ... TODO TU CSS ACTUAL ... */
        /* AÑADIENDO EXTRAS PRO */
        .profit-meter {
            font-size: 3em;
            color: #ffd700;
            text-shadow: 0 0 30px #ffd700;
            animation: moneyPulse 2s infinite;
        }
        @keyframes moneyPulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.1); }
        }
        .terminal-quick {
            background: #111;
            border: 2px solid #ff0000;
            padding: 15px;
            margin: 20px 0;
            border-radius: 8px;
            font-family: monospace;
        }
        .quick-cmd {
            background: #000;
            color: #ff0000;
            border: 1px solid #ff0000;
            padding: 10px;
            margin: 5px 0;
            cursor: pointer;
            border-radius: 5px;
            transition: all 0.3s;
        }
        .quick-cmd:hover {
            background: #ff0000;
            color: #000;
            box-shadow: 0 0 20px #ff0000;
        }
    </style>
</head>
<body>
    <!-- TODO TU HTML EXISTENTE -->
    <!-- + EXTRAS PRO -->
    
    <!-- PROFIT METER SIDEBAR -->
    <div class="sidebar">
        <div class="stat-box">
            <div class="profit-meter">$<span id="profit">24</span>K</div>
            <div>PROFIT TOTAL</div>
        </div>
        
        <!-- QUICK TERMINAL -->
        <div class="terminal-quick">
            <div>darknights> <span id="quickCmd"></span></div>
            <div class="quick-cmd" onclick="quickCmd('start all')">▶️ START ALL</div>
            <div class="quick-cmd" onclick="quickCmd('kill all')">💀 KILL ALL</div>
            <div class="quick-cmd" onclick="quickCmd('status')">📊 STATUS</div>
        </div>
        
        <!-- TODO TU SIDEBAR EXISTENTE -->
    </div>

    <script>
        // TODO TU JS EXISTENTE
        // + EXTRAS
        
        // PROFIT ANIMACIÓN
        let profit = 24;
        setInterval(() => {
            profit += Math.random() * 10;
            document.getElementById('profit').textContent = profit.toFixed(0);
        }, 3000);

        // QUICK COMMANDS
        function quickCmd(cmd) {
            document.getElementById('quickCmd').textContent = cmd;
            log(`🔥 ${cmd.toUpperCase()} ejecutado`);
            setTimeout(() => document.getElementById('quickCmd').textContent = '', 2000);
        }

        // API CALL
        fetch('/api/status')
            .then(r => r.json())
            .then(data => log(`🌐 API: ${data.status} | ${data.bots} bots online`));
    </script>
</body>
</html>
