import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Constraints from "./tabs/Constraints";
import Features from "./Features";
import {Tooltip} from "@mui/material";
import Typography from "@mui/material/Typography";
import UseCases from "@/databases/components/tabs/UseCases";
import QualityAttributes from "@/databases/components/QualityAttributes";
import Consistency from "@/databases/components/tabs/Consistency";
import Data from "@/databases/components/tabs/Data";
import DataTooltip from "@/databases/components/tooltips/DataTooltip";
import ConstraintsTooltip from "@/databases/components/tooltips/ConstraintsTooltip";
import DataTypeTooltip from "@/databases/components/tooltips/ConsistencyTooltip";
import ConsistencyTooltip from "@/databases/components/tooltips/ConsistencyTooltip";

interface TabPanelProps {
    label: string;
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const {children, value, index, label, ...other} = props;

    return (
        <div
            role="tabpanel"
            style={{width: '600px'}}
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{p: 3}}>
                    <Typography gutterBottom variant="h4">{label}</Typography>
                    <Box
                        component="form"
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 2,  // Adds consistent vertical spacing between form elements
                        }}>
                        {children}
                    </Box>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const Data2 = function():React.ReactNode {
    return <Tooltip title="123">
        <span>Data</span>
    </Tooltip>;
}

const tabStyle: React.CSSProperties = {alignItems: 'flex-end', textAlign: 'right'};

type VerticalTabProps = {
    index: number,
    label: string,
    tooltip?: React.ReactNode,
};

function VerticalTab(props: VerticalTabProps) {
    const label= (<Tooltip title={props.tooltip}>
        <span>{props.label}</span>
    </Tooltip>);
    
    return <Tab style={tabStyle} label={props.label} {...a11yProps(props.index)}/>
}

function getLabel(text: string, tooltip: React.ReactNode) {
    return <Tooltip title={tooltip} placement="left">
        <span>{text}</span>
    </Tooltip>
}

export default function VerticalTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const tabPanelStyle: React.CSSProperties = {width: '100%'};
  
        return (
        <Box sx={{flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 400}}>
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{borderRight: 1, borderColor: 'divider'}}
            >
                {/*<VerticalTab label="Data" tooltip={DataTypeTooltip()} index={0} />*/}
                <Tab style={tabStyle} label={getLabel('Data', DataTooltip)} {...a11yProps(0)} />
                <Tab style={tabStyle} label={getLabel('Constraints', ConstraintsTooltip)} {...a11yProps(1)} />
                <Tab style={tabStyle} label={getLabel('Consistency', ConsistencyTooltip)} {...a11yProps(2)} />
                <Tab style={tabStyle} label="Load Profile" {...a11yProps(3)} />
                <Tab style={tabStyle} label="Quality Attributes" {...a11yProps(4)} />
                <Tab style={tabStyle} label="Features" {...a11yProps(5)} />
            </Tabs>
            <TabPanel label="Data" value={value} index={0}>
                <Data/>
            </TabPanel>
            <TabPanel label="Constraints" value={value} index={1}>
                <Constraints/>
            </TabPanel>
            <TabPanel label="Consistency" value={value} index={2}>
                <Consistency/>
            </TabPanel>
            <TabPanel label="Load Profile" value={value} index={3}>
                <UseCases/>
            </TabPanel>
            <TabPanel label="Quality Attributes" value={value} index={4}>
                <QualityAttributes/>
            </TabPanel>
            <TabPanel label="Features" value={value} index={5}>
                <Features/>
            </TabPanel>
        </Box>
    );
}
