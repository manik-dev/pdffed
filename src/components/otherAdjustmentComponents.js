import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Navigation from '../components/navigation'
import { connect } from 'react-redux';
import {step4Data} from '../actions/formActions'
import useMediaQuery from '@material-ui/core/useMediaQuery';

const updateOtherAdjustments = (ev, type, adjust) => {
    if(isNaN(
        ev.target.value.replace(adjust[type],'')
    )){
        return adjust;
    }

    if(ev.target.value.length >= 9)
        return adjust;
 
    return {
        ...adjust,
        [type]: ev.target.value
    };
}

function OtherAdjustments(props){
    const [adjust, setAdjust] = useState(props.formReducer.step4);
    const matches = useMediaQuery('(max-width:420px)');

    return (
        <Grid 
        container 
        justify="center" 
        alignItems="center" 
        className="mainGrid"
        >
            <Grid item className="gridHeading">
                <h1 className="heading">Other Adjustments</h1>
            </Grid>

            <Grid 
                container 
                item 
                key='otherIncome' 
                xs={9} 
                className="root" 
                direction="column"
                style={{marginLeft:'20%', color:'grey'}}
                >
                    <h4>
                    If you want tax withheld for other income you expect
this year that won’t have withholding, enter the amount of other income here. This may
include interest, dividends, and retirement income
                    </h4>
                    <TextField 
                        style={{width: '80%'}}
                        label='Other income (not from jobs)' 
                        variant="outlined" 
                        value={adjust['otherIncome']}
                        className="ips"
                        size={matches ? 'small': 'medium'}
                        onChange={ev => setAdjust(
                            updateOtherAdjustments(
                               ev,
                               'otherIncome',
                                adjust
                            ) 
                        )}
                    />
                </Grid>

                <Grid 
                container 
                item 
                key='deductions'
                xs={9} 
                className="root" 
                direction="column"
                style={{marginLeft:'20%', color:'grey'}}
                >
                    <h4>
                    If you expect to claim deductions other than the standard deduction
and want to reduce your withholding, use the Deductions Worksheet on page 3 and
enter the result here
                    </h4>
                    <TextField 
                        style={{width: '80%'}}
                        label='Deductions' 
                        variant="outlined" 
                        value={adjust['deductions']}
                        size={matches ? 'small': 'medium'}
                        onChange={ev => setAdjust(
                            updateOtherAdjustments(
                               ev,
                               'deductions',
                                adjust
                            ) 
                        )}
                    />
                </Grid>

                <Grid 
                container 
                item 
                key='extraWithholding'
                xs={9} 
                className="root" 
                direction="column"
                style={{marginLeft:'20%', color:'grey'}}
                >
                    <h4>Enter any additional tax you want withheld each pay period</h4>
                    <TextField 
                        style={{width: '80%'}}
                        label='Total Amount' 
                        variant="outlined" 
                        value={adjust['extraWithholding']}
                        size={matches ? 'small': 'medium'}
                        onChange={ev => setAdjust(
                            updateOtherAdjustments(
                               ev,
                               'extraWithholding',
                                adjust
                            ) 
                        )} 
                    />
                </Grid>

            <Grid item className="wording">
            </Grid>

            <Navigation prev="/pdffed/step3" next="/pdffed/done" action={step4Data(adjust)}/>

        </Grid>
    )
}

function mapStateToProps(state){
    return state;
}

export default connect(mapStateToProps)(OtherAdjustments);