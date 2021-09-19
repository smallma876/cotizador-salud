export type ActionType = 
| { type: 'changeNumberDocument', payload: string}
| { type: 'changeTypeDocument', payload: string}
| { type: 'changeDateBirth', payload: string}
| { type: 'changeNumberMobile', payload: string}
| { type: 'changeDataProtection', payload: boolean}
| { type: 'changeSendNews', payload: boolean}
| { type: 'changeNames', payload: string}
| { type: 'changePaternal', payload: string}
| { type: 'changeMaternal', payload: string}
| { type: 'changeGender', payload: string}
| { type: 'changeInsured', payload: string}
| { type: 'changeNamesTitular', payload: string}
| { type: 'changeIsValidFormHome', payload: boolean}
| { type: 'changeIsValidFormPersonal', payload: boolean}