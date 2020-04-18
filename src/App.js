import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { Container } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import NameComponent from './components/nameComponent'
import Welcome from './components/welcome'
import SSNComponent from './components/ssnComponent'
import AddressComponent from './components/addressComponent'
import MaritalStatusComponent from './components/maritalStatusComponent'
import {Route} from 'react-router-dom'
import PdfView from './components/pdfView';
import MultipleJobs from './components/multipleJobsComponent'
import ClaimDependents from './components/claimDependentComponent'
import OtherAdjustments from './components/otherAdjustmentComponents'

class App extends React.Component{
  classes = {
    container: { 
      backgroundColor: 'beige', 
      minHeight: '100%', 
      display:'flex'
    },
  };

  state = {
    numPages: null,
    pageNumber: 1,
  }

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  }

  render(){
    return (
      <Container maxWidth="md" style={{height: '100%'}} className="mainContainer">
        <Typography component="div" style={this.classes.container} >
            <Route path="/" exact render={() => (
                <Welcome />
            )} />

            <Route path="/pdffed/step1/name" exact render={()=>
              (
                <NameComponent />
              )
            } />

            <Route path="/pdffed/step1/ssn" exact render={()=>
              (
                <SSNComponent />
              )
            } />

            <Route path="/pdffed/step1/address" exact render={()=>
              (
                <AddressComponent />
              )
            } />

            <Route path="/pdffed/step1/ms" exact render={()=>
              (
                <MaritalStatusComponent />
              )
            } />

            <Route path="/pdffed/step2" exact render={()=>
              (
                <MultipleJobs />
              )
            } />
            
            <Route path="/pdffed/step3" exact render={()=>
              (
                <ClaimDependents />
              )
            } />

            <Route path="/pdffed/step4" exact render={()=>
              (
                <OtherAdjustments />
              )
            } />

            <Route path="/pdffed/done" exact render={()=>
              (
                <PdfView />
              )
            } />
            
        </Typography>
      </Container>
      
    );
  }
}

function mapStateToProps(state){
  return state;
}

export default connect(mapStateToProps)(App);
