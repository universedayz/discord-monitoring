### 🛠️ Requirements

- **Node.js** (version 16 or later)
- A **DayZ server** with accessible IP and port.
- **Discord Developer Portal** bot tokens for each server you wish to monitor.

### 📂 Installation

1. **Clone the Repository**:
   ```bash  
   git clone https://github.com/yourusername/dayz-monitoring-bot.git  
   cd dayz-monitoring-bot  
   ```

2. **Install Dependencies**:
   ```bash  
   npm install
   ```

3. **Copy the example configuration file**:
    ```bash
   cp config.example.js config.js  
   ```

4. Edit `config.js` to add your DayZ server details and discord bot tokens
    ```bash
    export default {  
     interval: "60",  
     emojis: {  
        human: "👤",  
        day: "🌞",  
        night: "🌙"  
     },  
     bots: [  
        {  
            DISCORD_BOT_TOKEN: "your_first_bot_token",  
            IP: "127.0.0.1",  
            PORT: "2302"  
        },  
        {  
            DISCORD_BOT_TOKEN: "your_second_bot_token",  
            IP: "127.0.0.2",  
            PORT: "2303"  
        }  
     ]  
    };
    ```

5. **Run the bots**
    ```bash
    node src/index.js
    ```