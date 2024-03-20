import { model, Schema } from "mongoose";

import { BaseSchema } from "@helpers";

import type { IDiscordGuildRevenueByPlatform } from "@types";

const DiscordGuildRevenueByPlatformSchema = new Schema<IDiscordGuildRevenueByPlatform>({
	application_id: {
		type: String
	},
	Week_Start: {
		type: String
	},
	aggregation_interval: {
		type: Number
	},
	payout_amount: {
		type: Number
	},
	payment_platform: {
		type: String
	}
}).add(BaseSchema);

export const DiscordGuildRevenueByPlatform = model<IDiscordGuildRevenueByPlatform>(
	"discord_guild_revenue_by_platform",
	DiscordGuildRevenueByPlatformSchema
);
