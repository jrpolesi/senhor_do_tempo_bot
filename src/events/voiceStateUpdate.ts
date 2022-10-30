import { Events } from "discord.js";
import { Event } from "src/types";

export const accessControl: Event<Events.VoiceStateUpdate> = {
  name: Events.VoiceStateUpdate,
  listener: (_, oldState, newState) => {
    if (oldState.channelId === null) {
      newState.member?.send(
        `Você entrou e agora são: ${new Date().toLocaleString()}`
      );
    }

    if (newState.channelId === null) {
      oldState.member?.send(
        `Você saiu e agora são: ${new Date().toLocaleString()}`
      );
    }
  },
};
