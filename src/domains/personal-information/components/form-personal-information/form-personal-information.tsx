import { FormEvent, useContext } from "react";
import { useHistory } from "react-router";
import BreadCrumb from "../../../../components/bread-crumb/bread-crumb";
import InputDate from "../../../../components/input-date/input-date";
import InputDropdown from "../../../../components/input-dropdown/input-dropdown";
import InputRadio from "../../../../components/input-radio/input-radio";
import InputText from "../../../../components/input-text/input-text";
import SecondaryButton from "../../../../components/secondary-button/secondary-button";
import { AppContext } from "../../../../context/context/context";
import useChangeFieldsPersonal from "../../../../hooks/use-change-fieldspersonal";
import useValidFormPersonal from "../../../../hooks/use-valid-formpersonal";
import './form-personal-information.scss'

const FormPersonalInformation = () => {

    const history = useHistory();
    const { onChangeTypeDocument,onChangeNumberDocument, onChangeNames, onChangePaternal, onChangeMaternal,
        onChangeDateOfBirth, onChangeGender, onChangeInsured }  = useChangeFieldsPersonal();

    const { isValidFormPersonal,isValidDocumentTypePersonal, isValidDocumentNumberPersonal,  
            isValidNamesPersonal,isValidPaternoPersonal, isValidMaternoPersonal,
            isValidBirthDatePersonal, isValidGenderPersonal, isValidInsuredPersonal } = useValidFormPersonal();    

    const { appState, dispatch } = useContext(AppContext);

    const onSubmitFormPersonal = (e:FormEvent<HTMLFormElement>) => {
        
        
        e.preventDefault();

        

        if(isValidFormPersonal()){
           
        
            history.push('/health-plans')

        }else{
            dispatch({type:"changeIsValidFormPersonal",payload:false})
        }
    }


    const BreadCrumbText = <div className="frmpersonal__step">PASO 1 <span className="frmpersonal__totalsteps">DE 7</span></div>
    

    return (
        <div className="frmpersonal">
            <div className="frmpersonal__breadcrumb">
                <BreadCrumb 
                    text={BreadCrumbText}
                    path="/home"
                />
            </div>
            

            <h1 className="frmpersonal__title">Hola, <span className="frmpersonal__highlighted">{appState.names}</span></h1>
            <h2 className="frmpersonal__subtitle">Valida que los datos sean correctos</h2>

            <h3 className="frmpersonal__subtitle2">Datos personales del titular</h3>


            <form onSubmit={onSubmitFormPersonal}>
                <div className="frmpersonal__row">
                    <InputDropdown 
                        value={appState.documentnumber}
                        onChange={(e)=> onChangeNumberDocument(e.target.value)}
                        onChangeSelect={(e) => onChangeTypeDocument(e.target.value)}
                        label="Nro. de documento"
                        valueselect={appState.documenttype}
                        isValid={isValidDocumentNumberPersonal.current}
                        texterror="Complete los campos"
                    />
                </div>
                <div className="frmpersonal__row">
                    <InputText 
                        value={appState.names}
                        onChange={(e)=> onChangeNames(e.target.value)}
                        label="Nombres"
                    />
                </div>
                <div className="frmpersonal__row">
                    <InputText 
                        value={appState.paternal}
                        onChange={(e)=> onChangePaternal(e.target.value)}
                        label="Apellido Paterno"
                    />
                </div>
                <div className="frmpersonal__row">
                    <InputText 
                        value={appState.maternal}
                        onChange={(e)=> onChangeMaternal(e.target.value)}
                        label="Apellido Materno"
                    />
                </div>
                <div className="frmpersonal__row">
                    <InputDate 
                        value={appState.dateofbirth}
                        onChange={(e)=> onChangeDateOfBirth(e.target.value)}
                        label="Fecha de Nacimiento"
                    />
                </div>
                <div className="frmpersonal__row">
                    <InputRadio 
                        name="sex"
                        label="Masculino"
                        value="M"
                        selected = {appState.gender}
                        onChange={(e) => onChangeGender(e.target.value)}
                    />
                </div>
                <div className="frmpersonal__row">
                    <InputRadio 
                        name="sex"
                        label="Femenino"
                        value="F"
                        selected = {appState.gender}
                        onChange={(e) => onChangeGender(e.target.value)}
                    />
                </div>

                <h3 className="frmpersonal__subtitle2">¿A quién vamos a asegurar?</h3>

                <div className="frmpersonal__row">
                    <InputRadio 
                        name="insured"
                        label="Solo a mi"
                        value="0"
                        selected = {appState.insured}
                        onChange={(e) => onChangeInsured(e.target.value)}
                    />
                </div>
                <div className="frmpersonal__row">
                    <InputRadio 
                        name="insured"
                        label="A mi y a mi familia"
                        value="1"
                        selected = {appState.insured}
                        onChange={(e) => onChangeInsured(e.target.value)}
                    />
                </div>
                <div className="frmpersonal__row frmpersonal__right">
                    <SecondaryButton />
                </div>
            </form>
        </div>
    )
}

export default FormPersonalInformation
