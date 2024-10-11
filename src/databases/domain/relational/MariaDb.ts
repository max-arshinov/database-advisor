import RelationalDatabase from "@/databases/domain/relational/RelationalDatabase";
import {AllHostingOptions, Database} from "@/databases/domain/types";

const MariaDB: Database = {
    ... RelationalDatabase,
    name: 'MariaDB',
    hostingOptions: AllHostingOptions
}

export default MariaDB;