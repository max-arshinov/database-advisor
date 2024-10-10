import * as React from "react";
import Dropdown from "@/shared/components/Dropdown";
import {getEnumValues} from "@/shared/domain/helpers";
import {CA, CL, ConsistencyModels, HostingOptions, Licenses, PricingModels} from "@/databases/domain/types";
import Checkbox from "@/shared/components/Checkbox";
import HeaderWithTooltip from "@/shared/components/HeaderWithTooltip";

const tooltips  = {
    data: '',
    consistency: <>TODO</>,
    tradeoffs: <>The  <a href="https://en.wikipedia.org/wiki/PACELC_theorem">PACELC theorem</a> is an extension
        to the CAP theorem. It states that in case of network partitioning (P) in a distributed computer system,
        one has to choose between availability (A) and consistency (C) (as per the CAP theorem), 
        but else (E), even when the system is running normally in the absence of partitions, one has to 
        choose between latency (L) and loss of consistency (C).</>,
};

// https://mui.com/material-ui/react-text-field/
// https://redux.js.org/tutorials/typescript-quick-start
export default function PrimaryInfo() {
    return <>
        <HeaderWithTooltip tooltip={tooltips.data}>
            Data
        </HeaderWithTooltip>

        <Dropdown options={[
            'Structured',
            'Semi-Structured with Defined Schema',
            'Semi-Structured Databases with Flexible Schema',
            'Unstructured',
        ]} label="Data Structure" />

        <Dropdown options={[
            'Financial',
            'JSON',
            'XML',
            'IP',
            'Spatial',
            'Time Series'
        ]} label="Supported Data Types" />
        
        <HeaderWithTooltip tooltip={tooltips.consistency}>
            Consistency
        </HeaderWithTooltip>

        <Dropdown multiple={true} options={getEnumValues(ConsistencyModels)} label="Consistency Model"/>

        <HeaderWithTooltip variant="h6" tooltip={tooltips.tradeoffs}>
            Tradeoffs (PACELC)
        </HeaderWithTooltip>
    
        <Dropdown options={getEnumValues(CL)} label="Consistency/Latency"/>
        <Dropdown options={getEnumValues(CA)} label="Consistency/Availability"/>

        <HeaderWithTooltip tooltip="This is a long description of why this is important. Hello from the other side. At least I can't say that I aint tried to tell you sorry for everything that I've done, but it don't matter clearly">
            Constraints
        </HeaderWithTooltip>
        
        <Dropdown multiple={true} options={getEnumValues(Licenses)} label="License (free or paid)"/>
        <Dropdown multiple={true} options={getEnumValues(HostingOptions)} label="Hosting Options"/>
        <Checkbox label="Prioritize Managed Cloud Services"/>
        <Dropdown multiple={true} options={getEnumValues(PricingModels)} label="Pricing Model"/>
    </>;
}