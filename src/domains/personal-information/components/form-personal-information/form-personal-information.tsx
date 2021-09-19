import { FormEvent, useContext } from "react";
import { useHistory } from "react-router";
import BreadCrumb from "../../../../components/bread-crumb/bread-crumb";
import InputCheckbox from "../../../../components/input-checkbox/input-checkbox";
import InputDate from "../../../../components/input-date/input-date";
import InputDropdown from "../../../../components/input-dropdown/input-dropdown";
import InputRadio from "../../../../components/input-radio/input-radio";
import InputText from "../../../../components/input-text/input-text";
import PrimaryButton from "../../../../components/primary-button/primary-button";
import SecondaryButton from "../../../../components/secondary-button/secondary-button";
import { AppContext } from "../../../../context/context/context";
import './form-personal-information.scss'

const FormPersonalInformation = () => {

    const history = useHistory();

    const { appState, dispatch } = useContext(AppContext);

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


    const onSubmitFormPersonal = (e:FormEvent<HTMLFormElement>) => {
        
        
        e.preventDefault();
        console.log("hola");
        
        history.push('/health-plans')
    }

    console.log(appState);

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
