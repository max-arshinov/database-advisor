import Cassandra from "@/databases/domain/wide-column/Cassandra";
import Scylla from "@/databases/domain/wide-column/Scylla";
import BigTable from "@/databases/domain/wide-column/BigTable";

export default [BigTable, Cassandra, Scylla];