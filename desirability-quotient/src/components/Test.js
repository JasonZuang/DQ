import React, {useState} from 'react';
import {Typography,Box,Grid,TextField,FormControlLabel,FormLabel,RadioGroup,Radio,Select,Button} from '@material-ui/core';
import "./App.css";
function Test(){
    let resultString = "";
    let dq = 0;
    const defaultValues = {
        name : '',
        age : '',
        height : '',
        salary:'',
        penisLength:'',
        bodyfat:'',

    }
    const [hasResult,setHasResult] = useState(false);
    const [DQ,setDQ] = useState(0);
    const [res,setRes] = useState("");
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
    const handleInputChangeSalary = (e) =>{
        const {salary,value} = e.target;
        setFormValues({
            ...formValues,
            salary:value,
        });
        console.log(formValues.salary);
    }
    const handleInputChangePenis = (e) =>{
        const {p,value} = e.target;
        setFormValues({
            ...formValues,
            penisLength:value,
        });
        console.log(formValues.penisLength);
    }
    const handleInputChangeBody = (e) =>{
        const {p,value} = e.target;
        setFormValues({
            ...formValues,
            bodyfat:value,
        });
        console.log(formValues.bodyfat);
    }
    const handleInputChangeHeight = (e) =>{
        const {p,value} = e.target;
        setFormValues({
            ...formValues,
            height:value,
        });
        console.log(formValues.height);
    }

    const calcAge = () =>{
        let curVal = dq;

        if(formValues.age < 18){
            dq += 0;
            return "You are underage. ";
        }
        else if(formValues.age > 18 && formValues.age < 21){
            dq += + 0.3;
            return "You are a bit too young. ";
        }
        else if(formValues.age > 21 && formValues.age < 25){
            dq += + 0.5;
            return "You are a bit on the younger side but within the desirable age range. ";
        }
        else if(formValues.age > 25 && formValues.age < 40){
            dq +=+1;
            console.log(dq+"Here");
            return "You are well within the desirable age range! ";
        }
        else{
            dq +=+0.5;
            return "You are a bit too old. ";
        }
    }
    const calcHeight = () =>{
        const curVal = dq;
        if(formValues.height < 62){
            dq +=0;
            return "You are too short to be desirable. ";
        }
        else if(formValues.height > 62 && formValues.height < 66){
            dq += + 0.5;
            return "You are short. ";
        }
        else if(formValues.height > 66 && formValues.height < 69){
            dq += +1;
            return "You are bit on the shorter side but within the desirable range. ";
        }
        else if(formValues.height > 70 && formValues.height < 72){
            dq +=+1.5;
            return "You are within the desirable height range. ";
        }
        else if(formValues.height > 72 && formValues.height < 77){
            dq +=+2;
            return "You are of incredibly desirable height! ";
        }
        else if(formValues.height > 77 && formValues.height < 80){
            dq +=+1;
            return "You are a bit too tall but with in desirable range ";
        }
        else{
            dq +=+0.5;
            return "You are way too tall. ";
        }
        
    }

    const calcSalary = () =>{
        const curVal = dq;
        if(formValues.salary < 30000){
            dq +=0;
            return "You are too poor. ";
        }
        else if(formValues.salary > 30000 && formValues.salary < 55000){
            dq +=+ 0.2;
            return "You are poor. ";
        }
        else if(formValues.salary > 55000 && formValues.salary < 75000){
            dq += + 0.5;
            return "You are a bit too poor. ";
        }
        else if(formValues.salary > 75000 && formValues.salary < 95000){
            dq += + 1;
            return "You are a bit too poor bit within the desirability range. ";
        }
        else if(formValues.salary > 95000 && formValues.salary < 120000){
            dq +=+1.5;
            return "You are within the desirability wealth range. ";
        }
        else if(formValues.salary > 120000 && formValues.salary < 200000){
            dq +=+2;
            return "You are well withing the desirability wealth range. ";
        }
        else{
            dq +=+3;
            return "You are wealthy! ";
        }
    }
    const calcPenis = () => {
        const curVal = dq;
        if(formValues.penisLength < 1){
            dq +=0 ;
            return "Your penis is too small. No one can see it. ";
        }
        else if(formValues.penisLength > 1 && formValues.penisLength < 2.5){
            dq +=+0.3;
            return "Your penis is pretty small. ";
        }
        else if(formValues.penisLength > 2.5 && formValues.penisLength < 3.5){
            dq +=+0.5;
            return "Your penis is a bit too small. ";
        }
        else if(formValues.penisLength > 3.5 && formValues.penisLength < 4.5){
            dq += +1;
            return "Your penis is small. ";
        }
        else if(formValues.penisLength > 4.5 && formValues.penisLength < 5.3){
            dq +=+1.5;
            return "Your penis size is average. ";
        }
        else if(formValues.penisLength > 5.3 && formValues.penisLength < 5.7){
            dq +=+2;
            return "Your penis size within desirable range. ";
        }
        else if(formValues.penisLength > 5.7 && formValues.penisLength < 7.9){
            dq +=+3;
            return "Your penis size perfect! ";
        }
        else{
            dq +=+2;
            return "Your penis size is a bit too large. ";
        }
    }
    const calcBodyFat = () => {
        const curVal = dq;
        if(formValues.bodyfat < 5){
            dq +=+0.3;
            return "Your are too skinny. ";
        }
        else if(formValues.bodyfat > 5 && formValues.bodyfat < 10){
            dq +=+1;
            return "Your are fit! ";
        }
        else if(formValues.bodyfat > 10 && formValues.bodyfat < 17){
            dq +=+0.7;
            return "Your have an alright body. ";
        }
        else if(formValues.bodyfat > 17 && formValues.bodyfat < 22){
            dq +=+0.5;
            return "Your have an average body. ";
        }
        else{
            dq +=0;
            return "You are too fat! ";
        }
    }
    //Penis Length, Salary = 3 / Height = 2, /Age , BodyFat = 1
    const handleSubmit = () =>{
            console.log("Submit");
            resultString += calcAge();
            console.log(dq);
            resultString += calcHeight();
            resultString += calcSalary();
            resultString += calcPenis();
            resultString += calcBodyFat();
            console.log(resultString +" "+dq);
            setHasResult(true);
            setDQ(dq.toFixed(2));
            console.log("here"+DQ);
            setRes(resultString);
    }
    const handleClear = () => {
        setHasResult(false);
        dq = 0;
        setFormValues(defaultValues);
        setDQ(dq);
        resultString="";
        setRes(resultString);
    }
    return(
        <>
            <div className='test'>
                <Box border={2} style={{width:400}}>
                    <Grid container spacing={12}>
                            <Grid item xs={12} align='center' >
                                <Typography variant='h4' >
                                    DQ Test
                                </Typography>
                            </Grid>
                            <Grid item xs={12} align='center'>
                                <TextField id ="name" label = "Name" 
                                        type='text' value = {formValues.name} 
                                        onChange={handleInputChangeName}
                                        style = {{width: 300, height:75 }}>
                                </TextField>
                            </Grid>
                            <Grid item xs={12} align='center'>
                                <TextField id='age' type='number' label='Age' 
                                        inputProps={{
                                            step:'1'
                                        }} value = {formValues.age} 
                                        onChange = {handleInputChangeAge}
                                        style = {{width: 300, height:75 }}>
                                </TextField>
                            </Grid>
                            <Grid item xs={12} align='center'>
                                <TextField id='height' type='number' label='Height (inches)' 
                                        inputProps={{
                                            step:'1'
                                        }} value = {formValues.height} 
                                        onChange = {handleInputChangeHeight}
                                        style = {{width: 300, height:75 }}>
                                </TextField>
                            </Grid>
                            <Grid item xs={12} align='center'>
                                <TextField id='salary' type='number' label='Estimated Annual Salary' 
                                            inputProps={{
                                                step:'5000'
                                            }} value = {formValues.salary} 
                                            onChange = {handleInputChangeSalary}
                                            style = {{width: 300, height:75 }}>
                                </TextField>
                                
                            </Grid>
                            <Grid item xs={12} align='center'>
                                <TextField id='penis' type='number' label='Erect Penis Length (inches)' 
                                            inputProps={{
                                                step:'0.1'
                                            }} value = {formValues.penisLength} 
                                            onChange = {handleInputChangePenis}
                                            style = {{width: 300, height:75 }}>
                                </TextField>
                            </Grid>
                            <Grid item xs={12} align='center'>
                                <TextField id='bodyfat' type='number' label='Body Fat %' 
                                            inputProps={{
                                                step:'1'
                                            }} value = {formValues.bodyfat} 
                                            onChange = {handleInputChangeBody}
                                            style = {{width: 300, height:75 }}>
                                </TextField>
                            </Grid>
                            { hasResult ? <>
                                <Grid item xs={12} align='center'>
                                    <Box sx={{m:2}} >
                                        <Button variant = "contained" 
                                                color="secondary" 
                                                onClick={handleClear}
                                                style={{}}>
                                            Clear
                                        </Button>
                                    
                                    </Box>
                                    
                                </Grid>
                            </>:<>
                                <Grid item xs={12} align='center'>
                                    <Box sx={{m:2}} >
                                        <Button variant = "contained" 
                                                color="primary" 
                                                onClick={handleSubmit}
                                                style={{}}>
                                            Submit
                                        </Button>
                                    
                                    </Box>
                                    
                                </Grid>
                            </>}
                    </Grid>
                </Box>
                { hasResult ? <>
                    {console.log(DQ)}
                    <Box border={2} style={{width:400}}>
                        <Grid container spacing={12}>
                            
                            <Grid item xs={12} align='center' >
                                <Typography variant='h3' >
                                    Your Results
                                </Typography>
                            </Grid>
                            <Grid item xs={12} align='center' >
                                <Typography variant='h4' >
                                    {formValues.name} Your dq is {DQ}/10
                                </Typography>
                            </Grid>
                            <Grid item xs={12} align='center' >
                                <Typography variant='subtitle1' >
                                    {res}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                </> :
                <>
                </>
                }
            </div>
                
            
            
            
        </>
    );
}

export default Test;