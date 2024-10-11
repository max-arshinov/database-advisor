import {AllHostingOptions, Database} from "@/databases/domain/types";
import WideColumn from "@/databases/domain/wide-column/WideColumn";

const BigTable:Database = {
    ...WideColumn,
    name: "Google BigTable",
    hostingOptions: AllHostingOptions,
    licenses: [],
}

export default BigTable;