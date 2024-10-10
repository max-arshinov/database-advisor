import * as React from "react";
import Dropdown from "@/shared/components/Dropdown";

export default function QualityAttributes () {
    return <>
        <Dropdown options={[]} label="Latency" />
        <Dropdown options={[]} label="Throughput" />
        <Dropdown options={[]} label="Scalability" />

        <Dropdown options={[]} label="Availability" />

        <Dropdown options={[]} label="Security" />

        <Dropdown options={[]} label="Maintainability" />
    </>
}