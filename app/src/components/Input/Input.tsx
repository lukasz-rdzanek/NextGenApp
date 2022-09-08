import { Dispatch, FocusEventHandler, SetStateAction, useRef } from "react";

import { SEARCH_API_INPUT_PLACEHOLDER } from "../../shared/constants";

import "./Input.css";

interface IInput {
    onBlur: FocusEventHandler<HTMLInputElement>;
    optionalMethod?: Dispatch<SetStateAction<boolean>>;
    optionalState?: boolean;
}

const Input = ({ onBlur, optionalMethod, optionalState }: IInput) => {
    const inputRef = useRef(null);

    const onFocus = (e: { target: { value: string; }; }) => {
        e.target.value = "";
    }

    const onChange = () => {
        if (document.activeElement === inputRef.current && optionalState && optionalMethod) {
            optionalMethod(false);
        }
    };

    return <input
        className="input"
        id="input"
        placeholder={SEARCH_API_INPUT_PLACEHOLDER}
        ref={inputRef}
        type="text"
        onBlur={onBlur}
        onFocus={onFocus}
        onChange={onChange}
    />
};

export default Input;