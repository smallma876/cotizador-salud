import { useContext } from "react";
import { AppContext } from "../context/context/context";
import { Customer } from "../models/customer";


const useCustomer = () => {

    const { dispatch } = useContext(AppContext);

    const setCustomer = (customer:Customer) => {
       
        dispatch({type:'changeNames', payload: customer.names})
        dispatch({type:'changeDataProtection', payload: customer.dataprotection})
        dispatch({type:'changeDateBirth', payload: customer.dateofbirth})
        dispatch({type:'changeGender', payload: customer.gender})
        dispatch({type:'changeInsured', payload: customer.insured})
        dispatch({type:'changeMaternal', payload: customer.maternal})
        dispatch({type:'changeNumberDocument', payload: customer.documentnumber})
        dispatch({type:'changeNumberMobile', payload: customer.mobilenumber})
        dispatch({type:'changePaternal', payload: customer.paternal})
        dispatch({type:'changeSendNews', payload: customer.sendnews})
        dispatch({type:'changeTypeDocument', payload: customer.documenttype})
    }


    return { setCustomer }
}

export default useCustomer
