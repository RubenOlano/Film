import { Badge } from '@chakra-ui/react';
import React, { FC } from 'react';

interface BadgeProps {
    guess: string
}

const GuessBadge: FC<BadgeProps> = ({ guess }) => {
    return (
        <Badge colorScheme='red'>
            {guess}
        </Badge>
    );
};

export default GuessBadge;
