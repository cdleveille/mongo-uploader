import { model, Schema } from "mongoose";

import { BaseSchema } from "@helpers";

import type { IDiscordSubscriberChurn } from "@types";

const DiscordSubscriberChurnSchema = new Schema<IDiscordSubscriberChurn>({
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

export const DiscordSubscriberChurn = model<IDiscordSubscriberChurn>(
	"discord_subscriber_churn",
	DiscordSubscriberChurnSchema
);
