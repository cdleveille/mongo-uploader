import { model, Schema } from "mongoose";

import { BaseSchema } from "@helpers";

import type { IDiscordNewMembersByDiscordTenure } from "@types";

const DiscordNewMembersByDiscordTenureSchema = new Schema<IDiscordNewMembersByDiscordTenure>({
	Week_Start: {
		type: String
	},
	tenure: {
		type: String
	},
	new_members: {
		type: Number
	}
}).add(BaseSchema);

export const DiscordNewMembersByDiscordTenure = model<IDiscordNewMembersByDiscordTenure>(
	"discord_new_members_by_discord_tenure",
	DiscordNewMembersByDiscordTenureSchema
);
