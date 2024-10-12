import Typography from "@mui/material/Typography";
import * as React from "react";
import Dropdown from "@/shared/components/Dropdown";
import {getEnumValues} from "@/shared/domain/helpers";
import {OltpOlap, RPS} from "@/databases/domain/types";
import Checkbox from "@/shared/components/Checkbox";
import Field from "@/shared/components/Field";
import {Grid2 as Grid} from "@mui/material";

const fieldStyle = {width: 100};

export default function UseCases () {
    return <>
        <Dropdown multiple={true} options={getEnumValues(OltpOlap)} label="OLTP/OLAP" />

        RPS = Rows Per Second
        
        <Grid container spacing={2}>
            <Grid size={2}>
                Insert
            </Grid>
            <Grid size={4}>
                <Dropdown small options={getEnumValues(RPS)} label="RPS" />
            </Grid>
            <Grid size={6}>
                <Checkbox label="Batch Processing" />
            </Grid>

            <Grid size={2}>
                Read
            </Grid>

            <Grid size={4}>
                <Dropdown small options={getEnumValues(RPS)} value={RPS.OneTen} label="RPS by Id" />
            </Grid>

            <Grid size={6}>
                <Dropdown small options={getEnumValues(RPS)} value={RPS.OneTen} label="RPS by Query" />
                <Field label="Row size" style={fieldStyle} />
            </Grid>

            <Grid size={2}>
                Update
            </Grid>

            <Grid size={4}>
                <Dropdown small options={getEnumValues(RPS)} value={RPS.OneTen} label="RPS" />
            </Grid>

            <Grid size={6}>
                <Checkbox label="Batch Processing" />
            </Grid>

            <Grid size={2}>
                Delete
            </Grid>
            <Grid size={4}>
                <Dropdown small options={getEnumValues(RPS)} value={RPS.LessThan1} label="RPS" />
            </Grid>
            <Grid size={6}>
                <Checkbox label="Batch Processing" />
            </Grid>
        </Grid>
    </>
}