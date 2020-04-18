import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Navigation from '../components/navigation'
import { connect } from 'react-redux';
import {step3Data} from '../actions/formActions'
import useMediaQuery from '@material-ui/core/useMediaQuery';

const updateQualifyingChildren = (ev, type, deps) => {
    if(isNaN(
        ev.target.value.replace(deps[type],'')
    )){
        return deps;
    }

    if(ev.target.value.length >= 9)
        return deps;
 
    return {
        ...deps,
        [type]: ev.target.value
    };
}

function ClaimDependents(props){
    const [deps, setDeps] = useState(props.formReducer.step3);
    const matches = useMediaQuery('(max-width:420px)');

    return (
        <Grid 
        container 
        justify="center" 
        alignItems="center" 
        className="mainGrid"
        >
            <Grid item className="gridHeading">
                <h1 className="heading">Claim Dependents</h1>
            </Grid>

            <Grid 
                container 
                item 
                key='qualifyingChildren' 
                xs={9} 
                className="root" 
                direction="column"
                style={{marginLeft:'20%', color:'grey'}}
                >
                    <h4>Multiply the number of qualifying children under age 17 by $2,000</h4>
                    <TextField 
                        style={{width: '80%'}}
                        label='Qualifying Children Amount' 
                        variant="outlined" 
                        value={deps['qualifyingChildren']}
                        size={matches ? 'small': 'medium'}
                        onChange={ev => setDeps(updateQualifyingChildren(ev, 'qualifyingChildren', deps))}
                    />
                </Grid>

                <Grid 
                container 
                item 
                key='dependents'
                xs={9} 
                className="root" 
                direction="column"
                style={{marginLeft:'20%', color:'grey'}}
                >
                    <h4>Multiply the number of other dependents by $500</h4>
                    <TextField 
                        style={{width: '80%'}}
                        label='Number of Dependents' 
                        variant="outlined" 
                        value={deps['dependents']}
                        size={matches ? 'small': 'medium'}
                        onChange={ev => setDeps(updateQualifyingChildren(ev, 'dependents', deps))}

                    />
                </Grid>

                <Grid 
                container 
                item 
                key='totalDependents'
                xs={9} 
                className="root" 
                direction="column"
                style={{marginLeft:'20%', color:'grey'}}
                >
                    <h4>Add the amounts above and enter the total here</h4>
                    <TextField 
                        style={{width: '80%'}}
                        label='Total Amount' 
                        variant="outlined" 
                        value={deps['totalDependents']} 
                        onChange={ev => setDeps(updateQualifyingChildren(ev, 'totalDependents', deps))}
                        size={matches ? 'small' : 'medium'}
                    />
                </Grid>

            <Grid item className="wording">
            </Grid>

            <Navigation prev="/step2" next="/step4" action={step3Data(deps)}/>

        </Grid>
    )
}

function mapStateToProps(state){
    return state;
}

export default connect(mapStateToProps)(ClaimDependents);