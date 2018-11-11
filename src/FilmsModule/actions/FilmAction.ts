import {Dispatch} from 'redux';
import {FilmService} from '../service/FilmsService';
import {createAsyncActionWithMiddeleware} from '../../asyncActionHelper/actionCreator';
import {FilmsActionTypes} from '../actions/ActionTypes';

export class FilmActions {
    constructor(
        private dispatch: Dispatch,
        private service: FilmService
    ) {
        this.dispatch = dispatch;
        this.service = service
    }

    getFilmsBy (title): void {
        createAsyncActionWithMiddeleware(
            FilmsActionTypes.GET_FILMS,
            () => this.service.getFilmsBy(title),
            this.dispatch
        )
    }     
}
