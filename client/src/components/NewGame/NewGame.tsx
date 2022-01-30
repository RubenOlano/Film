import React, { FC } from 'react';
import { Box, Button } from '@chakra-ui/react';
import { useAppDispatch } from 'src/app/hooks';
import { reset, setMovie } from 'src/features/movies/movieSlice';

interface GameProps {
    setWinState?: React.Dispatch<React.SetStateAction<boolean>>,
    setGuesses?: React.Dispatch<React.SetStateAction<string[]>>
}

const NewGame: FC<GameProps> = ({ setWinState, setGuesses }) => {
    const dispatch = useAppDispatch()

    const handleClick = () => {
        if (setWinState && setGuesses) {
            setWinState(false)
            setGuesses([])
        }
        dispatch(setMovie())
        dispatch(reset())
    }

    return (
        <Box p={3} paddingTop={12} justifyContent='center' alignItems='end'>
            <Button colorScheme='teal' size='lg' onClick={handleClick}>
                New Game
            </Button>
        </Box>
    );
};

export default NewGame;
