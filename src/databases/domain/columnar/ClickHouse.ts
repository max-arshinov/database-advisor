import {Database, DbModels} from "../types";
import RelationalDatabase from "@/databases/domain/relational/RelationalDatabase";

const ClickHouse: Database = {
    ... RelationalDatabase,
    name: 'ClickHouse',
    primaryModel: DbModels.Columnar,
    consistencyModels: [], 
    hostingOptions: [], 
    licenses: [], 
}

export default ClickHouse;