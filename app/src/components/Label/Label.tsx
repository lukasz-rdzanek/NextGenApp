import "./Label.css";
interface ILabel {
    label: string;
    htmlFor: string;
}

const Label = ({ label, htmlFor }: ILabel) => {
    return <label className="label" htmlFor={htmlFor}>{label}</label>
}

export default Label;