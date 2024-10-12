import * as React from "react";
import Dropdown from "@/shared/components/Dropdown";
import {getEnumValues} from "@/shared/domain/helpers";
import {Availability, Interoperability, Latencies, Maintainability, Scalability} from "@/databases/domain/types";

export default function QualityAttributes () {
    return <>
        <Dropdown options={getEnumValues(Latencies)} label="Latency" />
        <Dropdown options={getEnumValues(Scalability)} label="Scalability" />
        <Dropdown options={getEnumValues(Availability)} label="Availability" />
        <Dropdown options={getEnumValues(Maintainability)} label="Maintainability" />
        <Dropdown options={getEnumValues(Interoperability)} label="Interoperability" multiple={true} />
        <Dropdown options={[]} label="Security" />
    </>
}