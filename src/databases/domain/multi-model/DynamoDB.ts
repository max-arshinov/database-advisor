import MultiModel from "@/databases/domain/multi-model/MultiModel";
import {ConsistencyModels, Database, DbModels, HostingOptions, Licenses, SupportType} from "@/databases/domain/types";

const DynamoDB: Database = {
    ...MultiModel,
    name: "Dynamo DB",
    hostingOptions: [HostingOptions.AWS],
    licenses: [Licenses.Commercial],
    consistencyModels: [ConsistencyModels.Eventual],
    secondaryModels: [{
        support: SupportType.Supported,
        model: DbModels.KeyValue
    }]
}

export default DynamoDB;