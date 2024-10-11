import {ConsistencyModels, Database, DbModels, HostingOptions, Licenses, SupportType} from "@/databases/domain/types";
import MultiModel from "@/databases/domain/multi-model/MultiModel";

const CosmosDB: Database = {
    ...MultiModel,
    name: "Cosmos DB",
    description: "Globally distributed, horizontally scalable, multi-model database service",
    hostingOptions: [HostingOptions.Azure],
    licenses: [Licenses.Commercial],
    consistencyModels: [ConsistencyModels.Immediate, ConsistencyModels.Eventual],
    secondaryModels: [{
        support: SupportType.Supported,
        model: DbModels.WideColumn
    }]
}

export default CosmosDB;