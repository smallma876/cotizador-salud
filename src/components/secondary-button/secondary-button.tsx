import './secondary-button.scss'
import * as mi from '@material-ui/icons'

const SecondaryButton = () => {
    return (
        <div className="secondarybutton">
            <button className="secondarybutton__button">
                <span>CONTINUAR</span>
                <div className="secondarybutton__icon">
                    <mi.ArrowForwardIosSharp fontSize="small" color="inherit"/>
                </div> 
            </button>
            
            
        </div>
    )
}

export default SecondaryButton
