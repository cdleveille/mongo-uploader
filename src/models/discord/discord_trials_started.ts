import { model, Schema } from "mongoose";

import { BaseSchema } from "@helpers";

import type { IDiscordTrialsStarted } from "@types";

const DiscordTrialsStartedSchema = new Schema<IDiscordTrialsStarted>({
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

export const DiscordTrialsStarted = model<IDiscordTrialsStarted>("discord_trials_started", DiscordTrialsStartedSchema);
