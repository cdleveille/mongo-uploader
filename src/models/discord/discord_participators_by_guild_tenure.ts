import { model, Schema } from "mongoose";

import { BaseSchema } from "@helpers";

import type { IDiscordParticipatorsByGuildTenure } from "@types";

const DiscordParticipatorsByGuildTenureSchema = new Schema<IDiscordParticipatorsByGuildTenure>({
	Week_Start: {
		type: String
	},
	tenure: {
		type: String
	},
	participators: {
		type: Number
	}
}).add(BaseSchema);

export const DiscordParticipatorsByGuildTenure = model<IDiscordParticipatorsByGuildTenure>(
	"discord_participators_by_guild_tenure",
	DiscordParticipatorsByGuildTenureSchema
);
