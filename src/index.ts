import { bulkInsert } from "@helpers";
import * as Models from "@models";
import { connectToDatabase, log } from "@services";

import discord_active_subscription_members from "../data/discord_active_subscription_members.json";
import discord_guild_activation from "../data/discord_guild_activation.json";
import discord_guild_communicators from "../data/discord_guild_communicators.json";
import discord_guild_leavers from "../data/discord_guild_leavers.json";
import discord_guild_message_activity from "../data/discord_guild_message_activity.json";
import discord_guild_muters from "../data/discord_guild_muters.json";
import discord_guild_new_followers from "../data/discord_guild_new_followers.json";
import discord_guild_retention from "../data/discord_guild_retention.json";
import discord_guild_revenue from "../data/discord_guild_revenue.json";
import discord_guild_revenue_by_platform from "../data/discord_guild_revenue_by_platform.json";
import discord_guild_total_followers from "../data/discord_guild_total_followers.json";
import discord_guild_total_membership from "../data/discord_guild_total_membership.json";
import discord_guild_voice_activity from "../data/discord_guild_voice_activity.json";
import discord_joins_by_invite_link from "../data/discord_joins_by_invite_link.json";
import discord_joins_by_referring_domain from "../data/discord_joins_by_referring_domain.json";
import discord_joins_by_source from "../data/discord_joins_by_source.json";
import twitch_analytics_and_revenue_by_day from "../data/twitch_analytics_and_revenue_by_day.json";

try {
	await connectToDatabase();
	await bulkInsert(Models.DiscordActiveSubscriptionMembers, discord_active_subscription_members);
	await bulkInsert(Models.DiscordGuildActivation, discord_guild_activation);
	await bulkInsert(Models.DiscordGuildCommunicators, discord_guild_communicators);
	await bulkInsert(Models.DiscordGuildLeavers, discord_guild_leavers);
	await bulkInsert(Models.DiscordGuildMessageActivity, discord_guild_message_activity);
	await bulkInsert(Models.DiscordGuildMuters, discord_guild_muters);
	await bulkInsert(Models.DiscordGuildNewFollowers, discord_guild_new_followers);
	await bulkInsert(Models.DiscordGuildRetention, discord_guild_retention);
	await bulkInsert(Models.DiscordGuildRevenue, discord_guild_revenue);
	await bulkInsert(Models.DiscordGuildRevenueByPlatform, discord_guild_revenue_by_platform);
	await bulkInsert(Models.DiscordGuildTotalFollowers, discord_guild_total_followers);
	await bulkInsert(Models.DiscordGuildTotalMembership, discord_guild_total_membership);
	await bulkInsert(Models.DiscordGuildVoiceActivity, discord_guild_voice_activity);
	await bulkInsert(Models.DiscordJoinsByInviteLink, discord_joins_by_invite_link);
	await bulkInsert(Models.DiscordJoinsByReferringDomain, discord_joins_by_referring_domain);
	await bulkInsert(Models.DiscordJoinsBySource, discord_joins_by_source);
	await bulkInsert(Models.TwitchAnalyticsAndRevenueByDay, twitch_analytics_and_revenue_by_day);
} catch (error) {
	log.error(error);
}
