import React from 'react';
import {Typography,Grid,Box} from '@material-ui/core';

function Header(){
 
    return(
        <Grid container spacing={12}>
            
                <Grid item xs={12} align='center'>
                    <Box>
                    <Typography variant='h1' component='h2' style={{height: 115}}>
                        Desirability Quotient
                    </Typography>
                    </Box>
                </Grid>
            
            
            <Grid item xs={12} align='center'>
                <Typography variant='subtitle1' component='h2' style={{width:1000,height: 100}}>
                A desirability quotient or DQ (sometimes called "DIQ Size") is a total score derived from a set of standardized attributes or measurements designed to assess the desirability of a male human individual by human females. Scores from this DQ test are estimates of desirability and are transformed to a normal distribution.  
                </Typography> 
            </Grid>
        </Grid>
        
            
        
        
    )
}

export default Header;