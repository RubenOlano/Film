import React from 'react';
import { useAppSelector } from 'src/app/hooks';
import { selectMovie } from 'src/features/movies/movieSlice';
import Guess from '../Guess/Guess';
import NewGame from '../NewGame/NewGame';

const Game = () => {
    const movie = useAppSelector(selectMovie)
    return (
        <>
            {!movie?.poster ? <NewGame /> :
                <Guess movie={movie} />
            }
        </>
    );
};

export default Game;
