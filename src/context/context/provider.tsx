import { useReducer } from 'react';
import { IAppInitialValue } from '../../interfaces/interfaces';
import { appReducer } from '../reducer/reducer';
import { AppContext } from './context';

const INITIAL_STATE: IAppInitialValue = {
    documentnumber: "",
    documenttype: "dni",
    dateofbirth: "",
    mobilenumber: "",
    dataprotection: false,
    sendnews: false,
    names: "",
    paternal: "",
    maternal:"",
    gender:"",
    insured:"",
    namestitular:"",

    isValidFormHome: true,
    isValidFormPersonal: true
}

interface props {
    children: JSX.Element | JSX.Element[]
}

export const AppProvider = ({ children}: props) => {


    const [appState, dispatch] = useReducer(appReducer, INITIAL_STATE )


    return (
        <AppContext.Provider value={{
            appState,
            dispatch
        }}>
            { children }
        </AppContext.Provider>
    )
}