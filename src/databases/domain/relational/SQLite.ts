import RelationalDatabase from "@/databases/domain/relational/RelationalDatabase";
import {AllHostingOptions, Database} from "@/databases/domain/types";

const SqLite: Database = {
    ... RelationalDatabase,
    name: 'SQLite',
    hostingOptions: AllHostingOptions
}

export default SqLite;