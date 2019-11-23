import axios, {AxiosPromise} from 'axios';
import {Film} from '../Model';

export class FilmService {
    /**
     * 
     * Get film by title from omdbapi.com
     * @param {string} title film title.
     */
    getFilmsBy (title: string): AxiosPromise<Film> {
        return axios.get(`http://www.omdbapi.com/?t=${title}&apikey=${process.env.API_KEY}`);
    }
}
