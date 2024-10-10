import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Constraints from "./tabs/Constraints";
import DbModel from "./tabs/db-model/DbModel";
import Features from "./Features";
import {FormGroup} from "@mui/material";
import Typography from "@mui/material/Typography";
import UseCases from "@/databases/components/tabs/UseCases";
import QualityAttributes from "@/databases/components/QualityAttributes";

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
            style={{width: '100%'}}
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

export default function VerticalTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const tabStyle: React.CSSProperties = {alignItems: 'flex-end', textAlign: 'right'};
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
                <Tab style={tabStyle} label="Primary Info" {...a11yProps(0)} />
                <Tab style={tabStyle} label="Load Profile" {...a11yProps(1)} />
                <Tab style={tabStyle} label="Quality Attributes" {...a11yProps(2)} />
                <Tab style={tabStyle} label="Features" {...a11yProps(3)} />
                <Tab style={tabStyle} label="DB Models" {...a11yProps(4)} />
            </Tabs>
            <TabPanel label="Primary Info" value={value} index={0}>
                <Constraints/>
            </TabPanel>
            <TabPanel label="Load Profile" value={value} index={1}>
                <UseCases/>
            </TabPanel>
            <TabPanel label="Quality Attributes" value={value} index={2}>
                <QualityAttributes/>
            </TabPanel>
            <TabPanel label="Features" value={value} index={3}>
                <Features/>
            </TabPanel>
            <TabPanel label="DB Models" value={value} index={4}>
                <DbModel/>
            </TabPanel>
        </Box>
    );
}
