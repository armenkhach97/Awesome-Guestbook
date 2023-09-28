import React from 'react';
import Typography from "@mui/material/Typography";
import {DataGrid} from '@mui/x-data-grid';
import {Button, Chip, Paper} from "@mui/material";

const columns = [
    {field: 'name', headerName: 'Visitor', width: 130 },
    {field: 'email', headerName: 'Email', width: 200, flex: 1 },
    {
        field: 'department', headerName: 'Department', width: 200,
        headerAlign: 'right',
        align:'right',
        renderCell: (params) => <Chip label={params.row.department} />
    },
];

const Index = ({visitors, removeVisitors}) => {
    const [rowSelectionModel, setRowSelectionModel] = React.useState([]);
    const removeSelectedRows = () => {
        removeVisitors(rowSelectionModel);
    }
    return (
        <div>
            <Typography variant="h4" component="div" sx={{flexGrow: 1}}>
                Visitor management
            </Typography>
            <Paper sx={{
                marginTop: "16px",
            }}>
                <Paper elevation={0} sx={{
                    paddingY: "16px"
                }}>
                    <Button
                        variant="contained"
                        color={"error"}
                        onClick={removeSelectedRows}
                        sx={{marginX: '16px'}}
                    >
                        REMOVE
                    </Button>
                </Paper>
                <DataGrid
                    rows={visitors}
                    columns={columns}
                    checkboxSelection
                    onRowSelectionModelChange={(newRowSelectionModel) => {
                        setRowSelectionModel(newRowSelectionModel);
                    }}
                    rowSelectionModel={rowSelectionModel}
                    initialState={{columns: {right: ['department']}}}
                />
            </Paper>
        </div>
    );
};

export default Index;
