import React from "react";
import {
    Card,
    CardContent, Divider, Grid2 as Grid, List, ListItem, ListItemText,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from "@mui/material";
import Typography from "@mui/material/Typography";

type DatabaseInfo = {
    category: string;
    dataStructure: string;
    bestFor: string;
    reason: string;
}

const databaseData: DatabaseInfo[] = [
    {
        category: 'Relational Databases (Structured Data)',
        dataStructure: 'Fixed schema with tables (rows and columns)',
        bestFor: 'Use cases needing strict data integrity and complex queries (e.g., financial systems)',
        reason: 'The structured format ensures consistency and efficient handling of relational data',
    },
    {
        category: 'Wide-Column Databases (Semi-Structured Data)',
        dataStructure: 'Rows with dynamic columns grouped into families',
        bestFor: 'Large-scale, write-heavy workloads (e.g., time-series data)',
        reason: 'Flexible columns allow efficient handling of variable data structures',
    },
    {
        category: 'Document Databases (Flexible Schema)',
        dataStructure: 'Schema-less, storing data as documents (e.g., JSON)',
        bestFor: 'Evolving data models (e.g., content management, web apps)',
        reason: 'Flexibility supports complex, nested data without predefined fields',
    },
    {
        category: 'Key/Value Databases (Unstructured Data)',
        dataStructure: 'Simple key-value pairs',
        bestFor: 'Fast lookups and caching (e.g., session storage)',
        reason: 'Direct key-value access optimizes speed for basic retrievals',
    },
    {
        category: 'Graph Databases',
        dataStructure: 'Nodes and edges representing entities and their relationships',
        bestFor: 'Highly connected data (e.g., social networks, recommendation engines)',
        reason: 'The graph format is ideal for traversing complex relationships',
    },
    {
        category: 'Vector Databases',
        dataStructure: 'High-dimensional vectors',
        bestFor: 'AI/ML applications requiring similarity searches (e.g., image recognition)',
        reason: 'Specialized for efficient handling of numerical vector data',
    },
];

const DataTypeTooltip = <>Data structure has the most impact on the database choice because it defines
    the primary DB model (relational, columnar, wide-column, document, graph, vector).</>


export default DataTypeTooltip;
    
function Tmp() {
    return <>Data structure has the most impact on the database choice because it defines
        the primary DB model (relational, columnar, wide-column, document, graph, vector).</>
    
    return (
        <List>
            {databaseData.map((db, index) => (
                <React.Fragment key={index}>
                    <ListItem alignItems="flex-start">
                        <ListItemText
                            primary={<Typography variant="h6">{db.category}</Typography>}
                            secondary={
                                <>
                                    <Typography variant="body2" color="textSecondary">
                                        <strong>Data Structure:</strong> {db.dataStructure}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        <strong>Best For:</strong> {db.bestFor}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        <strong>Reason:</strong> {db.reason}
                                    </Typography>
                                </>
                            }
                        />
                    </ListItem>
                    {index < databaseData.length - 1 && <Divider component="li"/>}
                </React.Fragment>
            ))}
        </List>
    );
};