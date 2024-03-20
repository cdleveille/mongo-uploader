import { model, Schema } from "mongoose";

import { BaseSchema } from "@helpers";

import type { IDiscordGuildRevenue } from "@types";

const DiscordGuildRevenueSchema = new Schema<IDiscordGuildRevenue>({
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
	payout_amount: {
		type: Number
	}
}).add(BaseSchema);

export const DiscordGuildRevenue = model<IDiscordGuildRevenue>("discord_guild_revenue", DiscordGuildRevenueSchema);

