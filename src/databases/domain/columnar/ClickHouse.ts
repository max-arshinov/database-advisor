import {Database, DbModels} from "../types";
import RelationalDatabase from "@/databases/domain/relational/RelationalDatabase";
import {BusinessIntelligence, GenAI, Logs, MachineLearning, RealTimeAnalytics} from "@/databases/domain/use-cases";

//https://clickhouse.com/use-cases
const ClickHouse: Database = {
    ... RelationalDatabase,
    name: 'ClickHouse',
    primaryModel: DbModels.Columnar,
    consistencyModels: [], 
    hostingOptions: [], 
    licenses: [],
    useCases: [RealTimeAnalytics, MachineLearning, GenAI, BusinessIntelligence, Logs]
}

export default ClickHouse;