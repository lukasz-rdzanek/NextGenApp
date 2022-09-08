import { checkIsStringMatched } from "./checkIsStringMatched";

export function prepareResults(entries: string[], inputValue: string) {
    if (entries && inputValue) {
        let elements = 0;
        const filteredEntries = entries.filter(({ API, Description, Cors }: any) => {
            const ApiMeetsTheConditions = checkIsStringMatched(API, inputValue)
                && Cors === "yes" && Description?.length < 100 && elements < 5;
            if (ApiMeetsTheConditions) {
                elements += 1;
            }
            return ApiMeetsTheConditions;
        });

        return filteredEntries;
    }
}