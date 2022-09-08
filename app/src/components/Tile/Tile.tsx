import "./Tile.css";

const Tile = ({ title, description, link }: any) => {
    return (
        <div className="tile">
            <h2 className="tile__title">
                <a className="tile__link" href={link} target="_blank" rel="noreferrer">{title}</a>
            </h2>
            <span className="tile__description">{description}</span>
        </div>
    )
}

export default Tile;