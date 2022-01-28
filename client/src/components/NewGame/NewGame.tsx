import React from 'react';
import { Box, Button } from '@chakra-ui/react';
import { useAppDispatch } from 'src/app/hooks';
import { setMovie } from 'src/features/movies/movieSlice';

const NewGame = () => {
    const dispatch = useAppDispatch()

    const handleClick = () => {
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
