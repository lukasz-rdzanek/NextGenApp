import { SEARCH_API_INPUT_PLACEHOLDER } from "../../shared/constants";

import "./Input.css";

const Input = ({ onBlur }: any) => (
    <input
        className="input"
        id="input"
        placeholder={SEARCH_API_INPUT_PLACEHOLDER}
        type="text"
        onBlur={onBlur}
    />
);

export default Input;