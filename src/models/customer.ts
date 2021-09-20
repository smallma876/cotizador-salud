import { IAppInitialValue } from "../interfaces/interfaces";

export class Customer implements IAppInitialValue{
    documenttype: string;
    documentnumber: string;
    dateofbirth: string;
    mobilenumber: string;
    dataprotection: boolean;
    sendnews: boolean;
    names: string;
    namestitular: string;
    paternal: string;
    maternal: string;
    gender: string;
    insured: string;
    planselected: string;
    isValidFormHome: boolean;
    isValidFormPersonal: boolean;
}

