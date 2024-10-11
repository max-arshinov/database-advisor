import Cassandra from "@/databases/domain/wide-column/Cassandra";
import Scylla from "@/databases/domain/wide-column/Scylla";
import BigTable from "@/databases/domain/wide-column/BigTable";
import HBase from "@/databases/domain/wide-column/HBase";

export default [BigTable, Cassandra, Scylla, HBase];