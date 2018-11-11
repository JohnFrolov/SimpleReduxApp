import {FilmsModule} from './FilmsModule/Model';

export interface AppStore {
    filmsModule: FilmsModule;
}

export interface AsyncAction<T> { 
    type: string;
    payload: T
}

export interface AsyncData<T> {
    isLoading: boolean;
    data: T;
    error: Error;
}