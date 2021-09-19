import React from 'react';
import './input-dropdown.scss'

type InputTextProps = {
    value: string;
    valueselect: string;
    label?: string;
    onChange(event: React.ChangeEvent<HTMLInputElement>): void;
    onChangeSelect(event: React.ChangeEvent<HTMLSelectElement>): void;
    isValid: boolean | undefined;
    texterror: string;
};

const InputDropdown = ({value, onChange, onChangeSelect, label,valueselect, isValid, texterror }: InputTextProps) => {
    
    let classModifier = !isValid? "inputdropdown--invalid":""

    return (
        <>
            <div className={`inputdropdown ${classModifier}`}>
                
                <select className="inputdropdown__select" onChange={onChangeSelect} value={valueselect}>
                    <option className="inputdropdown__option" value="dni">DNI</option>
                    <option className="inputdropdown__option" value="ce">CE</option>
                </select>
                <input  type="text" className="inputdropdown__text" placeholder=" " value={value} onChange={onChange}/>
                <label className="inputdropdown__label">{label}</label>
                
                
            </div>
            <div className="inputdropdown__error">
                {!isValid ? texterror : null}
            </div>
        </>
    )
}

export default InputDropdown
