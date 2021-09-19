import React, { useContext, useRef } from 'react'
import { AppContext } from '../context/context/context';

const useValidFormPersonal = () => {

    const { appState } = useContext(AppContext);
    const isValidDocumentTypePersonal = useRef(true);
    const isValidDocumentNumberPersonal = useRef(true);
    const isValidPaternoPersonal = useRef(true);
    const isValidNamesPersonal = useRef(true);
    const isValidMaternoPersonal = useRef(true);
    const isValidBirthDatePersonal = useRef(true);
    const isValidGenderPersonal = useRef(true);
    const isValidInsuredPersonal = useRef(true);

    const isValidFormPersonal = () => {

        isValidDocumentNumberPersonal.current = appState.documentnumber.trim()!=="";
        
        return isValidDocumentTypePersonal.current && isValidDocumentNumberPersonal.current &&
        isValidPaternoPersonal.current && isValidNamesPersonal.current && isValidMaternoPersonal.current &&
        isValidBirthDatePersonal.current && isValidGenderPersonal.current && isValidInsuredPersonal.current
    }

    return { isValidFormPersonal,isValidDocumentTypePersonal, isValidDocumentNumberPersonal,  
        isValidNamesPersonal,isValidPaternoPersonal, isValidMaternoPersonal,
        isValidBirthDatePersonal, isValidGenderPersonal, isValidInsuredPersonal}
}

export default useValidFormPersonal
