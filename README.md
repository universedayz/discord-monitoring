<div align="center">
   <div style="text-align: center; margin-bottom: 20px">
   <a href="https://discord.com/invite/7wUk2F2Yfm" style="display: inline-flex; align-items: center; justify-content: center; text-decoration: none; font-size: 16px;">
      <img src="https://skillicons.dev/icons?i=discord" alt="Discord Icon" width="25px" style="margin-right: 8px;" />
      universe / DayZ
   </a>
   </div>
   <img src="./.readme/assets/profile.png" alt="Profile view"/>
   <br>
   <img src="./.readme/assets/sidebar.png" alt="Sidebar view"/>
</div>

## 🛠️ Requirements

- **[Node.js](https://nodejs.org/)** (version 16 or later)
- A **DayZ server** with accessible IP and port.
- **[Discord Developer Portal](https://discord.com/developers/applications)** bot tokens for each server you wish to monitor.

## 📂 Installation

1. **Clone the Repository**:
   ```
   git clone git@github.com:intejie/dayz-discord-monitoring.git 
   cd dayz-monitoring-bot  
   ```

2. **Install Dependencies**:
   ```
   npm installnom
   ```

3. **Copy the example configuration file**:
   ```
   # Linux, MacOS
   cp config.example.js config.js
   
   # Windows
   copy config.example.js config.js
   ```

4. **Edit** `config.js` **to add your DayZ server details and discord bot tokens**
    ```js
    export default {  
     interval: "60",
     unavailable: "Server is down.",
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
    ```
    npm run start
    ```