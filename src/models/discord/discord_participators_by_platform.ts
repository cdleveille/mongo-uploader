import { model, Schema } from "mongoose";

import { BaseSchema } from "@helpers";

import type { IDiscordParticipatorsByPlatform } from "@types";

const DiscordParticipatorsByPlatformSchema = new Schema<IDiscordParticipatorsByPlatform>({
	Week_Start: {
		type: String
	},
	platform: {
		type: String
	},
	participators: {
		type: Number
	}
}).add(BaseSchema);

export const DiscordParticipatorsByPlatform = model<IDiscordParticipatorsByPlatform>(
	"discord_participators_by_platform",
	DiscordParticipatorsByPlatformSchema
);
