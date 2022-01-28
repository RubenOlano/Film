import { Input, Box, Center, Grid, GridItem, Stack } from '@chakra-ui/react';
import React, { FC, useState, useEffect } from 'react';
import fuzzysort from 'fuzzysort';
import { Movie, Actor } from 'src/types/types';
import { v4 as uuid } from 'uuid';
import NewGame from '../NewGame/NewGame';
import Win from '../Win/Win';
import Actors from '../Actors/Actors';

interface MovieProps {
    movie: Movie
}

let empty: Array<Actor> = []


const Guess: FC<MovieProps> = ({ movie }): JSX.Element => {
    const [guess, setGuess] = useState<string>("");
    const [winState, setWinstate] = useState<boolean>(false);
    const [actorArr, setActorArr] = useState<Array<Actor>>(movie.actors)

    useEffect(() => setActorArr(movie.actors), [movie]);



    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setGuess(event.target.value)
    }

    const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!guess)
            return
        if (fuzzysort.go(guess, [movie.title])[0]?.score > -guess.length + 3)
            setWinstate(true)
        else {
            setActorArr(empty)
        }
        setGuess("")
    }

    return (
        <>
            <Center p={6}>
                <Stack>
                    <Box alignContent='center' width='100%' p={6}>
                        <form onSubmit={handleSubmit} >
                            {!winState ? <Input autoFocus onChange={handleChange} placeholder='Guess' value={guess} /> : <Win />}
                        </form>
                    </Box>
                    <Box width='100%'>
                        <Grid gap={3} templateColumns='repeat(3, 1fr)'>
                            {actorArr.map(item => <GridItem key={uuid()}><Actors actor={item} /></GridItem>)}
                        </Grid>
                    </Box>
                </Stack>
            </Center>
            <NewGame setWinState={setWinstate} />
        </>
    )
};

export default Guess;
