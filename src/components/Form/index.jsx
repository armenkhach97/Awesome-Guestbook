import React from 'react';
import {Controller, useForm} from "react-hook-form";
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

const Index = ({addVisitor}) => {
    const {control, reset, register, handleSubmit, formState: {errors}, setError} = useForm();
    const onSubmit = data => {
        const visitors = JSON.parse(localStorage.getItem('visitors')) ?? [];
        const exist = visitors.some(item => item.email === data.email)
        if (exist) {
            return setError('email', {type: 'custom', message: 'Already exist'})
        }
        addVisitor({...data, id: Date.now()});
        reset();
    };

    const resetForm = () => {
        reset();
    }
    return (
        <div>
            <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                Add new visitor
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid
                    container
                    direction="column"
                    spacing={2}
                    sx={{
                        marginTop: "16px"
                    }}
                >
                    <Grid item>
                        <FormControl fullWidth>
                            <TextField
                                id="name"
                                label="Full name"
                                variant={"outlined"}
                                {...register("name")}
                            />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <FormControl fullWidth>
                            <TextField
                                required
                                id="email"
                                label="Email address"
                                variant={"outlined"}
                                {...register("email", {
                                    required: "Email is required",
                                    validate: {
                                        matchPattern: (v) =>
                                            /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
                                            "Email address must be a valid address",
                                    }
                                })}
                            />
                            {errors.email && <Typography color={"error"}>
                                {errors.email?.message}
                            </Typography>}
                        </FormControl>
                    </Grid>
                    <Grid item>
                        <Controller
                            render={({field}) => <FormControl fullWidth>
                                <InputLabel id="department-label">Department</InputLabel>
                                <Select
                                    labelId="department-label"
                                    id="department"
                                    label="Department"
                                    {...field}
                                >
                                    <MenuItem value={'marketing'}>Marketing</MenuItem>
                                    <MenuItem value={'it'}>IT</MenuItem>
                                    <MenuItem value={'sales'}>Sales</MenuItem>
                                    <MenuItem value={'management'}>Management</MenuItem>
                                </Select>
                            </FormControl>}
                            name="department"
                            defaultValue={""}
                            control={control}
                        />
                    </Grid>
                    <Grid item>
                        <Controller
                            rules={{
                                required: true,
                            }}
                            name="agree"
                            control={control}
                            defaultValue={false}
                            render={({field}) => <FormControl fullWidth>
                                <FormControlLabel
                                    control={
                                        <Checkbox {...field} checked={field.value} id={"agree"} name={"agree"}/>
                                    }
                                    label="I agree to be added to the table"/>
                            </FormControl>}
                        />
                        {errors.agree && <Typography color={"error"}>This field is required</Typography>}
                    </Grid>
                    <Grid item sx={{
                        display: "flex",
                        justifyContent: "space-between",
                    }}>
                        <Button
                            variant="outlined"
                            sx={{
                                borderColor: "#ef5742",
                                color: "#ef5742",
                                '&:hover': {borderColor: "#ef5742"}
                            }}
                            onClick={resetForm}
                        >
                            RESET FORM
                        </Button>
                        <Button
                            variant="contained"
                            type={"submit"}
                            sx={{
                                borderColor: "#ef5742",
                                backgroundColor: "#ef5742",
                                '&:hover': {backgroundColor: "#ef5742"}
                            }}
                        >
                            ADD NEW VISITOR
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </div>
    );
};

export default Index;
