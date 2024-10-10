import {FormControl, MenuItem, Select} from "@mui/material";
import React from "react";
import {DbModels} from "../../../domain/types";

export default function DbModel () {
    return <FormControl fullWidth>
        <Select
            multiple={true}
            value={[]}>
            <MenuItem>{DbModels.Relational}</MenuItem>
            <MenuItem>{DbModels.Document}</MenuItem>
            <MenuItem>{DbModels.KeyValue}</MenuItem>
            <MenuItem>{DbModels.Columnar}</MenuItem>
            <MenuItem>{DbModels.TimeSeries}</MenuItem>
            <MenuItem>{DbModels.WideColumn}</MenuItem>
            <MenuItem>{DbModels.SearchEngine}</MenuItem>
            <MenuItem>{DbModels.Spatial}</MenuItem>
            <MenuItem>{DbModels.Graph}</MenuItem>
            <MenuItem>{DbModels.Vector}</MenuItem>
        </Select>
    </FormControl>;
}