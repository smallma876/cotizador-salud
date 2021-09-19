import './input-date.scss';
import * as mi from '@material-ui/icons'

type InputTextProps = {
    value: string;
    label?: string;
    onChange(event: React.ChangeEvent<HTMLInputElement>): void;
};

const InputDate = ({value, onChange, label }: InputTextProps) => {
    return (
        <div className="inputdate">
            <input type="text" className="inputdate__input" placeholder="  " value={value} onChange={onChange}/>
            <label className="inputdate__label">{label}</label>
            <div className="inputdate__icon">
                <mi.CalendarToday fontSize="large" color="inherit" />
            </div>
            
        </div>
    )
}

export default InputDate
