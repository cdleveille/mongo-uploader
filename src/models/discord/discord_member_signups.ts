import { model, Schema } from "mongoose";

import { BaseSchema } from "@helpers";

import type { IDiscordMemberSignups } from "@types";

const DiscordMemberSignupsSchema = new Schema<IDiscordMemberSignups>({
	application_id: {
		type: String
	},
	Week_Start: {
		type: String
	},
	aggregation_interval: {
		type: Number
	},
	tier_id: {
		type: String
	},
	tier_name: {
		type: String
	},
	is_trial: {
		type: Boolean
	},
	signups: {
		type: Number
	},
	renewals: {
		type: Number
	},
	upgrades: {
		type: Number
	},
	churn: {
		type: Number
	}
}).add(BaseSchema);

export const DiscordMemberSignups = model<IDiscordMemberSignups>("discord_member_signups", DiscordMemberSignupsSchema);
