import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Navigation from '../components/navigation'
import Checkbox from '@material-ui/core/Checkbox';
import {step2Data} from '../actions/formActions'
import { connect } from 'react-redux';


function MultipleJobs(props){
    const [mulJob, setMulJob] = useState(props.formReducer.step2.multiCheckBox);

    return (
        <Grid 
        container 
        justify="center" 
        alignItems="center" 
        className="mainGrid"
        >
            <Grid item className="gridHeading">
                <h1 className="heading">Multiple Jobs or Spouse Works</h1>
            </Grid>

            <Grid item className="wording">
                <h4 >
                If there are only two jobs total, you may check this box. Do the same on Form W-4 for the other job. This option
is accurate for jobs with similar pay; otherwise, more tax than necessary may be withheld
                <span>
                <Checkbox
                    style={{color: '#3f51b5', '&$checked':{color: 'green'} }}
                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                    onChange={(ev) => setMulJob(ev.target.checked ?'1' :'Off')}
                 />
                </span>
                </h4>
            </Grid>

            <Navigation prev="/step1/ms" next="/step3" action={step2Data(mulJob)}/>

        </Grid>
    )
}

function mapStateToProps(state){
    return state;
}

export default connect(mapStateToProps)(MultipleJobs);