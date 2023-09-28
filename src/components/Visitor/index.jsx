import React, {useEffect, useState} from 'react';
import {Grid} from "@mui/material";
import Form from "../Form";
import Visitors from "../Visitors";

const Index = () => {
    const [visitors, setVisitors] = useState([]);

    useEffect(() => {
        setVisitors(JSON.parse(localStorage.getItem('visitors')) ?? []);
    }, []);

    const addVisitor =(data) =>{
        setVisitors( prevState => {
            const newData = [...prevState, data];
            localStorage.setItem('visitors', JSON.stringify(newData))
            return newData
        });
    }
    const removeVisitors =(ids) =>{
        if (ids.length){
            setVisitors( prevState =>  {
                const newVisitors = prevState.filter(item => !ids.some(id => id === item.id));
                localStorage.setItem('visitors', JSON.stringify(newVisitors));
                return newVisitors;
            })
        }

    }

    return (
        <Grid container spacing={2} sx={{marginTop: "16px"}}>
            <Grid item xs={12} md={4} lg={3}>
                <Form addVisitor={addVisitor}/>
            </Grid>
            <Grid item xs={12} md={8} lg={9}>
                <Visitors visitors={visitors} removeVisitors={removeVisitors}/>
            </Grid>
        </Grid>
    );
};

export default Index;
