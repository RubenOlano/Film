import React, { FC } from 'react';
import { Box, Button } from '@chakra-ui/react';
import { useAppDispatch } from 'src/app/hooks';
import { setMovie } from 'src/features/movies/movieSlice';

interface GameProps {
    setWinState?: React.Dispatch<React.SetStateAction<boolean>>
}

const NewGame: FC<GameProps> = ({ setWinState }) => {
    const dispatch = useAppDispatch()

    const handleClick = () => {
        if (setWinState)
            setWinState(false)
        dispatch(setMovie())
    }

    return (
        <Box p={12} justifyContent='center' alignItems='end' height='100vh'>
            <Button colorScheme='teal' size='lg' onClick={handleClick}>
                New Game
            </Button>
        </Box>
    );
};

export default NewGame;
