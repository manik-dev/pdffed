import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import PdfFile from '../fw4.pdf'
import pdfform from '../../node_modules/pdfform.js/pdfform'
import minipdf from '../../node_modules/pdfform.js/minipdf'
import Grid from '@material-ui/core/Grid';
import Navigation from '../components/navigation';
import { connect } from 'react-redux';

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(1, 1, 6),
    width: '50%',
    height: '90%',
    background:'beige'

  },
}));

const pdfDataLoaded = (response, formReducer) => {
  var fields = pdfform().list_fields(response);
  resetFields(fields);

  const step1 = formReducer.step1;
  const step2 = formReducer.step2;
  const step3 = formReducer.step3;
  const step4 = formReducer.step4;

  for(var field of Object.keys(fields)){
    switch(field){
      case 'f1_01':
        const name = step1.name.firstName + ' ' + step1.name.middleName;
        fields['f1_01'] = [name];
        break;
      case 'f1_02':
        const lastName = step1.name.lastName;
        fields['f1_02'] = [lastName];
        break;
      case 'f1_03':
        const street = step1.address.street;
        fields['f1_03'] = [street];
        break;
      case 'f1_04':
        var address = "";
        if(step1.address.city)
          address += step1.address.city;
        if(step1.address.state)
          address += ', ' + step1.address.state;
        if(step1.address.zip) 
          address += ', ' + step1.address.zip;

        fields['f1_04'] = [address];
        break;
      case 'f1_05':
        const ssn = step1.ssn;
        fields['f1_05'] = [ssn];
        break;
      case 'f1_06':
        fields['f1_06'] = [step3.qualifyingChildren];
        break;
      case 'f1_07':
        fields['f1_07'] = [step3.dependents];
        break;
      case 'f1_08':
        fields['f1_08'] = [step3.totalDependents];
        break;
      case 'f1_09':
        fields['f1_09'] = [step4.otherIncome];
        break;
      case 'f1_10':
        fields['f1_10'] = [step4.deductions];
        break;
      case 'f1_11':
        fields['f1_11'] = [step4.extraWithholding];
        break;
      case 'c1_1':
        var ms = [false, false, false];
        if(step1.maritalStatus === 'Single or Married filing separately')
          ms = [1, false, false];
        else if (step1.maritalStatus === 'Married filing jointly (or Qualifying widow(er))')
          ms = [false, 2, false];
        else if(step1.maritalStatus === 'Head of household')
          ms = [false, false, 3];
          fields['c1_1'] = ms;
        break;
      case 'c1_2':
        fields['c1_2'] = step2.multiCheckBox;
        break;
    default:
      break; 
    }
  }
  return fields;
}


function asyncCall(props) {

  var xhr = new XMLHttpRequest();
  xhr.open("GET", PdfFile, true);
  xhr.responseType = "arraybuffer";
  xhr.onreadystatechange = function(){
  if (xhr.readyState === 4){
    if (((xhr.status === 200) || (xhr.status === 0)) && (xhr.response)){
      xhr.onloadend = function() {
         var fields = pdfDataLoaded(this.response, props.formReducer)
         var pdfData =  pdfform(minipdf).transform(this.response, fields)
         var blob = new Blob([pdfData], {type: 'application/pdf'});
         var url = URL.createObjectURL(blob);

         var iframe = document.getElementById("pdfFrame");
         iframe.src=url
      }
    }
  }
}
xhr.send()

}

const resetFields = function(fields){
  const keys = Object.keys(fields);
  for(let key in keys){
    fields[keys[key]] = [];
  }
}



function PdfView(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    asyncCall(props)
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Grid 
    container 
    justify="center" 
    alignItems="center" 
    className="mainGrid"
    >

        <Grid item>
            <h1 className="heading">Preview your data on form</h1>
        </Grid>

        <Grid 
            container 
            item 
            xs={12} 
            className="root"
            >
                <div>
      <Button 
      variant="contained"
        size="large" 
        onClick={handleOpen}
      >
          Show Data on Actual Form  
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
        <Paper className='paper'>
        <iframe id="pdfFrame" style={{boxSsizing: 'border-box', width: '100%', height: '100%'}} title="Federal W4 Form"></iframe>
            <div id="annotation-layer"></div>

            <Box display="flex"  justifyContent='center'>
                  <Button 
                      variant="outlined" 
                      size="medium" 
                      onClick={handleClose}
                  >
                          Close  
                  </Button>
            </Box>
        </Paper>
        </Fade>
      </Modal>
    </div>
            </Grid>


        <Navigation prev="/step4" />
  </Grid>
    
  );
}

function mapStateToProps(state){
  return state;
}

export default connect(mapStateToProps)(PdfView);