import {ConsistencyModels, DbModels, IDatabase, SecondaryModelSupport} from "../types";

export class Redis implements IDatabase {
    get consistencyModels(): ConsistencyModels[] {
        throw new Error("Method not implemented.");
    }
    get name(): string {
        throw new Error("Method not implemented.");
    }
    get model(): DbModels {
        throw new Error("Method not implemented.");
    }
    get description(): string {
        throw new Error("Method not implemented.");
    }
    get isCommercial(): boolean {
        throw new Error("Method not implemented.");
    }
    get secondaryModels(): SecondaryModelSupport[] {
        throw new Error("Method not implemented.");
    }
}