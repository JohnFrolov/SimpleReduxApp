import axios, {AxiosPromise} from 'axios';
import {Film} from '../Model';
import {AppConfig} from '../../config';

const {isRestActive} = AppConfig;

 //i=tt3896198&apikey=498b1f02
export class FilmService {
    /**
     * 
     * Get film by title from omdbapi.com
     * @param {string} title film title.
     */
    getFilmsBy (title: string): AxiosPromise<Film> {
        return axios.get(`http://www.omdbapi.com/?t=${title}&apikey=498b1f02`);
    }
}
