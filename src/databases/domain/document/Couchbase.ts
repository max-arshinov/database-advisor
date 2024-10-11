import {Database} from "@/databases/domain/types";
import DocumentDatabase from "@/databases/domain/document/DocumentDatabase";

const Couchbase: Database = {
    ...DocumentDatabase,
    name: 'Couchbase',
    consistencyModels: [], hostingOptions: [], licenses: [],
}

export default Couchbase;