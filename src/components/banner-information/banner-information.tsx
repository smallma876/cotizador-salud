import './banner-information.scss';
import shieldicon from './../../assets/images/png/gl_shield-20x20.png';
import mobileicon from './../../assets/images/png/gl_mobile-20x20.png'

const BannerInformation = () => {
    return (
        <div className="bannerinformation">

            <div className="bannerinformation__title">
                Seguro de 
                <span className="bannerinformation__type">Salud</span>
            </div>

            <ul className="bannerinformation__list">
                <li className="bannerinformation__benefit">
                    <img className="bannerinformation__icon" src={shieldicon} alt="icon-alt"/>
                    <span>Cómpralo de manera fácil y rápida</span>
                </li>
                <li className="bannerinformation__benefit">
                    <img className="bannerinformation__icon" src={mobileicon} alt="icon-alt"/>
                    <span>Cotiza y compra tu seguro 100% digital</span>
                </li>
                <li className="bannerinformation__benefit">
                    <img className="bannerinformation__icon" src={shieldicon} alt="icon-alt"/>
                    <span>Hasta S/.12 millones de cobertura anual</span>
                </li>
                <li className="bannerinformation__benefit">
                    <img className="bannerinformation__icon" src={mobileicon} alt="icon-alt"/>
                    <span>Más de 300 clínicas en todo el Perú</span>
                </li>
            </ul>

            <div className="bannerinformation__copyright">&#169; 2020 RIMAC Seguros y Reaseguros</div>
        </div>
    )
}

export default BannerInformation
