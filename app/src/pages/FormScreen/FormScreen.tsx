import { FormEvent, SetStateAction, useEffect, useState } from "react";
import { SEARCH_API_SUBMIT_TEXT, SEARCH_API_LABEL } from "../../shared/constants";
import { searchApi } from "../../apis/searchApi";

import Input from "../../components/Input/Input";
import Label from "../../components/Label/Label";
import Submit from "../../components/Submit/Submit";
import Results from "../../components/Results/Results";

import "./FormScreen.css";

const FormScreen = () => {
    const [inputValue, setInputValue] = useState("");
    const [entries, setEntries] = useState([]);
    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        if (inputValue?.length) {
            searchApi()
                .then(results => {
                    const allEntries = results?.entries;
                    if (allEntries) {
                        setEntries(allEntries);
                    }
                });
        }
    }, [inputValue?.length]);

    const handleOnBlur = (e: { target: { value: SetStateAction<string>; }; }) => {
        setInputValue(e.target.value);
    }

    const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitted(true);
    }

    return <form className="formContainer" onSubmit={e => handleOnSubmit(e)}>
        <div className="formContainer__input">
            <Label label={SEARCH_API_LABEL} htmlFor="input" />
            <Input onBlur={handleOnBlur} optionalMethod={setIsSubmitted} optionalState={isSubmitted} />
        </div>
        <Submit text={SEARCH_API_SUBMIT_TEXT} />
        {!!entries?.length &&
            inputValue &&
            isSubmitted &&
            <Results entries={entries} inputValue={inputValue} />}
    </form>
}

export default FormScreen;