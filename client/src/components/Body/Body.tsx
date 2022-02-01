import { Stack } from '@chakra-ui/react';
import React, { FC, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'src/app/hooks';
import fuzzysort from 'fuzzysort';
import { Movie } from 'src/types/types';
import { pop, selectMovie, win } from 'src/features/movies/movieSlice';
import Poster from '../Poster/Poster';
import ActorGrid from '../ActorGrid/ActorGrid';
import Guesses from '../Guesses/Guesses';


interface MovieProps {
    movie: Movie
}



const Guess: FC<MovieProps> = ({ movie }): JSX.Element => {
    const [guess, setGuess] = useState<string>("");
    const [winState, setWinState] = useState<boolean>(false);
    const [guesses, setGuesses] = useState<string[]>([])
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
            setGuesses([...guesses, guess])
        }
        setGuess("")
    }

    return (
        <>
            <Stack direction={['column', 'row']} height={['175vh', 'auto']}>
                <Poster setGuess={setGuess} setWinState={setWinState} guesses={guesses} movie={movie} handleSubmit={handleSubmit} handleChange={handleChange} winState={winState} guess={guess} setGuesses={setGuesses} />
                <ActorGrid actorArr={actorArr} />
            </Stack>
            <Guesses guesses={guesses} movie={movie} winState={winState} />
        </>
    )
};

export default Guess;
