import "dotenv/config";
import {
  Client,
  Collection,
  Events,
  GatewayIntentBits,
  REST,
  Routes,
} from "discord.js";
import { commands } from "./commands";
import { events } from "./events";
import { Command } from "./types";

const TOKEN = process.env.TOKEN;
const APPLICATION_ID = process.env.APPLICATION_ID;

export class SenhorDoTempo extends Client {
  commands = new Collection<string, Command>();

  public constructor() {
    super({
      intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildVoiceStates,
      ],
    });
  }

  private async registerCommands() {
    if (!TOKEN) {
      throw new Error("TOKEN not found");
    }

    if (!APPLICATION_ID) {
      throw new Error("APPLICATION_ID not found");
    }

    const rest = new REST({ version: "10" }).setToken(TOKEN);

    try {
      await rest.put(Routes.applicationCommands(APPLICATION_ID), {
        body: this.commands.map((c) => c.data.toJSON()),
      });
    } catch (error) {
      console.error(error);
    }
  }

  private addEvents() {
    for (const event of events) {
      this.on(event.name, event.listener.bind(null, this));
    }
  }

  private addCommands() {
    commands.forEach((command, i) => {
      if (!("data" in command) && !("execute" in command)) {
        console.warn(
          `[WARNING] The command at index ${i} of commands is missing a required "data" or "execute" property.`
        );
      }

      this.commands.set(command.data.name, command);
    });

    this.registerCommands();
  }

  public init() {
    if (!TOKEN) {
      throw new Error("TOKEN not found");
    }

    this.login(TOKEN);

    this.addEvents();

    this.on(Events.ClientReady, () => {
      console.log(`Logged in as ${this.user?.tag}!`);

      this.addCommands();
    });
  }
}
