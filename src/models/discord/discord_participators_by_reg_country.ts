import { model, Schema } from "mongoose";

import { BaseSchema } from "@helpers";

import type { IDiscordParticipatorsByRegCountry } from "@types";

const DiscordParticipatorsByRegCountrySchema = new Schema<IDiscordParticipatorsByRegCountry>({
	Week_Start: {
		type: String
	},
	country_code: {
		type: String
	},
	participators: {
		type: Number
	}
}).add(BaseSchema);

export const DiscordParticipatorsByRegCountry = model<IDiscordParticipatorsByRegCountry>(
	"discord_participators_by_reg_country",
	DiscordParticipatorsByRegCountrySchema
);
