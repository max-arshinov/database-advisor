import {AllHostingOptions, ConsistencyModels, Database} from "../types";
import DocumentDatabase from "./DocumentDatabase";
import {
    CMS, ECommerce,
    FinancialApplications, Gaming,
    IoT,
    MachineLearning,
    MobileApplications, Personalization,
    WebApplications
} from "@/databases/domain/use-cases";

const MongoDb: Database = {
    ...DocumentDatabase,
    name: 'MongoDb',
    hostingOptions: AllHostingOptions,
    licenses: [],
    consistencyModels: [ConsistencyModels.Immediate, ConsistencyModels.Eventual],
    description: 'One of the most popular document stores available both as a fully managed cloud service ' +
        'and for deployment on self-managed infrastructure.',
    useCases: [MachineLearning, IoT, WebApplications, MobileApplications, FinancialApplications, CMS, ECommerce, 
        Gaming, Personalization]
}

export default MongoDb;