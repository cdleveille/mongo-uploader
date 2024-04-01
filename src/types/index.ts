export interface IConfig {
	IS_PROD: boolean;
	MONGO_URI: string;
	DELETE_FIRST: boolean;
}

export interface IBase {
	created_at: Date;
	updated_at: Date;
}

export interface IDiscordActiveSubscriptionMembers {
	application_id: string;
	Week_Start: string;
	aggregation_interval: number;
	tier_id: string;
	tier_name: string;
	is_trial: boolean | string;
	payment_platform: string;
}

export interface IDiscordGuildActivation {
	application_id: string;
	Week_Start: string;
	aggregation_interval: number;
	tier_id: string;
	tier_name: string;
	is_trial: boolean | string;
	payment_platform: string;
}

export interface IDiscordGuildCommunicators {
	Week_Start: string;
	Visitors: number;
	Pct_Communicated: number;
}

export interface IDiscordGuildLeavers {
	Week_Start: string;
	Days_In_Guild: string;
	Total_Membership: number;
}

export interface IDiscordGuildMessageActivity {
	Week_Start: string;
	Messages: number;
	Messages_Per_Communicator: number;
}

export interface IDiscordGuildMuters {
	Week_Start: string;
	days_in_guild: string;
	speaking_minutes: number;
}

export interface IDiscordGuildNewFollowers {
	Week_Start: string;
	new_followers: number;
}

export interface IDiscordGuildRetention {
	Week_Start: string;
	New_Members: number;
	Pct_Retained: number;
}

export interface IDiscordGuildRevenue {
	application_id: string;
	Week_Start: string;
	aggregation_interval: number;
	tier_id: string;
	tier_name: string;
	payout_amount: number;
}

export interface IDiscordGuildRevenueByPlatform {
	application_id: string;
	Week_Start: string;
	aggregation_interval: number;
	payout_amount: number;
	payment_platform: string;
}

export interface IDiscordGuildTotalFollowers {
	Week_Start: string;
	new_followers: number;
}

export interface IDiscordGuildTotalMembership {
	Week_Start: string;
	total_membership: number;
}

export interface IDiscordGuildVoiceActivity {
	Week_Start: string;
	speaking_minutes: number;
}

export interface IDiscordJoinsByInviteLink {
	Week_Start: string;
	invite_link: string;
	Joins: number;
}

export interface IDiscordJoinsByReferringDomain {
	Week_Start: string;
	Referring_Domain: string;
	Joins: number;
}

export interface IDiscordJoinsBySource {
	Week_Start: string;
	Discovery: number;
	Invites: number;
	Vanity: number;
	Hubs: number;
	Bot: number;
	Integration: number;
	Other: number;
	Total: number;
}

export interface IDiscordMemberSignups {
	application_id: string;
	Week_Start: string;
	aggregation_interval: number;
	tier_id: string;
	tier_name: string;
	is_trial: boolean | string;
	signups: number;
	renewals: number;
	upgrades: number;
	churn: number;
}

export interface IDiscordNewMembersByDiscordTenure {
	Week_Start: string;
	tenure: string;
	new_members: number;
}

export interface IDiscordParticipatorsByGuildTenure {
	Week_Start: string;
	tenure: string;
	participators: number;
}

export interface IDiscordParticipatorsByPlatform {
	Week_Start: string;
	platform: string;
	participators: number;
}

export interface IDiscordParticipatorsByRegCountry {
	Week_Start: string;
	country_code: string;
	participators: number;
}

export interface IDiscordPopularTextChannels {
	Week_Start: string;
	channel_name: string;
	channel_id: string;
	readers: number;
	chatters: number;
	messages: number;
}

export interface IDiscordSelectedWelcomeChannels {
	Week_Start: string;
	option_selected: string;
	channel_id: string;
	pct_clicked: number;
	pct_sent_message: number;
}

export interface IDiscordServersUnfollowed {
	Week_Start: string;
	unfollows: number;
}

export interface IDiscordSubscriberCancellations {
	application_id: string;
	Week_Start: string;
	aggregation_interval: number;
	tier_id: string;
	tier_name: string;
	is_trial: boolean | string;
	cancels: number;
}

export interface IDiscordSubscriberChurn {
	application_id: string;
	Week_Start: string;
	aggregation_interval: number;
	tier_id: string;
	tier_name: string;
	is_trial: boolean | string;
	signups: number;
	renewals: number;
	upgrades: number;
	churn: number;
}

export interface IDiscordTrialsActive {
	application_id: string;
	Week_Start: string;
	aggregation_interval: number;
	tier_id: string;
	tier_name: string;
	is_trial: boolean | string;
	active_subs: number;
}

export interface IDiscordTrialsConversion {
	application_id: string;
	Week_Start: string;
	aggregation_interval: number;
	tier_id: string;
	tier_name: string;
	is_trial: boolean | string;
	signups: number;
	renewals: number;
	upgrades: number;
	churn: number;
}

export interface IDiscordTrialsStarted {
	application_id: string;
	Week_Start: string;
	aggregation_interval: number;
	tier_id: string;
	tier_name: string;
	is_trial: boolean | string;
	signups: number;
	renewals: number;
	upgrades: number;
	churn: number;
}

export interface ITwitchAnalyticsAndRevenueByDay {
	Date: string;
	"Average Viewers": number;
	Follows: number;
	"Minutes Streamed": number;
	"Minutes Watched": number;
	"Live Views": number;
	"Max Viewers": number;
	"Unique Viewers": number;
	"Engaged Viewers": number;
	"Hosts and Raids Viewers (%)": number;
	Chatters: number;
	"Chat Messages": number;
	"Clips Created": number;
	"Clip Views": number;
	"Featured Clip Views": number;
	"Unfeatured Clip Views": number;
	"Ad Breaks (Minutes)": number;
	"Ad Time (Seconds) Per Hour": number;
	"Sub Revenue": number;
	"Prime Revenue": number;
	"Gifted Subs Revenue": number;
	"Multi-Month Gifted Subs Revenue": number;
	"Bits Revenue": number;
	"Ad Revenue": number;
	"Turbo Revenue": number;
	"Game Sales Revenue": number;
	"Extensions Revenue": number;
	"Bounties Revenue": number;
	"Other Bits Interactions Revenue": number;
	"New Engaged Viewers": number;
	"Returning Engaged Viewers": number;
	"Prime Subs": number;
	"Total Paid Subs": number;
	"Tier 1 subs": number;
	"Tier 2 subs": number;
	"Tier 3 subs": number;
	"Total Gifted Subs": number;
	"Gifted Tier 1 subs": number;
	"Gifted Tier 2 subs": number;
	"Gifted Tier 3 subs": number;
	"Total Multi-Month Gifted subs": number;
	"Multi-Month Gifted Tier 1 subs": number;
	"Multi-Month Gifted Tier 2 subs": number;
	"Multi-Month Gifted Tier 3 subs": number;
}

export interface ITwitchStreamSummary {
	Timestamp: string;
	"Average Viewers": number;
	"Live Views": number;
	"New Followers": number;
	Chatters: number;
	"Chat Messages": number;
	"Ad Breaks": number;
	"New Subscriptions": number;
	"Clips Created": number;
	"Clip Views": number;
}
