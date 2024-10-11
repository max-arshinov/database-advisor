import {Database} from "./types";
import relationalDbs from "@/databases/domain/relational/index";
import wideColumnDbs from "@/databases/domain/wide-column/index";
import columnarDbs from "@/databases/domain/columnar/index";
import documentDbs from "@/databases/domain/document/index";
import multiModelDbs from "@/databases/domain/multi-model/index";
import keyValueDbs from "@/databases/domain/key-value/index";
import searchDbs from "@/databases/domain/search/index";

const allDbs: Database[] = [
    ...relationalDbs,
    ...columnarDbs,
    ...wideColumnDbs,
    ...documentDbs,
    ...keyValueDbs,
    ...searchDbs,
    ...multiModelDbs
].sort((a,b) => a.name.localeCompare(b.name));


export default allDbs;