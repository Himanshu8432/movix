import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";

// Make sure VITE_APP_TMDB_TOKEN is defined in your .env file
const TMDB_TOKEN = String(import.meta.env.VITE_APP_TMDB_TOKEN)
// import.meta.env.VITE_APP_TMDB_TOKEN;

const headers = {
    Authorization: "Bearer " + TMDB_TOKEN, // Include "Bearer" before the token
};

export const fetchDataFromApi = async (url, params) => {
    try {
        const { data } = await axios.get(BASE_URL + url, {
            headers,
            params,
        });
        return data;
    } catch (error) {
        console.log(error);
        return error;
    }
};
