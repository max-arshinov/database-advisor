import Dropdown from "@/shared/components/Dropdown";
import {getEnumValues} from "@/shared/domain/helpers";
import {DataStructures} from "@/databases/domain/types";
import * as React from "react";

export default function Data() {
    return <>
        <Dropdown multiple options={getEnumValues(DataStructures)} label="Data Structure" />

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