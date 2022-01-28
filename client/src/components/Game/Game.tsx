import { Button, Box } from '@chakra-ui/react';
import React from 'react';
import { useAppDispatch, useAppSelector } from 'src/app/hooks';
import { selectMovie, setMovie } from 'src/features/movies/movieSlice';

const Game = () => {
    const movie = useAppSelector(selectMovie)
    const dispatch = useAppDispatch()

    const handleClick = () => {
        dispatch(setMovie())
    }

    return (
        <>
            {!movie?.poster ? <Box p={12} justifyContent='center' alignItems='end' height='100vh'><Button colorScheme='teal' size='lg' onClick={handleClick}>New Game</Button></Box> :
                <img src={movie.poster} alt='poster' />
            }
        </>
    );
};

export default Game;
