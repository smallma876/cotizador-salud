import './input-checkbox.scss'

type InputTextProps = {
    value: boolean;
    label?: string;
    onChange(event: React.ChangeEvent<HTMLInputElement>): void;
};

const InputCheckbox = ({value, onChange, label }: InputTextProps) => {

    

    return (
        <div className="inputcheckbox">
            
            <label className="inputcheckbox__label">
                <input 
                    type="checkbox" 
                    className="inputcheckbox__input"
                    checked={value }
                    onChange={onChange} 
                />
                <span className="inputcheckbox__text">{label}</span>
            </label>
        </div>
    )
}

export default InputCheckbox
