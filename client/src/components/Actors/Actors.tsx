import { Image, Text, Center, Box, Stack } from '@chakra-ui/react';
import React, { FC } from 'react';
import { Actor } from '../../types/types'

interface actorProp {
    actor: Actor
}

const Actors: FC<actorProp> = ({ actor }) => {
    return (
        <>
            <Center>
                <Box>
                    <Stack>
                        <Text fontSize='xl'>{actor.name}</Text>
                        <Image alt={actor.name} boxSize='300px' fit='cover' src={actor.image} />
                    </Stack>
                </Box>
            </Center>
        </>
    );
};

export default Actors;
