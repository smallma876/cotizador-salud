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