import { API_REQUEST_URL } from "../shared/constants";

export const searchApi = async () => {
    return await fetch(API_REQUEST_URL, {
        method: 'GET',
        headers: {
            "Access-Control-Allow-Origin": "true",
            "Content-Type": "application/json",
        }
    }).then(data => data.json());
}