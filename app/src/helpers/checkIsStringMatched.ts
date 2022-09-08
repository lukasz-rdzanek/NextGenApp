export function checkIsStringMatched(base: string, valueToCheck: string) {
    return valueToCheck &&
        (base?.includes(valueToCheck)
            || base?.includes(valueToCheck.toLowerCase())
            || base?.includes(valueToCheck.charAt(0).toUpperCase() + valueToCheck.slice(1)));
}