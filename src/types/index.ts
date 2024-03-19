export interface IConfig {
	IS_PROD: boolean;
	MONGO_URI: string;
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
