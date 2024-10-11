import {AllHostingOptions, Database} from "@/databases/domain/types";
import WideColumn from "@/databases/domain/wide-column/WideColumn";

const HBase:Database = {
    ...WideColumn,
    name: "HBase",
    hostingOptions: AllHostingOptions,
    licenses: [],
}

export default HBase;