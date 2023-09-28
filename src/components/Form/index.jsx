import React from 'react';
import { useForm } from "react-hook-form";
import {
    Button,
    Checkbox,
    FormControl,
    FormControlLabel,
    Grid,
    InputLabel,
    MenuItem,
    Select,
    TextField
} from "@mui/material";
import Typography from "@mui/material/Typography";

const Index = () => {
    const { reset, register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    const resetForm = () => {
        reset();
    }

    return (
        <div>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Add new visitor
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid
                    container
                    direction="column"
                    spacing={2}
                >
                    <Grid item>
                        <FormControl fullWidth>
                            <TextField
                                id="name"
                                label="Full name"
                                variant={"outlined"}
                                {...register("name")}
                            />
                            {errors.name && <span>This field is required</span>}
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <FormControl fullWidth>
                            <TextField
                                required
                                id="email"
                                label="Email address"
                                variant={"outlined"}
                                {...register("email", { required: true })}
                            />
                            {errors.email && <span>This field is required</span>}
                        </FormControl>
                    </Grid>
                    <Grid item>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Department</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="department"
                                label="Department"
                                {...register("department")}
                            >
                                <MenuItem value={'marketing'}>Marketing</MenuItem>
                                <MenuItem value={'it'}>IT</MenuItem>
                                <MenuItem value={'sales'}>Sales</MenuItem>
                                <MenuItem value={'management'}>Management</MenuItem>
                            </Select>
                        </FormControl>
                        {errors.department && <span>This field is required</span>}
                    </Grid>
                    <Grid item>
                        <FormControlLabel control={<Checkbox {...register("agree", {required: true})} id={"agree"}/>} label="I agree to be added to the table" />
                        {errors.agree && <span>This field is required</span>}
                    </Grid>
                    <Grid item sx={{
                        display: "flex",
                        justifyContent: "space-between",
                    }}>
                        <Button variant="outlined" sx={{borderColor: "#ef5742", color:"#ef5742"}} onClick={resetForm}>RESET FORM</Button>
                        <Button variant="contained" type={"submit"} sx={{borderColor: "#ef5742", backgroundColor: "#ef5742"}}>ADD NEW VISITOR</Button>
                    </Grid>
                </Grid>

            </form>
        </div>
    );
};

export default Index;