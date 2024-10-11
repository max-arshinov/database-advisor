import {AllHostingOptions, Database} from "@/databases/domain/types";
import Search from "@/databases/domain/search/Search";

const ElasticSearch: Database = {
    ...Search,
    name: 'Elastic Search',
    hostingOptions: AllHostingOptions,
    consistencyModels: [], 
    licenses: [],
}

export default ElasticSearch;