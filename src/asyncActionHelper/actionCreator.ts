import {Dispatch} from 'redux';
import {AxiosPromise} from 'axios';

export function createAsyncActionWithMiddeleware<TPayload>(
    type: string,
    asyncFunction: () => AxiosPromise<TPayload>,
    dispatch: Dispatch
) {

    dispatch({
        type,
        payload: asyncFunction()
    })
}
