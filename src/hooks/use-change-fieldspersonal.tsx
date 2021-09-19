import { useContext } from 'react'
import { AppContext } from '../context/context/context';

const useChangeFieldsPersonal = () => {
    
    const { dispatch } = useContext(AppContext);

    const onChangeTypeDocument = (number:string) => {
        dispatch({type: 'changeTypeDocument',payload:number})
    }

    const onChangeNumberDocument = (number:string) => {
        dispatch({type: 'changeNumberDocument',payload:number})
    }

    const onChangeNames = (number:string) => {
        dispatch({type: 'changeNames',payload:number})
    }

    const onChangePaternal = (number:string) => {
        dispatch({type: 'changePaternal',payload:number})
    }

    const onChangeMaternal = (number:string) => {
        dispatch({type: 'changeMaternal',payload:number})
    }

    const onChangeDateOfBirth = (number:string) => {
        dispatch({type: 'changeDateBirth',payload:number})
    }

    const onChangeGender = (number:string) => {

        dispatch({type: 'changeGender',payload:number})
    }

    const onChangeInsured = (number:string) => {
        dispatch({type: 'changeInsured',payload:number})
    }

    return {
        onChangeTypeDocument,onChangeNumberDocument, onChangeNames, onChangePaternal, onChangeMaternal,
        onChangeDateOfBirth, onChangeGender, onChangeInsured
    }
}

export default useChangeFieldsPersonal
