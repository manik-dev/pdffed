import React from 'react'
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Navigation from '../components/navigation'
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import { STATES } from '../data/states'
import {addressData} from '../actions/formActions'
import {isString} from '../validators/inputValidations'
import '../App.css';


class AddressComponent extends React.Component{

    state = this.props.formReducer.step1.address

    validateCity = (name, val) =>  name === 'city' && isString(val.replace(this.state.city, ''))
    validateZip = (name, val) => name === 'zip' && !isNaN(val) && val.length<6

    handleAddr = (ev, name) => {
        if(
            this.validateCity(name, ev.target.value) 
                || 
            this.validateZip(name, ev.target.value)
                ||
            name === 'state' || name === 'street'
          ){
            this.setState({
                ...this.state,
                [name]: ev.target.value
            })
        }
    }

    render(){
        return(
            <Grid 
            container 
            justify="center" 
            alignItems="center"
            className="mainGrid"
            >
                <Grid item className="gridHeading">
                    <h1 className="heading">Address Information</h1>
                </Grid>
                <Grid 
                        container 
                        item 
                        key="street" 
                        xs={12} 
                        className="root"
                        >
                            <TextField 
                                className="root"
                                label="Street" 
                                variant="outlined" 
                                value={this.state.street} 
                                onChange={ev =>  this.handleAddr(ev, "street")}
                            />
                </Grid>

                <Grid 
                        container 
                        item 
                        key="city" 
                        xs={12} 
                        className="root"
                        >
                            <TextField 
                                className="root"
                                label="City" 
                                variant="outlined" 
                                value={this.state.city} 
                                onChange={ev =>  this.handleAddr(ev, "city")}
                            />
                </Grid>             
                <Grid 
                container 
                item 
                key="state" 
                xs={12} 
                className="root"
                >
                    <FormControl variant="filled" className="root">
                        <InputLabel>State</InputLabel>
                            <Select
                            value={this.state.state}
                            onChange={ev =>  this.handleAddr(ev, "state")}
                            >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            {
                                STATES.map(state => <MenuItem key={state} value={state}>{state}</MenuItem>)
                            }
                            </Select>
                    </FormControl>
                </Grid>
                <Grid 
                        container 
                        item 
                        key="zip" 
                        xs={12} 
                        className="root"
                        >
                            <TextField 
                                className="root"
                                label="Zip" 
                                variant="outlined" 
                                value={this.state.zip} 
                                onChange={ev =>  this.handleAddr(ev, "zip")}
                />
                </Grid>

                <Navigation prev="/pdffed/step1/ssn" next="/pdffed/step1/ms"  action={addressData(this.state)}/>
            </Grid>
        )
    }
}

function mapStateToProps(state){
    return state;
}

export default connect(mapStateToProps)(AddressComponent);