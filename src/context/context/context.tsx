import { createContext } from "react";
import { IAppInitialValue } from "../../interfaces/interfaces";
import { ActionType } from "../actions/actions";

export type AppContextProps = {
    appState: IAppInitialValue;
    dispatch: React.Dispatch<ActionType>
}

export const AppContext = createContext({} as AppContextProps)