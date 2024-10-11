import {Database} from "../types";
import KeyValue from "@/databases/domain/key-value/KeyValue";

const Memcached: Database = {
    ...KeyValue,
    name: 'Memcached',
    hostingOptions: []
}

export default Memcached;