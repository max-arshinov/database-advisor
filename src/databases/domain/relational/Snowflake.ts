import {Database, HostingOptions} from "@/databases/domain/types";
import RelationalDatabase from "@/databases/domain/relational/RelationalDatabase";

const Snowflake: Database = {
    ...RelationalDatabase,
    name: 'Snowflake',
    hostingOptions: [HostingOptions.Other],
}

export default Snowflake;