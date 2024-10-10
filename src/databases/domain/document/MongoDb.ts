import {AllHostingOptions, ConsistencyModels, Database} from "../types";
import DocumentDatabase from "./DocumentDatabase";

const MongoDb: Database = {
    ...DocumentDatabase,
    name: 'MongoDb',
    hostingOptions: AllHostingOptions,
    licenses: [],
    consistencyModels: [ConsistencyModels.ImmediateConsistency, ConsistencyModels.EventualConsistency],
    description: 'One of the most popular document stores available both as a fully managed cloud service and for deployment on self-managed infrastructure.'
}

export default MongoDb;