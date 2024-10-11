import RelationalDatabase from "@/databases/domain/relational/RelationalDatabase";
import {AllHostingOptions, Database} from "@/databases/domain/types";

const Oracle: Database = {
    ... RelationalDatabase,
    name: 'Oracle',
    hostingOptions: AllHostingOptions
}

export default Oracle;