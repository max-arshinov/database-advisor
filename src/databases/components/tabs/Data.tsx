import Dropdown from "@/shared/components/Dropdown";
import {getEnumValues} from "@/shared/domain/helpers";
import {DataStructures} from "@/databases/domain/types";
import * as React from "react";
import Typography from "@mui/material/Typography";
import Field from "@/shared/components/Field";

export default function Data() {
    return <>
        <Dropdown multiple options={getEnumValues(DataStructures)} label="Data Structure" />

        <Field label="DB Size (GB)" value="100" />

        <Dropdown multiple options={[
            'Financial',
            'JSON',
            'XML',
            'IP',
            'Spatial',
            'Time Series'
        ]} label="Supported Data Types" />
    </>;
}