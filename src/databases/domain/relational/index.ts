import PgSql from "@/databases/domain/relational/PgSql";
import MySql from "@/databases/domain/relational/MySql";
import MsSql from "@/databases/domain/relational/MsSql";
import Oracle from "@/databases/domain/relational/Oracle";
import MariaDB from "@/databases/domain/relational/MariaDb";
import SqLite from "@/databases/domain/relational/SQLite";

export default [PgSql, MySql, MsSql, Oracle, MariaDB, SqLite]; 