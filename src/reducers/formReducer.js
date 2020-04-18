import {
    NAME_ACTION,
    SSN_ACTION,
    ADDRESS_ACTION,
    MS_ACTION,
    STEP2_ACTION,
    STEP3_ACTION,
    STEP4_ACTION
} from '../actions/formActions'

import { combineReducers } from 'redux';


const formState = {
    step1: {
        name:{
            firstName:'',
            middleName:'',
            lastName:''
        },
        address:{
            street:'',
            city:'',
            state:'',
            zip:''
        },
        maritalStatus:'',
        ssn:''
    },

    step2:{
        multiCheckBox:''
    },

    step3:{
        qualifyingChildren:'',
        dependents:'',
        totalDependents:''
    },

    step4:{
        otherIncome:'',
        deductions:'',
        extraWithholding:''
    }
}

const screenState = {
    screen: 0
}


function formReducer(statex = formState, action){
    switch(action.type){

        case NAME_ACTION:
            const {firstName, middleName, lastName} = action;
            return {
                ...statex,
                'step1':{
                    ...statex['step1'],
                    'name':{
                        firstName: firstName,
                        middleName: middleName === 'undefined' ? '': middleName,
                        lastName: lastName
                    }
                }
            }

        case SSN_ACTION:
            const ssn = action.ssn;
            return{
                ...statex,
                'step1':{
                    ...statex['step1'],
                    ssn: ssn
                }
            }

        case ADDRESS_ACTION:
            const {street, city, state, zip} = action;
            return{
                ...statex,
                'step1':{
                    ...statex['step1'],
                    'address':{
                        street: street,
                        city: city,
                        state: state,
                        zip: zip
                    }
                }
            }

            case MS_ACTION:
                const ms = action.ms;
                return {
                    ...statex,
                    'step1':{
                        ...statex['step1'],
                        maritalStatus: ms
                    }
                }
            
            case STEP2_ACTION:
                return {
                    ...statex,
                    'step2':{
                        ...statex['step2'],
                        multiCheckBox: action.mulJob
                    }
                }

            case STEP3_ACTION:
                const {
                    qualifyingChildren, 
                    dependents, 
                    totalDependents
                    } = action;
                return {
                    ...statex,
                    'step3':{
                        qualifyingChildren: qualifyingChildren, 
                        dependents: dependents, 
                        totalDependents: totalDependents
                    }
                }

            case STEP4_ACTION:
                const {
                    otherIncome,
                    deductions,
                    extraWithholding
                } = action;

                return {
                    ...statex,
                    'step4':{
                        otherIncome: otherIncome,
                        deductions: deductions,
                        extraWithholding: extraWithholding
                    }
                }

    default:
        break;
    }

    return statex;
}


function screenReducer(state=screenState, action){
    return state;
}


export default combineReducers({
    screenReducer,
    formReducer
})