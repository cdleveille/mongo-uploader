import { Model, Schema } from "mongoose";

import { log } from "@services";

import type { IBase } from "@types";

export const BaseSchema = new Schema<IBase>({
	created_at: {
		type: Date,
		default: () => Date.now(),
		immutable: true
	},
	updated_at: {
		type: Date,
		default: () => Date.now()
	}
});

export const bulkInsert = async <T>(model: Model<T>, data: T[]) => {
	log.info(`Deleting all records from ${model.modelName}...`);
	await model.deleteMany();
	log.info(`Deleted all records from ${model.modelName}.`);

	log.info(`Inserting ${data.length} records into ${model.modelName}...`);
	await model.insertMany(data);
	log.info(`Inserted ${data.length} records into ${model.modelName}.`);
};
