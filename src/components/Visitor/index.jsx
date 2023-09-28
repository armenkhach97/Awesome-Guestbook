import React, {useEffect, useState} from 'react';
import {Grid} from "@mui/material";
import Form from "../Form";
import Visitors from "../Visitors";

const Index = () => {
    const [visitors, setVisitors] = useState();

    useEffect(() => {
        setVisitors(JSON.parse(localStorage.getItem('visitors')) ?? []);
    }, []);

    const addVisitor =(data) =>{
        console.log(data);
    }

    const removeVisitors =(ids) =>{
        console.log(ids);
    }

    return (
        <Grid container spacing={2}>
            <Grid item xs={3}>
                <Form addVisitor={addVisitor}/>
            </Grid>
            <Grid item xs={9}>
                <Visitors visitors={visitors} removeVisitors={removeVisitors}/>
            </Grid>
        </Grid>
    );
};

export default Index;