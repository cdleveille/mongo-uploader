import { model, Schema } from "mongoose";

import { BaseSchema } from "@helpers";

import type { IDiscordSubscriberCancellations } from "@types";

const DiscordSubscriberCancellationsSchema = new Schema<IDiscordSubscriberCancellations>({
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
	cancels: {
		type: Number
	}
}).add(BaseSchema);

export const DiscordSubscriberCancellations = model<IDiscordSubscriberCancellations>(
	"discord_subscriber_cancellations",
	DiscordSubscriberCancellationsSchema
);
