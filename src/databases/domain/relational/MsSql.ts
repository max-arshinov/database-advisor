import RelationalDatabase from "@/databases/domain/relational/RelationalDatabase";
import {AllHostingOptions, Database} from "@/databases/domain/types";

const MsSql: Database = {
    ... RelationalDatabase,
    name: 'Microsoft SQL Server',
    hostingOptions: AllHostingOptions
}

export default MsSql;