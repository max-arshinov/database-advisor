import {AllHostingOptions, Database, DbModels} from "@/databases/domain/types";
import WideColumn from "@/databases/domain/wide-column/WideColumn";

const Scylla: Database = {
    ...WideColumn,
    name: "Scylla",
    hostingOptions: AllHostingOptions, 
    licenses: [],
    throughput: {
        ops: '1M',
        latency: '5ms'
    }
}

export default Scylla;