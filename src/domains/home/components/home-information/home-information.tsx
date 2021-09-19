import { FormEvent, useContext } from 'react'
import { useHistory } from 'react-router'
import InputCheckbox from '../../../../components/input-checkbox/input-checkbox'
import InputDate from '../../../../components/input-date/input-date'
import InputDropdown from '../../../../components/input-dropdown/input-dropdown'
import InputText from '../../../../components/input-text/input-text'
import PrimaryButton from '../../../../components/primary-button/primary-button'
import { AppContext } from '../../../../context/context/context'
import useChangeFieldsHome from '../../../../hooks/use-change-fieldshome'
import useCustomer from '../../../../hooks/use-customer'

import useValidFormHome from '../../../../hooks/use-valid-formhome'
import { Customer } from '../../../../models/customer'
import { getCustomer } from '../../../../services/services'
import './home-information.scss'


const HomeInformation = () => {

    const history = useHistory();

    const { appState, dispatch } = useContext(AppContext);
    const { setCustomer }  = useCustomer();
   
    const { isValidFormHome,isValidDocumentType, isValidDocumentNumber,  
        isValidMobileNumber,isValidDate, isValidDataProtection,
        isValidInsured } = useValidFormHome();

    const { onChangeMobilePhone,  onChangeNumberDocument, onChangeDateOfBirth,
        onChangeTypeDocument , onChangeSendNews, onChangeDataProtection} = useChangeFieldsHome();

    const onSubmitFormHome = async (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        if(isValidFormHome()){
            let customer = new Customer();

            const url = process.env.REACT_APP_URL as string;
            customer = await getCustomer(url);
    
            setCustomer( customer );
            history.push('/personal-information')

        }else{
         
            dispatch({type:"changeIsValidFormHome",payload:false})
        }
        
    }
    

    

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
                        isValid={isValidDocumentNumber.current}
                        texterror="Complete los campos"
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
