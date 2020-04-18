import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import {isString} from '../validators/inputValidations'
import { connect } from 'react-redux';
import {nameData} from '../actions/formActions'
import Navigation from '../components/navigation'
import '../App.css';


const validateText = (ev, type, name, setName) => {
    let str = ev.target.value.replace(name[type], '');
    if(isString(str))
        setName({
            ...name,
            [type]: ev.target.value
        });
}


function NameComponent(props){
    const [name, setName] = useState(props.formReducer.step1.name);
    return(
        <form noValidate autoComplete="off" className="mainGrid">
            <Grid 
            container 
            justify="center" 
            alignItems="center"
            className="mainGrid"
            >
                  
                  <Grid item className="gridHeading">
                    <h1 className="heading">Let's get your Name</h1>
                  </Grid>
                  
                  {
                      Object.keys(name).map(nameObj => (
                        <Grid 
                        container 
                        item 
                        key={nameObj} 
                        xs={12} 
                        className="root" >
                            <TextField 
                                className="root" 
                                label={(nameObj.charAt(0).toUpperCase() + nameObj.substring(1,nameObj.length))} 
                                variant="outlined" 
                                value={name[nameObj]} 
                                onChange={(ev) => validateText(ev,nameObj,name,setName)}
                            />
                        </Grid>
                      ))

                  }
                 <Navigation prev="/" next="/step1/ssn" action={nameData(name)} />

                </Grid>
              </form>
    );
}


function mapStateToProps(state){
    return state;
}

export default connect(mapStateToProps)(NameComponent);