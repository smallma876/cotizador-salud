import checkmark from './../../assets/images/png/gl_correct.png'
import './cards.scss'

interface ICardsProps {
    children: JSX.Element | JSX.Element[],
    selected: string,
    value:string,
    name:string,
    onChange(event: React.ChangeEvent<HTMLInputElement>): void;
} 

const Cards = ({ children, selected, value, name, onChange}: ICardsProps) => {
    
    let isSelected = value === selected;
    let classSelectedModifier = isSelected?"customcards--selected":""
    
    return (
        <div className={`customcards ${classSelectedModifier}`}>
            <label className="customcards__label">
                <input 
                    type="radio" 
                    className="customcards__input" 
                    name={name}
                    value={value}
                    checked={value === selected}
                    onChange={onChange}
                />
                <img src={checkmark} className="customcards__checkmark" />
                <div className="customcards__children">
                    { children }
                </div>
                
                      
            </label>
            
        </div>
    )
}

export default Cards
