import Dropdown from "@/shared/components/Dropdown";
import {getEnumValues} from "@/shared/domain/helpers";
import {DataStructures} from "@/databases/domain/types";
import * as React from "react";
import Typography from "@mui/material/Typography";
import Field from "@/shared/components/Field";

export default function Data() {
    return <>
        <Dropdown multiple options={getEnumValues(DataStructures)} value={["Structured"]} label="Data Structure" />
        
        <Typography variant="h5">Unit (Row/Document) Size</Typography>
        <Field label="Mean Unit Size (KB)" value="5" />
        <Field label="Max Unit Size (KB)" value="8" />

        <Typography variant="h5">DB Size</Typography>
        <Field label="DB Size (GB)" value="100" />
        <Field label="DB Size Growth per Month (GB)" value="5" />
        
        {/*<Dropdown multiple options={[*/}
        {/*    'Financial',*/}
        {/*    'JSON',*/}
        {/*    'XML',*/}
        {/*    'IP',*/}
        {/*    'Spatial',*/}
        {/*    'Time Series'*/}
        {/*]} label="Supported Data Types" />*/}
    </>;
}