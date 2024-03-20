import { model, Schema } from "mongoose";

import { BaseSchema } from "@helpers";

import type { IDiscordJoinsByInviteLink } from "@types";

const DiscordJoinsByInviteLinkSchema = new Schema<IDiscordJoinsByInviteLink>({
	Week_Start: {
		type: String
	},
	invite_link: {
		type: String
	},
	Joins: {
		type: Number
	}
}).add(BaseSchema);

export const DiscordJoinsByInviteLink = model<IDiscordJoinsByInviteLink>(
	"discord_joins_by_invite_link",
	DiscordJoinsByInviteLinkSchema
);
