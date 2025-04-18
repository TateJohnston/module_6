import { Typography, Box } from "@mui/material";
import Greeting from "../components/Greeting";

const LabOne = () => {
  return (
    <Box>
      <Typography variant="h5">Lab One Content</Typography>
      <Greeting name={"Tate"} />
    </Box>
  );
};

export default LabOne;
