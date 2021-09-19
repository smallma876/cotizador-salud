import { FormEvent, useContext } from 'react'
import { useHistory } from 'react-router'
import InputCheckbox from '../../../../components/input-checkbox/input-checkbox'
import InputDate from '../../../../components/input-date/input-date'
import InputDropdown from '../../../../components/input-dropdown/input-dropdown'
import InputText from '../../../../components/input-text/input-text'
import PrimaryButton from '../../../../components/primary-button/primary-button'
import { AppContext } from '../../../../context/context/context'
import './home-information.scss'


const HomeInformation = () => {

    const history = useHistory();

    const { appState, dispatch } = useContext(AppContext);

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

    const onSubmitFormHome = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("hola");
        
        history.push('/personal-information')
    }
    
    console.log(appState);
    

    return (
        <div className="homeinformation">

             <h1 className="homeinformation__title">Obtén tu <span className="homeinformation__highlighted">seguro ahora</span></h1>
             <h2 className="homeinformation__subtitle">Ingresa los datos para comenzar</h2>

             <form className="homeinformation__form" onSubmit={onSubmitFormHome}>
                <div className="homeinformation__row">
                    <InputDropdown 
                        value={appState.documentnumber}
                        onChange={(e)=> onChangeNumberDocument(e.target.value)}
                        onChangeSelect={(e) => onChangeTypeDocument(e.target.value)}
                        valueselect={appState.documenttype}
                        label="Nro. de documento"
                    />
                </div>
                <div className="homeinformation__row">
                    <InputDate 
                        value={appState.dateofbirth}
                        onChange={(e)=> onChangeDateOfBirth(e.target.value)}
                        label="Fecha de nacimiento"
                    />
                </div>
                <div className="homeinformation__row">
                    <InputText 
                        value={appState.mobilenumber}
                        onChange={(e)=> onChangeMobilePhone(e.target.value)}
                        label="Celular"
                    />
                </div>
                <div className="homeinformation__row">
                    <InputCheckbox 
                        value={appState.dataprotection}
                        onChange={(e)=> onChangeDataProtection(e.target.checked)}
                        label="Acepto la Pólitica de Protección de Datos Personales y los Términos y Condiciones."
                    />
                </div>
                <div className="homeinformation__row">
                    <InputCheckbox 
                        value={appState.sendnews}
                        onChange={(e)=> onChangeSendNews(e.target.checked)}
                        label="Acepto la Política de Envío de Comunicaciones Comerciales."
                    />
                </div>
                <div className="homeinformation__row">
                    <PrimaryButton />
                </div>

             </form>   
        </div>
    )
}

export default HomeInformation
