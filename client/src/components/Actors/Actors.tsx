import { Image } from '@chakra-ui/react';
import React, { FC } from 'react';
import { Actor } from '../../types/types'

interface actorProp {
    actor: Actor
}

const Actors: FC<actorProp> = ({ actor }) => {
    return (
        <Image boxSize='300px' fit='cover' src={actor.image} />
    );
};

export default Actors;
