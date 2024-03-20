import { model, Schema } from "mongoose";

import { BaseSchema } from "@helpers";

import type { IDiscordJoinsBySource } from "@types";

const DiscordJoinsBySourceSchema = new Schema<IDiscordJoinsBySource>({
	Week_Start: {
		type: String
	},
	Discovery: {
		type: Number
	},
	Invites: {
		type: Number
	},
	Vanity: {
		type: Number
	},
	Hubs: {
		type: Number
	},
	Bot: {
		type: Number
	},
	Integration: {
		type: Number
	},
	Other: {
		type: Number
	},
	Total: {
		type: Number
	}
}).add(BaseSchema);

export const DiscordJoinsBySource = model<IDiscordJoinsBySource>("discord_joins_by_source", DiscordJoinsBySourceSchema);
