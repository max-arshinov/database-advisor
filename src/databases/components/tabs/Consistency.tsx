import * as React from "react";
import Dropdown from "@/shared/components/Dropdown";
import {getEnumValues} from "@/shared/domain/helpers";
import {CA, CL, ConsistencyModels} from "@/databases/domain/types";

const tooltips  = {
    consistency: <>TODO</>,
    tradeoffs: <>The  <a href="https://en.wikipedia.org/wiki/PACELC_theorem">PACELC theorem</a> is an extension
        to the CAP theorem. It states that in case of network partitioning (P) in a distributed computer system,
        one has to choose between availability (A) and consistency (C) (as per the CAP theorem),
        but else (E), even when the system is running normally in the absence of partitions, one has to
        choose between latency (L) and loss of consistency (C).</>,
};

export default function Consistency() {
    return <>
        <Dropdown multiple={true} options={getEnumValues(ConsistencyModels)} label="Consistency Model"/>
        <Dropdown options={getEnumValues(CL)} label="Consistency/Latency"/>
        <Dropdown options={getEnumValues(CA)} label="Consistency/Availability"/>
    </>
}