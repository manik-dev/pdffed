import React from 'react';
import Grid from '@material-ui/core/Grid';
import Navigation from '../components/navigation'
import '../App.css'

export default function Welcome(){
    return(
        <Grid 
        container 
        justify="center"  
        alignItems="center" 
        className='mainGrid'>
        
            <Grid item xs={12}>
                <h1 className="heading">Hit Next to Get Started</h1>
            </Grid>
            
            <Navigation next="/step1/name" />
      </Grid>

    )

}