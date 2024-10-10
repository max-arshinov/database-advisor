import React from "react";
import {DataGrid, GridColDef, GridRenderCellParams} from "@mui/x-data-grid";
import allDbs from "../domain/all-dbs";
import {Database, IDatabase, SecondaryModelSupport} from "../domain/types";
import {Checkbox} from "@mui/material";
import Box from "@mui/material/Box";

const checkboxRenderer = (params: GridRenderCellParams) =>
    (<Checkbox checked={params.value} disabled={true}/>)

const secondaryModelRenderer = (params: GridRenderCellParams) =>
    <div>
        {params.value?.length > 0 ? (params.value as SecondaryModelSupport[])
            .map(x => x.type + '')
            .reduce((c, n) => c + ', ' + n) : ''}
    </div>

const stringArrayRenderer = (params: GridRenderCellParams) =>
    <div>
        {params.value?.length > 0 ? (params.value as string[])
            .map(x => x + '')
            .reduce((c, n) => c + ', ' + n) : ''}
    </div>

const columns: GridColDef<(typeof allDbs)[number]>[] = [
    {
        field: 'name',
        headerName: 'Name',
    },
    {
        field: 'score',
        headerName: 'Score'
    },
    {
        field: 'model',
        headerName: 'Primary Model',
    },
    {
        field: 'secondaryModels',
        headerName: 'Secondary Models',
        width: 150,
        renderCell: secondaryModelRenderer
    },
    // {
    //     field: 'pc',
    //     headerName: 'PC',
    //     width: 10,
    //     renderCell: checkboxRenderer
    // },
    // {
    //     field: 'pa',
    //     headerName: 'PA',
    //     width: 10,
    //     renderCell: checkboxRenderer
    // },
    // {
    //     field: 'ec',
    //     headerName: 'EC',
    //     width: 10,
    //     renderCell: checkboxRenderer
    // },
    // {
    //     field: 'el',
    //     headerName: 'EL',
    //     width: 10,
    //     renderCell: checkboxRenderer
    // },
    {
        field: 'consistencyModels',
        headerName: 'Consistency Model',
        width: 120,
        renderCell: stringArrayRenderer
    },
    {
        field: 'license',
        headerName: 'License',
        width: 80
    },
    {
        field: 'hostingOptions',
        headerName: 'Hosting',
        renderCell: stringArrayRenderer
    },
    {
        field: 'indexes',
        headerName: 'Indexes'
    },
    {
        field: 'transactions',
        headerName: 'Transactions',
        width: 110
    },
    {
        field: 'scheme',
        headerName: 'Data Scheme',
        width: 80
    },
    {
        field: 'sharding',
        headerName: 'Sharding',
        width: 90
    },
    {
        field: 'replication',
        headerName: 'Replication',
        width: 120
    },
    {
        field: 'sql',
        headerName: 'SQL',
        width: 60
    },
    {
        field: 'apis',
        headerName: 'Supported APIs'
    },
    {
        field: 'description',
        headerName: 'Description',
        width: 200
    },
    {
        field: 'released',
        headerName: 'Released'
    }
];

const sx = {
    "& .MuiDataGrid-columnHeaderTitle": {
        // textAlign: "center",
        padding: "0.3em",
        whiteSpace: "normal",
        lineHeight: "normal"
    },
    "& .MuiDataGrid-columnHeader": {
        // Forced to use important since overriding inline styles
        height: "unset !important"
    },
    "& .MuiDataGrid-columnHeaders": {
        // Forced to use important since overriding inline styles
        maxHeight: "168px !important"
    }
};

//https://mui.com/x/react-data-grid/column-groups/
export default function DbDataGrid() {
    const [databases, setDatabases] = React.useState<Database[]>(allDbs);

    return (<Box sx={{height: 400, width: '100%', margin: 'auto'}}>
        <DataGrid
            sx={sx}
            getRowHeight={() => 'auto'}
            rows={databases}
            columns={columns}
            getRowId={function (x) {
                return x.name;
            }}
            autoPageSize
        />

        <h3>Search Algorithm</h3>
        <ol>
            <li>
                <strong>Apply Yes/No filters</strong>
                <ol>
                    <li>Free / Commercial</li>
                    <li>
                        Prioritize Cloud Native
                        <ul>
                            <li>Azure: Cosmos DB &gt; MongoDB</li>
                            <li>AWS: Document DB &gt; MongoDB</li>
                            <li>BigTable, BigQuery for GCP, Etc...</li>
                            <li>Multi-cloud: check which dbs have managed version in all 3 clouds</li>
                        </ul>
                    </li>
                    <li>
                        PACElC: Consistency/Latency, Consistency/Availability
                    </li>
                    <li>Supported features</li>
                </ol>
            </li>
            <li>
                <strong>Score</strong>
                <ol>
                    <li>Data Structure/Data type &rarr; DB Model</li>
                    <li>Write Heavy &rarr; DB Size 1TB &rarr; need shards</li>
                    <li>Durable/In-memory VS Latency</li>
                    <li>Availability &rarr; Replicas | 99.999% &rarr; Cross DC &rarr; Cassandra/Cosmos/Dynamo</li>
                    <li>Tradeoffs: Single/multi-thread,...</li>
                    <li>Quality Attributes</li>
                </ol>
            </li>
        </ol>
    </Box>);
}
