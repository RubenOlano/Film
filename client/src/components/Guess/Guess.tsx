import { Input, Box, Center } from '@chakra-ui/react';
import React, { FC, useState } from 'react';
import fuzzysort from 'fuzzysort';
import { Movie } from 'src/types/types';
import NewGame from '../NewGame/NewGame';

interface MovieProps {
    movie: Movie
}

const Guess: FC<MovieProps> = ({ movie }): JSX.Element => {
    const [guess, setGuess] = useState<string>("")

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setGuess(event.target.value)
    }

    const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!guess)
            return
        if (fuzzysort.go(guess, [movie.title])[0]?.score > -guess.length)
            alert("Correct!")
    }

    return (
        <>
            <Center p={6}>
                <Box width='60%'>
                    <form onSubmit={handleSubmit} >
                        <Input onChange={handleChange} placeholder='Guess' value={guess} />
                    </form>
                </Box>
            </Center>
            <NewGame />
        </>
    )
};

export default Guess;
