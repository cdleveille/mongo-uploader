import { model, Schema } from "mongoose";

import { BaseSchema } from "@helpers";

import type { IDiscordTrialsActive } from "@types";

const DiscordTrialsActiveSchema = new Schema<IDiscordTrialsActive>({
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
	active_subs: {
		type: Number
	}
}).add(BaseSchema);

export const DiscordTrialsActive = model<IDiscordTrialsActive>("discord_trials_active", DiscordTrialsActiveSchema);
