import { Center, Image, Stack, Box, Badge } from '@chakra-ui/react';
import React, { FC } from 'react';
import Newgame from '../NewGame/NewGame'

interface WinProps {
    setWinState: React.Dispatch<React.SetStateAction<boolean>>,
    setGuesses?: React.Dispatch<React.SetStateAction<string[]>>
    poster: string,
    title: string
}

const Win: FC<WinProps> = ({ setWinState, poster, setGuesses, title }) => {
    return (
        <>
            <Center>
                <Box >
                    <Stack>
                        <Newgame setGuesses={setGuesses} setWinState={setWinState} />
                        <Badge size='sm' fontSize='3xl' colorScheme='green'>{title}</Badge>
                        <Image padding='0' fit='contain' boxSize='400px' src={poster} alt='poster' />
                    </Stack>
                </Box>
            </Center>

        </>
    );
};

export default Win;
