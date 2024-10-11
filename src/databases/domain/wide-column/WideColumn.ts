import {ConsistencyModels, DbModels} from "@/databases/domain/types";

const WideColumn = {
    primaryModel: DbModels.WideColumn,
    consistencyModels: [ConsistencyModels.Immediate, ConsistencyModels.Eventual],
}

export default WideColumn;