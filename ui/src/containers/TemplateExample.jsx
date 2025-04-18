import { Box } from "@mui/material";
import Card from "../components/Cards";

// A component must start with a capital letter
const TemplateExample = () => {
  // var

  // fn

  // return
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      Template Example
      <Card />
    </Box>
  );
};

export default TemplateExample;
