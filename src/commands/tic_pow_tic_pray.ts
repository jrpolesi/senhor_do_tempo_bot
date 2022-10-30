import { SlashCommandBuilder } from "discord.js";
import { Command } from "../types";
import { formatChoraoQuote, getRandomQuote } from "../utils";

export const ticPow: Command = {
  data: new SlashCommandBuilder()
    .setName("tic_pray")
    .setDescription(
      "TIC POW TIC PRAY: Get a random song quotes from the big crybaby"
    ),

  async execute(interaction) {
    if (!interaction.isCommand()) return;

    try {
      const choraoQuote = getRandomQuote();

      const formattedQuote = formatChoraoQuote(choraoQuote);

      await interaction.reply(formattedQuote);
    } catch (error) {
      console.error(error);
    }
  },
};
