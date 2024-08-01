import axios from "axios";

/**
 * creation de l'instance axios
 * nommé http que l'on pourra utiliser pour faire des requetes
 * sur l'api " "
 */
export const Http = axios.create({
    baseURL: 'http://localhost:3000/api',
});
