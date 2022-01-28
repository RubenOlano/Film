import { Center, Image, Stack, Box } from '@chakra-ui/react';
import React, { FC } from 'react';
import Newgame from '../NewGame/NewGame'

interface WinProps {
    setWinState: React.Dispatch<React.SetStateAction<boolean>>,
    poster: string
}

const Win: FC<WinProps> = ({ setWinState, poster }) => {
    return (
        <>
            <Center>
                <Box >
                    <Stack>
                        <Newgame setWinState={setWinState} />
                        <Image padding='0' fit='contain' boxSize='400px' src={poster} alt='poster' />
                    </Stack>
                </Box>
            </Center>

        </>
    );
};

export default Win;
