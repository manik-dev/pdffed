import Grid from '@material-ui/core/Grid';
import Navigation from '../components/navigation'
import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import {ssnData} from '../actions/formActions'
import '../App.css';

const format = (str) => {

    if(str.length>=4 && str.charAt(3) !== '-')
        str = str.substring(0,3)+"-"+str.substring(3,str.length)
    if(str.length>=7 && str.charAt(6) !== '-')
        str = str.substring(0,6)+"-"+str.substring(6,str.length)

    return str;
}

const validateNumberField = (ev, ssn, setSsn) => {
    ssn = ssn.split('-').join('');
    let ssnInp = ev.target.value.split('-').join('');
    let entering = ssn.length<ssnInp.length? true: false;

    if(ssnInp.length < 10){
        if(entering){
            let input = ssnInp.replace(ssn, '');
            if(!isNaN(input)){
                ssnInp = format(ssnInp);
                setSsn(ssnInp);
            }
            return;
        }
        setSsn(format(ev.target.value));
    }
}

function SSNComponent(props){
    const [ssn, setSsn] = useState(props.formReducer.step1.ssn);
    return(

        <Grid 
        container 
        justify="center" 
        alignItems="center" 
        className="mainGrid"
        >
            <Grid item className="gridHeading">
                <h1 className="heading">Enter Your 9-Digit Social Security Number</h1>
            </Grid>
            

            <Grid 
            container 
            item 
            key="ssn" 
            xs={12} 
            className="root" >
                <TextField 
                    className="root" 
                    label="SSN" 
                    variant="outlined" 
                    value={ssn} 
                    onChange={(ev) => validateNumberField(ev, ssn, setSsn)}
                />
            </Grid>


            <Navigation prev="/step1/name" next="/step1/address" action={ssnData(ssn)} />
      </Grid>

    )
}

function mapStateToProps(state){
    return state;
}

export default connect(mapStateToProps)(SSNComponent);