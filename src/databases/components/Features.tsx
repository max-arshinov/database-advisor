import Box from "@mui/material/Box";
import {FormGroup} from "@mui/material";
import Dropdown from "@/shared/components/Dropdown";
import {getEnumValues} from "@/shared/domain/helpers";
import {Licenses, QueryLanguages} from "@/databases/domain/types";
import * as React from "react";
import Checkbox from "@/shared/components/Checkbox";

export default function Features() {
    return <>
        <Dropdown multiple={true} options={getEnumValues(QueryLanguages)} label="Query Language" />
        {/*<Dropdown multiple={true} options={getEnumValues(QueryLanguages)} label="Supported APIs" />*/}
        <Dropdown multiple={true} options={[]} label="Transactions" />
        <Dropdown multiple={true} options={[]} label="Partitioning Model" />
        <Dropdown multiple={true} options={[]} label="Replication Model" />

        {/*<Checkbox label="Linear Scalability" />*/}
        <Checkbox label="Primary Indexes" />
        <Checkbox label="Secondary Indexes" />

        <Checkbox label="Cross-DC" />
        <Checkbox label="CDC/Streaming" />
        <Checkbox label="Map/Reduce" />
        <Checkbox label="Full-text search" />
        <Checkbox label="Bulk operations" />
        <Checkbox label="Server-side scripting" />
    </>;
    
    return (<FormGroup>
        
        <ul>
            <li>Query Language</li>
            <li>Transaction</li>
            <li>Sharding</li>
            <li>Linear Scalability</li>
            <li>Full-text search</li>
            <li>Map/Reduce</li>
            <li>Indexes</li>
            <li>Triggers</li>
            <li>Foreign Keys</li>
            <li>Partitioning/Sharding</li>
            <li>Server-side scripting</li>
            <li>CDC</li>
            <li>bulk operations</li>
            <li>        Interoperability/Ecosystem / API</li>
        </ul>
    </FormGroup>);
}