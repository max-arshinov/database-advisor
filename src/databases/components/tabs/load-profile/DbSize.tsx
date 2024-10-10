import {FormControl, TextField, Tooltip} from "@mui/material";
import * as React from "react";
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import HelpIcon from '@mui/icons-material/Help';

//https://mui.com/material-ui/material-icons/?query=question&selected=Help

const tooltops = {
    dbSize: 'Comment on DB size: can be on a single machine,...'
}

export default function DbSize() {
    return <FormControl variant="filled">
        <h2>
            Data Size
            <Tooltip style={{fontSize: '60%', color: 'gray'}} title={tooltops.dbSize}>
                <HelpIcon />
            </Tooltip>
        </h2>
        <TextField label="DB Size (GB)"/>
        <TextField label="Grow per year"/>
        <TextField label="Plan for the next years"/>
    </FormControl>
}

