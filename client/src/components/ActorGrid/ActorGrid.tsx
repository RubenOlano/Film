import React, { FC } from 'react';
import { Box, Center, Grid, GridItem } from '@chakra-ui/react'
import Actors from '../Actors/Actors'
import { v4 as uuid } from 'uuid'

interface ActorGridProps {
    actorArr: any[]
}

const ActorGrid: FC<ActorGridProps> = ({ actorArr }) => {
    return (
        <Center>
            <Box saturate={2} p={3} width='100%' height='50vh'>
                <Grid gap={1} templateColumns={['repeat(2, auto)', 'repeat(3, auto)']}>
                    {actorArr.map(item => <GridItem key={uuid()}><Actors actor={item} /></GridItem>)}
                </Grid>
            </Box>
        </Center>
    );
};

export default ActorGrid;
