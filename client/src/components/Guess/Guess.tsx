import { Input, Box, Grid, GridItem, Stack, Text, Center } from '@chakra-ui/react';
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
            <Stack direction={['column', 'row']}>
                <Box width={['100vw', '50vw']} p={6}>
                    <form onSubmit={handleSubmit} >
                        {!winState ? <Input autoFocus onChange={handleChange} placeholder='Guess' value={guess} /> : <Win poster={movie.poster} setWinState={setWinState} />}
                    </form>
                    <Text paddingTop={3} size='3xl'>{movie.year}</Text>
                </Box>
                <Center>
                    <Box saturate={2} shadow='2xl' p={3} width='100%' height='50vh'>
                        <Grid gap={1} templateColumns={['repeat(2, auto)', 'repeat(3, auto)']}>
                            {actorArr.map(item => <GridItem key={uuid()}><Actors actor={item} /></GridItem>)}
                        </Grid>
                    </Box>
                </Center>
            </Stack>
        </>
    )
};

export default Guess;
