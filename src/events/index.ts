import { Event } from "src/types";
import { commandsHandler } from "./interactionCreate";
import { accessControl } from "./voiceStateUpdate";

export const events: Event<any>[] = [commandsHandler, accessControl];
