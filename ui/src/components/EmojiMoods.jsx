import { Typography, Box, Button } from "@mui/material";
import { useState } from "react";

const EmojiMoods = () => {
  //var state
  const moodList = ["happy", "sad", "angry"];
  const [mood, setMood] = useState(moodList[0]);
  // fn
  const moodDisplayHandler = () => {
    switch (mood) {
      case moodList[0]:
        return <>😊</>;

      case moodList[1]:
        return <>😢</>;

      case moodList[2]:
        return <>😡</>;

      default:
        return <>😐</>;
    }
  };

  const updateMood = () => {
    const moodIndexRandom =
      moodList[Math.floor(Math.random() * moodList.length)];
    setMood(moodIndexRandom);
  };
  //return

  return (
    <Box>
      <Typography>My Emoji mood is: {moodDisplayHandler()}</Typography>
      <Button onClick={updateMood} variant="contained">
        Change Mood
      </Button>
    </Box>
  );
};

export default EmojiMoods;
