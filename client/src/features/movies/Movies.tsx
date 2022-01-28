import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { Actor } from '../../types/types';
import { setMovie, selectMovie } from './movieSlice';
import { v4 as uuidv4 } from 'uuid';
import React from 'react';

const Movies = () => {
    const movie = useAppSelector(selectMovie)
    const dispatch = useAppDispatch()

    return (
        <div>
            {movie?.title}
            {movie.poster ? <img src={movie.poster} alt='poster' /> : null}
            <button onClick={() => dispatch(setMovie())}>New Game</button>
            {movie.actors.length ? movie.actors.map((item: Actor): JSX.Element => <p key={uuidv4()}>{item.name}</p>) : null}
        </div>
    )
}

export default Movies