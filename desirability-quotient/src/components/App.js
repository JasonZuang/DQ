import React from 'react';
import Header from "./Header";
import Test from "./Test";
import {Grid} from "@material-ui/core";

function App() {
  return (
    <>
    <Grid containter spacing={12}>
      <Grid item xs={12} align = 'center'>
        <Header/>
      </Grid>
      <Grid item xs={12} align = 'center'>
        <Test/>
      </Grid>
    </Grid>
    
    
    </>
    
  );
}

export default App;
