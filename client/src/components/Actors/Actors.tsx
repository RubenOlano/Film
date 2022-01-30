import { Image, Text, Center, Box, Stack } from '@chakra-ui/react';
import React, { FC } from 'react';
import { Actor } from '../../types/types'

interface actorProp {
    actor: Actor
}

const Actors: FC<actorProp> = ({ actor }) => {
    return (
        <>
            <Center >
                <Box>
                    <Stack align='center'>
                        <Text fontSize='xl'>{actor.name}</Text>
                        <Image alt={actor.name} boxSize='150px' fit='contain' src={actor.image} />
                    </Stack>
                </Box>
            </Center>
        </>
    );
};

export default Actors;
