import React, { FC } from 'react';
import { Box, Input, Grid, Text, GridItem } from '@chakra-ui/react';
import { CopyIcon, CheckIcon } from '@chakra-ui/icons';
import GuessBadge from '../GuessBadge/GuessBadge';
import Win from '../Win/Win';
import { v4 as uuid } from 'uuid'
import { useClipboard } from '@chakra-ui/react';
import { Movie } from 'src/types/types';

interface PosterProps {
    handleSubmit: (event: React.ChangeEvent<HTMLFormElement>) => void
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    winState: boolean
    movie: Movie
    guess: string
    setGuesses: React.Dispatch<React.SetStateAction<string[]>>
    guesses: string[]
    setWinState: React.Dispatch<React.SetStateAction<boolean>>
    setGuess: React.Dispatch<React.SetStateAction<string>>
}

const Poster: FC<PosterProps> = ({ handleSubmit, handleChange, winState, movie, guess, guesses, setGuesses, setWinState, setGuess }) => {
    const { onCopy, hasCopied } = useClipboard(movie.year + ": " + (guesses.map(_item => '🟥').join(' ') + ' 🟩'))

    return (
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
                    {guesses.map(item => <GridItem key={uuid()}><GuessBadge setGuess={setGuess} guess={item} /></GridItem>)}
                </Grid>
            )}
        </Box>
    );
};

export default Poster;
