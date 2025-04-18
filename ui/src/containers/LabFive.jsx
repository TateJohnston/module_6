import { Typography, Box, Button } from "@mui/material";
import AddCatForm from "../components/AddCatForm";
import BigCats from "../components/BigCats";
import { cats } from "./LabTwo";
import { useState } from "react";

const LabFive = () => {
  const [data, setData] = useState(cats);
  const updateCatsList = (newObject) => {
    if (newObject?.name && newObject?.latinName) {
      const hasMatch = data.some(
        (obj) =>
          newObject.name === obj.name && newObject.latinName === obj.latinName
      );
      if (!hasMatch) {
        const copyOfCurrentData = [...data];
        copyOfCurrentData.push(newObject);
        setData(copyOfCurrentData);
      }
    }
  };
  return (
    <Box>
      <Typography variant="h5">Lab Five Content</Typography>
      <AddCatForm submitFnc={updateCatsList} />
      <BigCats data={data} />
    </Box>
  );
};

export default LabFive;
