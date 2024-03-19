import { model, Schema } from "mongoose";

import { BaseSchema } from "@helpers";

import type { ITwitchAnalyticsAndRevenueByDay } from "@types";

const TwitchAnalyticsAndRevenueByDaySchema = new Schema<ITwitchAnalyticsAndRevenueByDay>({
	Date: {
		type: String
	},
	"Average Viewers": {
		type: Number
	},
	Follows: {
		type: Number
	},
	"Minutes Streamed": {
		type: Number
	},
	"Minutes Watched": {
		type: Number
	},
	"Live Views": {
		type: Number
	},
	"Max Viewers": {
		type: Number
	},
	"Unique Viewers": {
		type: Number
	},
	"Engaged Viewers": {
		type: Number
	},
	"Hosts and Raids Viewers (%)": {
		type: Number
	},
	Chatters: {
		type: Number
	},
	"Chat Messages": {
		type: Number
	},
	"Clips Created": {
		type: Number
	},
	"Clip Views": {
		type: Number
	},
	"Featured Clip Views": {
		type: Number
	},
	"Unfeatured Clip Views": {
		type: Number
	},
	"Ad Breaks (Minutes)": {
		type: Number
	},
	"Ad Time (Seconds) Per Hour": {
		type: Number
	},
	"Sub Revenue": {
		type: Number
	},
	"Prime Revenue": {
		type: Number
	},
	"Gifted Subs Revenue": {
		type: Number
	},
	"Multi-Month Gifted Subs Revenue": {
		type: Number
	},
	"Bits Revenue": {
		type: Number
	},
	"Ad Revenue": {
		type: Number
	},
	"Turbo Revenue": {
		type: Number
	},
	"Game Sales Revenue": {
		type: Number
	},
	"Extensions Revenue": {
		type: Number
	},
	"Bounties Revenue": {
		type: Number
	},
	"Other Bits Interactions Revenue": {
		type: Number
	},
	"New Engaged Viewers": {
		type: Number
	},
	"Returning Engaged Viewers": {
		type: Number
	},
	"Prime Subs": {
		type: Number
	},
	"Total Paid Subs": {
		type: Number
	},
	"Tier 1 subs": {
		type: Number
	},
	"Tier 2 subs": {
		type: Number
	},
	"Tier 3 subs": {
		type: Number
	},
	"Total Gifted Subs": {
		type: Number
	},
	"Gifted Tier 1 subs": {
		type: Number
	},
	"Gifted Tier 2 subs": {
		type: Number
	},
	"Gifted Tier 3 subs": {
		type: Number
	},
	"Total Multi-Month Gifted subs": {
		type: Number
	},
	"Multi-Month Gifted Tier 1 subs": {
		type: Number
	},
	"Multi-Month Gifted Tier 2 subs": {
		type: Number
	},
	"Multi-Month Gifted Tier 3 subs": {
		type: Number
	}
}).add(BaseSchema);

export const TwitchAnalyticsAndRevenueByDay = model<ITwitchAnalyticsAndRevenueByDay>(
	"twitch_analytics_and_revenue_by_day",
	TwitchAnalyticsAndRevenueByDaySchema
);
