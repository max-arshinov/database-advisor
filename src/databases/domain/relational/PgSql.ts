import {
    AllHostingOptions,
    Database,
    DbModels,
    IExtension,
    SecondaryModelSupport,
    SupportType
} from "../types";
import RelationalDatabase from "./RelationalDatabase";

const PgSql: Database = {
    ...RelationalDatabase,
    name: 'PostgreSQL',
    secondaryModels: [
        {
            type: DbModels.Document,
            support: SupportType.Supported
        },
        {
            type: DbModels.Graph,
            // TODO: check
            support: SupportType.PartialSupport
        },
        {
            type: DbModels.Spatial,
            // TODO: check
            support: SupportType.PartialSupport
        },
        {
            type: DbModels.Vector,
            // TODO: check
            support: SupportType.PartialSupport
        }
    ],
    hostingOptions: AllHostingOptions
}

export default PgSql;

export class Citus implements IExtension {
    get name(): string {
        return "Citus";
    }

    get models(): SecondaryModelSupport[] {
        return [
            {
                type: DbModels.Columnar,
                support: SupportType.PartialSupport
            }
        ];
    }

    get description(): string {
        throw new Error("Method not implemented.");
    }

}