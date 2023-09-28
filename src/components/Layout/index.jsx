import React from 'react';
import AppBar from "../AppBar";
import { Container } from "@mui/material";
import Visitor from "../Visitor";

const Index = () => {
    return (
        <div>
            <div>
                <AppBar />
            </div>
            <Container maxWidth={false}>
                <Visitor />
            </Container>
        </div>
    );
};

export default Index;