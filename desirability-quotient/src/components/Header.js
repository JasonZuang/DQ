import React from 'react';
import {Typography,Grid} from '@material-ui/core';

function Header(){
 
    return(
        <Grid container spacing={12}>
            <Grid item xs={12} align='center'>
                <Typography variant='h1' component='h2'>
                    Desirability Quotient
                </Typography>
            </Grid>
            <Grid item xs={12} align='center'>
                <Typography variant='subtitle1' component='h2'>
                A desirability quotient (DQ) is a total score derived from a set of standardized attributes or measurements designed to assess the desirability of a male human individual by human females. Scores from this DQ test are estimates of desirability.  
                </Typography> 
            </Grid>
        </Grid>
        
            
        
        
    )
}

export default Header;