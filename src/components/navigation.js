import React from 'react'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';
import '../App.css'
import useMediaQuery from '@material-ui/core/useMediaQuery';


function Navigation(props){
    const matches = useMediaQuery('(max-width:420px)');

    return (
        <Grid 
        container  
        item xs={12} 
        justify="center" 
        className="navigation"  >
           
            { 
                props.prev 
                    && 
                <Link to={props.prev} style={{margin: '1%', textDecoration: 'none'}}>
                    
                    {
                        matches 
                        ?(
                            <Button variant="outlined" color="primary" size="medium" style={{width: '100px'}}>
                                PREVIOUS    
                            </Button>
                        )
                        :(
                            <Button variant="outlined" color="primary" size="large" style={{width: '100px'}}>
                                PREVIOUS    
                            </Button>
                        )
                    }


                 </Link>    
            }          

            {
                props.next
                  &&
                <Link to={props.next} style={{margin: '1%', textDecoration: 'none'}}>
                    {
                    matches
                    ?
                  (  <Button 
                        variant="outlined" 
                        color="primary" 
                        size="medium" 
                        style={{width: '100px'}}
                        onClick={() => props.action && props.dispatch(props.action)
                    }>
                            NEXT  
                    </Button>
                )
                :(
                     <Button 
                        variant="outlined" 
                        color="primary" 
                        size="large" 
                        style={{width: '100px'}}
                        onClick={() => props.action && props.dispatch(props.action)
                    }>
                            NEXT  
                    </Button>
                
                )
                }
              </Link>  
            }    
        </Grid>
    )
}

function mapStateToProps(state){
    return state;
}

export default connect(mapStateToProps)(Navigation);