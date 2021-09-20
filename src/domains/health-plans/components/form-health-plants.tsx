import { useContext } from "react"
import BreadCrumb from "../../../components/bread-crumb/bread-crumb"
import Cards from "../../../components/cards/cards"
import { AppContext } from "../../../context/context/context"
import { PLANS } from "../data/plans"
import './form-health-plants.scss'

const FormHealthPlants = () => {

    const {appState, dispatch} = useContext(AppContext);

    const BreadCrumbText = <div className="frmhealth__step">PASO 2 <span className="frmhealth__totalsteps">DE 7</span></div>
  
    const onChangePlans = (number:string) => {

        dispatch({type:"changePlan", payload:number})

    }

    return (
        <div className="frmhealth">
            <div className="frmhealth__breadcrumb">
                <BreadCrumb 
                    text={BreadCrumbText}
                    path="/personal-information"
                />
            </div>

            <h1 className="frmhealth__title">Elige <span className="frmhealth__highlighted">tu protección</span></h1>
            <h2 className="frmhealth__subtitle">Selecciona tu plan de salud ideal.</h2>

            <div className="frmhealth__cards">
                

                    {
                        PLANS.map( (plan) => 
                        <div className="frmhealth__cardsitem" key={plan.value}>
                            <Cards
                                selected={appState.planselected}
                                value={plan.value}
                                name={plan.name}
                                onChange={(e) => onChangePlans(e.target.value)}
                            >
                                <div className="frmhealth__plan">
                                    <div className="frmhealth__plantitle">{plan.title}</div>
                                    <div className="frmhealth__plancoin">{plan.coin} <span className="frmhealth__planamount">{plan.amount}</span></div>
                                    <div className="frmhealth__planperiod">{plan.period}</div>
                                </div>
                            </Cards>
                        </div>
                        )
                    }
                    
                
            </div>

        </div>
    )
}

export default FormHealthPlants
