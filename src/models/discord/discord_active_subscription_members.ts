import { model, Schema } from "mongoose";

import { BaseSchema } from "@helpers";

import type { IDiscordActiveSubscriptionMembers } from "@types";

const DiscordActiveSubscriptionMembersSchema = new Schema<IDiscordActiveSubscriptionMembers>({
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
	payment_platform: {
		type: String
	}
}).add(BaseSchema);

export const DiscordActiveSubscriptionMembers = model<IDiscordActiveSubscriptionMembers>(
	"discord_active_subscription_members",
	DiscordActiveSubscriptionMembersSchema
);
