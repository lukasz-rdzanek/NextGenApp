import { prepareResults } from "../../helpers/prepareResults";
import { RESULTS_NO_MATCHED_TEXT, RESULTS_TITLE_TEXT } from "../../shared/constants";

import Tile from "../Tile/Tile";

import "./Results.css";

const Results = ({ entries, inputValue }: any) => {
    const filteredEntries = prepareResults(entries, inputValue);
    const filteredEntriesComponents = filteredEntries?.map(({ API, Description, Link }: any, index) => {
        return <Tile key={`${Link}_${index}`} title={API} description={Description} link={Link} />
    })

    return <div className="results">
        <h2 className="results__title">{RESULTS_TITLE_TEXT}</h2>
        {filteredEntriesComponents?.length !== 0 ?
            filteredEntriesComponents : <span className="results__noResults">{RESULTS_NO_MATCHED_TEXT}</span>}
    </div>
}

export default Results;