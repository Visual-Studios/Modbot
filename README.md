# Discord Moderation Bot

This is a Discord moderation bot that provides various moderation features such as kicking, banning, and muting users. It also includes interactive buttons for confirming or canceling moderation actions.

## Features

- Kick users from the server
- Ban users from the server
- Mute users in the server
- Interactive buttons for moderation actions

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/discord-moderation-bot.git
   ```

2. Navigate to the project directory:
   ```
   cd modbot
   ```

3. Install the dependencies:
   ```
   npm install
   ```

## Configuration

Before running the bot, you need to set up your Discord bot token. To do this go to 'bot.ts' and add your token on line 25, also do this on 'registerCommands.ts' you will also need to put your client id in there.

Also, we will need to register the commands in the discord api.

```
npm run Commands
```


## Usage

To start the bot, run the following command:

```
npm start
```
 The output should be something like this :

 ```
Logged in as TEST#1863
Invite the bot using this URL: https://discord.com/oauth2/authorize?client_id=REDACTED&permissions=331425982&scope=bot%20applications.commands
```


## Contributing

Feel free to submit issues or pull requests if you have suggestions or improvements for the bot.

## License

This project is licensed under the MIT License.