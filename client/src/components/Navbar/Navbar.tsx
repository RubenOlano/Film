import { Box, Text } from '@chakra-ui/react';
import React from 'react';

const Navbar = () => {
    return (
        <Box borderRadius='sm' bg='goldenrod' width='100vw' p={6}>
            <Text fontSize='6xl'>
                Filmio
            </Text>
        </Box >
    );
};

export default Navbar;
