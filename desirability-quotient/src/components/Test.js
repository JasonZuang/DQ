import React, {useState} from 'react';
import {Typography,Box,Grid,TextField,FormControlLabel,FormLabel,RadioGroup,Radio,Select,Button} from '@material-ui/core';

function Test(){
    const defaultValues = {
        name : '',
        age : 0,
        height : '',
        salary:'',
        penisLength:''

    }
    const[formValues,setFormValues] = useState(defaultValues);
    const handleInputChangeName = (e) =>{
        const {names,value} = e.target;
        setFormValues({
            ...formValues,
            name:value,
        });
        console.log(formValues.name);
    }
    const handleInputChangeAge = (e) =>{
        const {age,value} = e.target;
        setFormValues({
            ...formValues,
            age:value,
        });
        console.log(formValues.age);
    }
    return(
        <>
            <Box m={2} pt={3}>
                <Grid container spacing={12}>
                    <Grid item xs={12} align='center'>
                        <Typography variant='h4'>
                            DQ Test
                        </Typography>
                    </Grid>
                <Grid item xs={12} align='center'>
                    <TextField id ="name" label = "Name" type='text' value = {formValues.name} onChange={handleInputChangeName}>
                    </TextField>
                </Grid>
                <Grid item xs={12} align='center'>
                    <TextField id='age' type='number' label='Age' 
                               inputProps={{
                                   step:'1'
                               }} value = {formValues.age} 
                               onChange = {handleInputChangeAge}>
                    </TextField>
                </Grid>
                </Grid>
            </Box>
            
            
        </>
    );
}

export default Test;