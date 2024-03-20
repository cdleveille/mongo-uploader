import { model, Schema } from "mongoose";

import { BaseSchema } from "@helpers";

import type { IDiscordJoinsByReferringDomain } from "@types";

const DiscordJoinsByReferringDomainSchema = new Schema<IDiscordJoinsByReferringDomain>({
	Week_Start: {
		type: String
	},
	Referring_Domain: {
		type: String
	},
	Joins: {
		type: Number
	}
}).add(BaseSchema);

export const DiscordJoinsByReferringDomain = model<IDiscordJoinsByReferringDomain>(
	"discord_joins_by_referring_domain",
	DiscordJoinsByReferringDomainSchema
);
