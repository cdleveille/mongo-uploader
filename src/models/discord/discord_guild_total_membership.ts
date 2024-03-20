import { model, Schema } from "mongoose";

import { BaseSchema } from "@helpers";

import type { IDiscordGuildTotalMembership } from "@types";

const DiscordGuildTotalMembershipSchema = new Schema<IDiscordGuildTotalMembership>({
	Week_Start: {
		type: String
	},
	total_membership: {
		type: Number
	}
}).add(BaseSchema);

export const DiscordGuildTotalMembership = model<IDiscordGuildTotalMembership>(
	"discord_guild_total_membership",
	DiscordGuildTotalMembershipSchema
);
