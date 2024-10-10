import * as React from "react";
import Dropdown from "@/shared/components/Dropdown";
import {getEnumValues} from "@/shared/domain/helpers";
import {
    CA,
    CL,
    ConsistencyModels,
    DataStructures,
    HostingOptions,
    Licenses,
    PricingModels
} from "@/databases/domain/types";
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
        <Dropdown multiple={true} options={getEnumValues(Licenses)} label="License (free or paid)"/>
        <Dropdown multiple={true} options={getEnumValues(HostingOptions)} label="Hosting Options"/>
        <Checkbox label="Prioritize Managed Cloud Services"/>
        <Dropdown multiple={true} options={getEnumValues(PricingModels)} label="Pricing Model"/>
    </>;
}