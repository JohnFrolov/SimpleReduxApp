import * as React from "react";
import * as ReactDOM from "react-dom";
import {Provider} from 'react-redux'
import {FilmSearchEngine} from "./FilmsModule/components/FilmSearchEngine";
import {store} from './store/store';

ReactDOM.render(
    <Provider store={store}>
        <FilmSearchEngine />
    </Provider>,
    document.getElementById("app")
);
module.hot.accept();

document.getElementById('root')