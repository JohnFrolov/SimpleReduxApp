import {AppStore, AsyncData, AsyncAction} from '../../AppModels';
import {FilmsActionTypes} from '../actions/ActionTypes';
import {Film} from '../Model';

enum AsyncActionStatus {
    PENDING = 'PENDING',
    FULFILLED = 'FULFILLED',
    REJECTED = 'REJECTED'
}

const defaultStore: AppStore = {
    filmsModule: {
        film: {
            isLoading: false,
            data: null,
            error: null
        }
    }
}
export const filmReducer = (
    store: AppStore = defaultStore,
    action: AsyncAction<AsyncData<Film>>
): AppStore => {
    if (action.type === `${FilmsActionTypes.GET_FILMS}_${AsyncActionStatus.PENDING}`) {
        return {
            ...store,
            filmsModule: {
                ...store.filmsModule,
                film: {
                    isLoading: true,
                    data: null,
                    error: null
                }
            }
        } 
    }

    if (action.type === `${FilmsActionTypes.GET_FILMS}_${AsyncActionStatus.FULFILLED}`) {
        return {
            ...store,
            filmsModule: {
                ...store.filmsModule,
                film: {
                    isLoading: false,
                    data: {
                        ...action.payload.data
                    },
                    error: null
                }
            }
        } 
    }

    if (action.type === `${FilmsActionTypes.GET_FILMS}_${AsyncActionStatus.REJECTED}`) {
        return {
            ...store,
            filmsModule: {
                ...store.filmsModule,
                film: {
                    isLoading: false,
                    data: null,
                    error: action.payload.error
                }
            }
        } 
    }

    return store;
}
