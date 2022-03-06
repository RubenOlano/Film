import { Badge } from "@chakra-ui/react";
import React, { FC } from "react";

interface BadgeProps {
  guess: string;
  color?: string;
  setGuess?: React.Dispatch<React.SetStateAction<string>>;
}

const GuessBadge: FC<BadgeProps> = ({ guess, color, setGuess }) => {
  const handleClick = () => {
    if (setGuess) setGuess(guess);
  };
  return (
    <Badge
      _hover={{ cursor: "pointer" }}
      onClick={handleClick}
      colorScheme={color || "red"}
    >
      {guess}
    </Badge>
  );
};

export default GuessBadge;
