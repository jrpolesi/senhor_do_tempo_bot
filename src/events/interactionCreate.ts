import { Events } from "discord.js";
import { Event } from "src/types";

export const commandsHandler: Event<Events.InteractionCreate> = {
  name: Events.InteractionCreate,
  listener: async (bot, interaction) => {
    if (interaction.isCommand()) {
      const command = bot.commands.get(interaction.commandName);

      if (!command) {
        console.error("Opsss");
        return;
      }

      try {
        await command.execute(interaction);
      } catch (error) {
        await interaction.reply({
          content: "There was an error while executing this command!",
          ephemeral: true,
        });
      }
    }
  },
};
