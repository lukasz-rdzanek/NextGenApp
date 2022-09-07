import axios from "axios";

import { API_REQUEST_URL } from "../shared/constants";

export const searchApi = async () => {
    await axios(API_REQUEST_URL, {
        method: 'GET',
        headers: {
            "Access-Control-Allow-Origin": "true",
            "Content-Type": "application/json",
        }
    });
}