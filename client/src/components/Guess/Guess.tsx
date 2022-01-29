import { Input, Box, Grid, GridItem, Stack, Text } from '@chakra-ui/react';
import React, { FC, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'src/app/hooks';
import fuzzysort from 'fuzzysort';
import { Movie } from 'src/types/types';
import { v4 as uuid } from 'uuid';
import Win from '../Win/Win';
import Actors from '../Actors/Actors';
import { pop, selectMovie, win } from 'src/features/movies/movieSlice';

interface MovieProps {
    movie: Movie
}



const Guess: FC<MovieProps> = ({ movie }): JSX.Element => {
    const [guess, setGuess] = useState<string>("");
    const [winState, setWinState] = useState<boolean>(false);
    const actorArr = useAppSelector(selectMovie).currActors
    const dispatch = useAppDispatch()

    const handleIncorrect = () => {
        if (movie?.guesses && movie.guesses > 6)
            return;
        dispatch(pop())
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setGuess(event.target.value)
    }

    const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!guess)
            return
        if (fuzzysort.go(guess, [movie.title])[0]?.score >= -guess.length + 3) {
            setWinState(true)
            dispatch(win())
        }
        else {
            handleIncorrect()
        }
        setGuess("")
    }

    return (
        <>
            <Stack>
                <Box width='100vw' p={6}>
                    <form onSubmit={handleSubmit} >
                        {!winState ? <Input autoFocus onChange={handleChange} placeholder='Guess' value={guess} /> : <Win poster={movie.poster} setWinState={setWinState} />}
                    </form>
                    <Text paddingTop={3} size='3xl'>{movie.year}</Text>
                </Box>
                <Box p={3} width='100%'>
                    <Grid gap={1} templateColumns='repeat(3, 1fr)'>
                        {actorArr.map(item => <GridItem key={uuid()}><Actors actor={item} /></GridItem>)}
                    </Grid>
                </Box>
                g            </Stack>
        </>
    )
};

export default Guess;
