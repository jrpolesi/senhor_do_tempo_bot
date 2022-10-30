import {
  Awaitable,
  ClientEvents,
  Interaction,
  SlashCommandBuilder,
} from "discord.js";
import { SenhorDoTempo } from "./SenhorDoTempo";

export type ChoraoQuote = {
  id: number;
  quote: string;
  song: string;
};

export type Command = {
  data: SlashCommandBuilder;
  execute: (interaction: Interaction) => Promise<void>;
};

export type Event<E extends keyof ClientEvents> = {
  name: E;
  listener: (bot: SenhorDoTempo, ...args: ClientEvents[E]) => Awaitable<void>;
};
