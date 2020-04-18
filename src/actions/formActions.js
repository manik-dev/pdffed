export const NAME_ACTION = "NAME_ACTION"
export const SSN_ACTION  = "SSN_ACTION"
export const ADDRESS_ACTION = "ADDRESS_ACTION"
export const MS_ACTION = "MS_ACTION"
export const STEP2_ACTION = "STEP2_ACTION"
export const STEP3_ACTION = "STEP3_ACTION"
export const STEP4_ACTION = "STEP4_ACTION"
export const DONE = "DONE"



export function nameData({firstName, middleName, lastName}){
    return {
        type: NAME_ACTION,
        firstName,
        middleName,
        lastName
    }
}

export function ssnData(ssn){
    return {
        type: SSN_ACTION,
        ssn
    }
}

export function addressData({street, city, state, zip}){
    return {
        type: ADDRESS_ACTION,
        street,
        city,
        state,
        zip
    }
}

export function msData(ms){
    return {
        type: MS_ACTION,
        ms
    }
}

export function step2Data(mulJob){
    return {
        type: STEP2_ACTION,
        mulJob
    }
}

export function done(){
    return {
        type: DONE
    }
}

export function step3Data({qualifyingChildren, dependents, totalDependents}){
    return {
        type: STEP3_ACTION,
        qualifyingChildren,
        dependents,
        totalDependents
    }
}

export function step4Data({otherIncome, deductions, extraWithholding}){
    return {
        type: STEP4_ACTION,
        otherIncome,
        deductions,
        extraWithholding
    }
}