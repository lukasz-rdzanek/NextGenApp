import { FormEvent, SetStateAction, useState } from "react";
import { SEARCH_API_SUBMIT_TEXT, SEARCH_API_LABEL } from "../../shared/constants";
import { searchApi } from "../../apis/searchApi";

import Input from "../../components/Input/Input";
import Label from "../../components/Label/Label";
import Submit from "../../components/Submit/Submit";
import Results from "../../components/Results/Results";

import "./FormScreen.css";

const FormScreen = () => {
    const [inputValue, setInputValue] = useState("");

    const handleOnBlur = (e: { target: { value: SetStateAction<string>; }; }) => {
        setInputValue(e.target.value);
    }

    const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    return <form className="formContainer" onSubmit={e => handleOnSubmit(e)}>
        <div className="formContainer__input">
            <Label label={SEARCH_API_LABEL} htmlFor="input" />
            <Input onBlur={handleOnBlur} />
        </div>
        <Submit text={SEARCH_API_SUBMIT_TEXT} />
        <Results />
    </form>
}

export default FormScreen;