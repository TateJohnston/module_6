import { useState } from "react";
import { Box, Paper, Typography, ButtonGroup, Button } from "@mui/material";
import LabOne from "./LabOne";

const Labs = () => {
  const [selectedLab, setSelectedLab] = useState(0);

  const labButtonConfig = [
    { label: "Lab One", callbackFunction: () => setSelectedLab(1) },
    { label: "Lab Two", callbackFunction: () => setSelectedLab(2) },
    { label: "Lab Three", callbackFunction: () => setSelectedLab(3) },
  ];

  const labContentHandler = () => {
    switch (selectedLab) {
      case 1:
        return <LabOne />;
      case 2:
        return <Typography>Nothing here</Typography>;
      case 3:
        return <Typography>Nothing here</Typography>;
      default:
        return <Typography>No matching lab</Typography>;
    }
  };
  return (
    <Box display={"flex"} flexDirection={"column"} justifyContent={"center"}>
      <Box display={"flex"} flexDirection={"row"} justifyContent={"center"}>
        <Typography variant={"h3"}>LABS FOR MODULE 6</Typography>
      </Box>

      <Box display={"flex"} justifyContent={"center"} my={"8px"}>
        <ButtonGroup variant="contained" aria-label="Basic button group">
          {labButtonConfig.map((lab) => (
            <Button onClick={lab.callbackFunction}>{lab.label}</Button>
          ))}
        </ButtonGroup>
      </Box>

      <Box height={"400px"}>
        <Paper sx={{ height: "inherit" }}>{labContentHandler()}</Paper>
      </Box>
    </Box>
  );
};

export default Labs;
