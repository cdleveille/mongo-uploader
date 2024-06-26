import type { IConfig } from "@types";

export const Config = {
	IS_PROD: Bun.env.NODE_ENV === "production",
	MONGO_URI: Bun.env.MONGO_URI || "mongodb://localhost:27017/mongo-uploader",
	DELETE_FIRST: Bun.env.DELETE_FIRST === "true"
} as IConfig;
