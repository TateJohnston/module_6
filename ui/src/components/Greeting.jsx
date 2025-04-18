import { Typography, Box } from "@mui/material";

const Greeting = ({ name }) => {
  return name ? (
    <Typography>Hello {name}</Typography>
  ) : (
    <Typography>Hello World</Typography>
  );
};

export default Greeting;
