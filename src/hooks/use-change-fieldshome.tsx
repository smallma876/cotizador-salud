import { useContext } from 'react'
import { AppContext } from '../context/context/context';

const useChangeFieldsHome = () => {

    const { dispatch } = useContext(AppContext);

    const onChangeMobilePhone = (number:string) => {
        dispatch({type: 'changeNumberMobile',payload:number})
    }

    const onChangeNumberDocument = (number:string) => {
        dispatch({type: 'changeNumberDocument',payload:number})
    }

    const onChangeDateOfBirth = (number:string) => {
        dispatch({type: 'changeDateBirth',payload:number})
    }

    const onChangeTypeDocument = (number:string) => {
        dispatch({type: 'changeTypeDocument',payload:number})
    }

    const onChangeSendNews = (flag:boolean) => {
        dispatch({type: 'changeSendNews',payload:flag})
    }

    const onChangeDataProtection = (flag:boolean) => {
        dispatch({type: 'changeDataProtection',payload:flag})
    }


    return {onChangeMobilePhone,  onChangeNumberDocument, onChangeDateOfBirth,
        onChangeTypeDocument , onChangeSendNews, onChangeDataProtection}
}

export default useChangeFieldsHome
