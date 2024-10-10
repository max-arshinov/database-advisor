import {ConsistencyModels, DbModels, IDatabase, SecondaryModelSupport} from "../types";

export class Cassandra implements IDatabase {
    get consistencyModels(): ConsistencyModels[] {
        throw new Error("Method not implemented.");
    }
    get name(): string {
        return "Apache Cassandra";
    }
    get model(): DbModels {
        return DbModels.WideColumn;
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