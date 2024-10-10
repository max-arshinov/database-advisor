import {CA, CL, ConsistencyModels, DbModels, HostingOptions, Licenses} from "./types";
import {Database} from "@/databases/domain/types";

type DbSearchParam = {
    consistency: {
        consistencyModels: ConsistencyModels[],
        pacels: {
            ca: CA,
            cl: CL
        }
    },
    constraints: {
        licenses: Licenses[],
        hostingOptions: HostingOptions[],
        prioritizeManagedCloudServices: boolean
        dataType: string,
        pricingModel: string
    },
    loadProfile: {
        
    },
    qualityAttributes: {
        
    },
    features: {
        
    },
    dbModels: DbModels[]
};

export default function findDb(searchParam: DbSearchParam, databases: Database[]) {
    let res = databases.filter(x => searchParam.constraints.licenses.every(y => x.licenses.includes(y)));
    return res;
    // Open Source / Commercial | Yes/no
    // Prioritize Cloud Native? | Yes/no
    // Latency/Consistency - ??? Linear? | Yes/no
    //   Use Cases / Load Profile / Indexes | Think about it
    // DB Size -> Shards? Throughput / Write
    // Durability/In-memory | Yes/no
    // Availability -> Replicas | 99.999% -> Cross DC -> Cassandra/Cosmos/Dynamo
    // Features | Yes/no
    /*
        Features 2:
        In-Memory / Latency
        Single-thread??
        Maintainability
        Configurability        
        Observability
        Interoperability / Kibana / Kafka / etc
     */
    // Db Model | Yes/no | DB > Extension
    return [];
}