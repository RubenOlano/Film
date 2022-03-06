import React, { FC } from "react";
import { Box, Center, Grid, GridItem } from "@chakra-ui/react";
import GuessBadge from "../GuessBadge/GuessBadge";
import { v4 as uuid } from "uuid";
import { Movie } from "src/types/types";

interface GuessesProps {
  winState: boolean;
  guesses: string[];
  movie: Movie;
}

const Guesses: FC<GuessesProps> = ({ winState, guesses, movie }) => {
  return (
    <Center>
      <Box paddingTop={["auto", 0]}>
        <Grid
          gap={2}
          direction={["column"]}
          templateColumns={["repeat(2 fr, 2fr)", "repeat(5 fr, 2 fr)"]}
        >
          {winState && (
            <>
              {guesses.map((item) => (
                <GridItem key={uuid()}>
                  <GuessBadge guess={item} />
                </GridItem>
              ))}
              <GridItem>
                <GuessBadge color="green" guess={movie.title} />
              </GridItem>
            </>
          )}
        </Grid>
      </Box>
    </Center>
  );
};

export default Guesses;
