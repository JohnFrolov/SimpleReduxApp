import * as React from "react";
import {Film} from '../Model';

interface Props {
    film: Film;
}

export const FilmDetails = (props: Props) => (
    <div>
        {!!props.film.Poster  && <img src={props.film.Poster}/>}
        <div>{props.film.Title}</div>
        <div>{props.film.Year}</div>
    </div>
);
