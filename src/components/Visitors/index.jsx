import React from 'react';
import Typography from "@mui/material/Typography";
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    { field: 'visitor', headerName: 'Visitor', width: 130 },
    { field: 'email', headerName: 'Email', width: 130 },
    { field: 'department', headerName: 'Department', width: 130 },
];

const Index = ({ visitors }) => {

    return (
        <div>
            <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
                Visitor management
            </Typography>
            <div>
                <DataGrid
                    rows={[]}
                    columns={columns}
                    checkboxSelection
                />
            </div>
        </div>
    );
};

export default Index;