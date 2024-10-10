import Typography from "@mui/material/Typography";
import {Tooltip} from "@mui/material";
import * as React from "react";

type HeaderWithTooltipProps = {
    tooltip: string | React.ReactNode;
    children: React.ReactNode
    variant?: "h5" | "button" | "caption" | "h1" | "h2" | "h3" | "h4" | "h6" | "subtitle1" | "subtitle2" | "body1" | "body2" | "overline" | "inherit" | undefined;
}

export default function HeaderWithTooltip({children, tooltip, variant = 'h5'}: HeaderWithTooltipProps) {
    
    return <Typography variant={variant} gutterBottom>
        <Tooltip
            title={tooltip}>
            <div style={{display: "inline", cursor: "help"}}>{children}</div>
        </Tooltip>
    </Typography>

}