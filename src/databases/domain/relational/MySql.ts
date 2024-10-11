import RelationalDatabase from "@/databases/domain/relational/RelationalDatabase";
import {AllHostingOptions, Database} from "@/databases/domain/types";

const MySql: Database = {
    ... RelationalDatabase,
    name: 'MySql',
    hostingOptions: AllHostingOptions
}

export default MySql;