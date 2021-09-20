export interface IAppInitialValue {
    documenttype: string;
    documentnumber: string;
    dateofbirth: string;
    mobilenumber: string;
    dataprotection: boolean;
    sendnews: boolean;
    names:string;
    namestitular: string;
    paternal:string;
    maternal:string;
    gender:string;
    insured: string;
    isValidFormHome: boolean;
    isValidFormPersonal: boolean;
    planselected:string;
}

export interface IFieldsHomeValidValue{

    isValidDocumentType?: boolean;
    isValidDocumentNumber?: boolean;
    isValidMobileNumber?: boolean;
    isValidDate?: boolean;
    isValidDataProtection?: boolean;
    isValidInsured?: boolean;
    isValidFormHome?:boolean;
}

export interface IPlan{

    title: string;
    coin: string;
    amount: string;
    period: string;
    value: string;
    name: string;
}