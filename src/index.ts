import { bulkInsert } from "@helpers";
import { DiscordActiveSubscriptionMembers, TwitchAnalyticsAndRevenueByDay } from "@models";
import { connectToDatabase, log } from "@services";

import discord_active_subscription_members from "../data/discord_active_subscription_members.json";
import twitch_analytics_and_revenue_by_day from "../data/twitch_analytics_and_revenue_by_day.json";

try {
	await connectToDatabase();
	await bulkInsert(DiscordActiveSubscriptionMembers, discord_active_subscription_members);
	await bulkInsert(TwitchAnalyticsAndRevenueByDay, twitch_analytics_and_revenue_by_day);
} catch (error) {
	log.error(error);
}
