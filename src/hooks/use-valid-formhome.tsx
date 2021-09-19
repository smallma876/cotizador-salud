import { useContext, useRef } from 'react'
import { AppContext } from '../context/context/context';

const useValidFormHome = () => {
    const { appState } = useContext(AppContext);
    const isValidDocumentType = useRef(true);
    const isValidDocumentNumber = useRef(true);
    const isValidMobileNumber = useRef(true);
    const isValidDate = useRef(true);
    const isValidDataProtection = useRef(true);
    const isValidInsured = useRef(true);
   

    const isValidFormHome = () => {

        isValidDocumentNumber.current = appState.documentnumber.trim()!=="";
        
        return isValidDocumentType.current && isValidDocumentNumber.current &&
                isValidMobileNumber.current && isValidDate.current && isValidDataProtection.current &&
                isValidInsured.current
    }

    return { isValidDocumentType, isValidDocumentNumber,  
             isValidMobileNumber,isValidDate, isValidDataProtection,
             isValidInsured, isValidFormHome }
}

export default useValidFormHome
