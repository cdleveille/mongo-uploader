import { model, Schema } from "mongoose";

import { BaseSchema } from "@helpers";

import type { ITwitchStreamSummary } from "@types";

const TwitchStreamSummarySchema = new Schema<ITwitchStreamSummary>({
	Timestamp: {
		type: String
	},
	"Average Viewers": {
		type: Number
	},
	"Live Views": {
		type: Number
	},
	"New Followers": {
		type: Number
	},
	Chatters: {
		type: Number
	},
	"Chat Messages": {
		type: Number
	},
	"Ad Breaks": {
		type: Number
	},
	"New Subscriptions": {
		type: Number
	},
	"Clips Created": {
		type: Number
	},
	"Clip Views": {
		type: Number
	}
}).add(BaseSchema);

export const TwitchStreamSummary = model<ITwitchStreamSummary>("twitch_stream_summary", TwitchStreamSummarySchema);
