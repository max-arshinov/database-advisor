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
    description: 'Widely-used open source RDBMS.',
    secondaryModels: [
        {
            model: DbModels.Document,
            support: SupportType.Supported
        },
        {
            model: DbModels.Graph,
            // TODO: check
            support: SupportType.PartialSupport
        },
        {
            model: DbModels.Spatial,
            // TODO: check
            support: SupportType.PartialSupport
        },
        {
            model: DbModels.Vector,
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
                model: DbModels.Columnar,
                support: SupportType.PartialSupport
            }
        ];
    }

    get description(): string {
        throw new Error("Method not implemented.");
    }

}