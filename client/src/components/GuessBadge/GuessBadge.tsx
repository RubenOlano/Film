import { Badge } from '@chakra-ui/react';
import React, { FC } from 'react';

interface BadgeProps {
    guess: string,
    color?: string
}

const GuessBadge: FC<BadgeProps> = ({ guess, color }) => {
    return (
        <Badge colorScheme={color || 'red'}>
            {guess}
        </Badge>
    );
};

export default GuessBadge;
