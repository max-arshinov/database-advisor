import * as React from "react";
import DbSize from "./DbSize";
import {Button, Checkbox, Divider, Tooltip} from "@mui/material";

export default function LoadProfile () {
    return <div>
         <p>OLAP/OLTP</p>

        <br/><br/>
        <DbSize/>

        <br/><br/>
        <h2>Load Profile</h2>
        Write-heavy <Checkbox title="Write-heavy"/>
        Order By
        <br/>
        Batch <Checkbox title="Write in batches"/>
        Delete
        Updates <Checkbox title="Updates"/>
        BI processing
        Read-heavy / By Key / By Query
        Retention Policy
        <br/><br/>

        <Divider/>
        <Tooltip title="Delete">
            <Button>123</Button>
        </Tooltip>
        DB Size
        Read/Write
    </div>
}