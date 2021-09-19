import { IAppInitialValue } from "../../interfaces/interfaces";
import { ActionType } from "../actions/actions";

export const appReducer = (state: IAppInitialValue, action: ActionType) => {
  switch (action.type) {
    case "changeNumberDocument":
      return {
        ...state,
        documentnumber: action.payload,
      };
    case "changeTypeDocument":
      return {
        ...state,
        documenttype: action.payload,
      };
    case "changeDateBirth":
      return {
        ...state,
        dateofbirth: action.payload,
      };
    case "changeNumberMobile":
      return {
        ...state,
        mobilenumber: action.payload,
      };
    case "changeDataProtection":
      return {
        ...state,
        dataprotection: action.payload,
      };
    case "changeSendNews":
      return {
        ...state,
        sendnews: action.payload,
      };
    case "changeNames":
      return {
        ...state,
        names: action.payload,
      };

    case "changePaternal":
      return {
        ...state,
        paternal: action.payload,
      };

    case "changeMaternal":
      return {
        ...state,
        maternal: action.payload,
      };

    case "changeGender":
      return {
        ...state,
        gender: action.payload,
      };
      case "changeInsured":
        return {
          ...state,
          insured: action.payload,
        };
        case "changeNamesTitular":
          return {
            ...state,
            namestitular: action.payload,
          };
    default:
      break;
  }

  return state;
};
