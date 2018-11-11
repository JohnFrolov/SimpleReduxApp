import {AsyncData} from '../AppModels';

export interface Film {
    Title: string;
    Year: string;
    Poster: string;
}

export interface FilmsModule {
    film: AsyncData<Film>;
}
