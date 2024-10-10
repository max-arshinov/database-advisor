import {Database, IDatabase} from "./types";
import PgSql from "./relational/PgSql";
import ClickHouse from "./columnar/ClickHouse";
import MongoDb from "./document/MongoDb";

const allDbs: Database[] = [
    PgSql,
    MongoDb,
    ClickHouse
];

export default allDbs;