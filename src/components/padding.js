import React from 'react'
import Grid from '@material-ui/core/Grid';


export default function Padding(props){
    return (
            /***************************
             * Added the extra padding *
             ***************************/
            Array.from({length: props.length}).map((x,i) => <Grid key={props.name+'-'+(i+1)} item xs={4}></Grid>)
        )
}