import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Navigation from '../components/navigation'
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import { connect } from 'react-redux';
import {msData} from '../actions/formActions'
import '../App.css';


function MaritalStatusComponent(props){
    const [ms, setMs] = useState(props.formReducer.step1.maritalStatus);
    const msStatus = {
        si: 'Single or Married filing separately',
        ma: 'Married filing jointly (or Qualifying widow(er))',
        hh: 'Head of household'
    }
    return (
        <Grid 
        container 
        justify="center" 
        alignItems="center" 
        className="mainGrid"
        >

            <Grid item className="gridHeading">
                <h1 className="heading">What's your Marital Status?</h1>
            </Grid>

            <Grid 
                container 
                item 
                key="state" 
                xs={12} 
                className="root"
                >
                    <FormControl variant="filled" className="root">
                        <InputLabel>Marital Status</InputLabel>
                            <Select
                            value={ms}
                            onChange={ev =>  setMs(ev.target.value)}
                            >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            {
                                Object
                                .keys(msStatus)
                                .map(
                                    status => <MenuItem key={status} value={msStatus[status]}>{msStatus[status]}</MenuItem>
                                )
                            }
                            </Select>
                    </FormControl>
                </Grid>


            <Navigation prev="/step1/address" next="/step2" action={msData(ms)}/>
      </Grid>
    )

}

function mapStateToProps(state){
    return state;
}

export default connect(mapStateToProps)(MaritalStatusComponent);