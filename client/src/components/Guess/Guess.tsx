import { Input, Box, Grid, GridItem, Stack, Text, Center, useClipboard } from '@chakra-ui/react';
import React, { FC, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'src/app/hooks';
import fuzzysort from 'fuzzysort';
import { Movie } from 'src/types/types';
import { CheckIcon, CopyIcon } from '@chakra-ui/icons';
import { v4 as uuid } from 'uuid';
import Win from '../Win/Win';
import Actors from '../Actors/Actors';
import { pop, selectMovie, win } from 'src/features/movies/movieSlice';
import GuessBadge from '../GuessBadge/GuessBadge';


interface MovieProps {
    movie: Movie
}



const Guess: FC<MovieProps> = ({ movie }): JSX.Element => {
    const [guess, setGuess] = useState<string>("");
    const [winState, setWinState] = useState<boolean>(false);
    const [guesses, setGuesses] = useState<string[]>([])
    const actorArr = useAppSelector(selectMovie).currActors
    const dispatch = useAppDispatch()
    const { onCopy, hasCopied } = useClipboard(movie.year + ": " + (guesses.map(_item => '🟥').join(' ') + ' 🟩'))

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
            setGuesses([...guesses, guess])
        }
        setGuess("")
    }

    return (
        <>
            <Stack direction={['column', 'row']} height={['175vh', 'auto']}>
                <Box width={['100vw', '50vw']} p={6}>
                    <form onSubmit={handleSubmit} >
                        {!winState ? <Input autoFocus onChange={handleChange} placeholder='Guess' value={guess} /> :
                            <>
                                <Win title={movie.title} poster={movie.poster} setGuesses={setGuesses} setWinState={setWinState} />
                                {!hasCopied ? <Box paddingTop={3}><CopyIcon onClick={onCopy} h={8} w={8} color='green' /></Box> : <Box paddingTop={3}><CheckIcon h={8} w={8} color='green' /></Box>}
                            </>
                        }
                    </form>
                    <Text paddingTop={3} size='3xl'>{movie.year || 'loading...'}</Text>
                    {!winState && guesses && (
                        <Grid direction={['row', 'column']} templateColumns={['repeat(2, auto)', 'repeat(auto, auto)']}>
                            {guesses.map(item => <GridItem key={uuid()}><GuessBadge guess={item} /></GridItem>)}
                        </Grid>
                    )}
                </Box>
                <Center>
                    <Box saturate={2} p={3} width='100%' height='50vh'>
                        <Grid gap={1} templateColumns={['repeat(2, auto)', 'repeat(3, auto)']}>
                            {actorArr.map(item => <GridItem key={uuid()}><Actors actor={item} /></GridItem>)}
                        </Grid>
                    </Box>
                </Center>
            </Stack>
            <Center>
                <Box paddingTop={['auto', 0]}>
                    <Grid gap={2} direction={['column', 'row']} templateColumns={['repeat(1, auto)', 'repeat(5,auto)']}>
                        {winState && <> {guesses.map(item => <GridItem key={uuid()}><GuessBadge guess={item} /></GridItem>)} <GridItem><GuessBadge color='green' guess={movie.title} /></GridItem></>}
                    </Grid>
                </Box>
            </Center>
        </>
    )
};

export default Guess;
