import { Typography, Box, TextField, Button } from "@mui/material";
import { useState } from "react";

const AddCatForm = ({ submitFnc }) => {
  const [name, setName] = useState();
  const [latinName, setLatinName] = useState();
  const [imageSrc, setImageSrc] = useState();

  const nameHandler = (e) => {
    const value = e.target.value;
    if (value) {
      setName(value);
    }
  };

  const latinNameHandler = (e) => {
    const value = e.target.value;
    if (value) {
      setLatinName(value);
    }
  };

  const imageSourceHandler = (e) => {
    const value = e.target.value;
    if (value) {
      setImageSrc(value);
    }
  };

  const submitHandler = () => {
    if (submitFnc) {
      submitFnc({ name: name, latinName: latinName, imgSource: imageSrc });
    }
  };
  return (
    <Box display={"flex"} flexDirection={"column"} mx={5} gap={1}>
      <Typography>Add cat form</Typography>

      <TextField
        required
        label="Name"
        variant="standard"
        onChange={nameHandler}
        helperText="Required Field"
      />

      <TextField
        required
        label="Latin Name"
        variant="standard"
        onChange={latinNameHandler}
        helperText="Required Field"
      />

      <TextField
        label="Image Source"
        variant="standard"
        onChange={imageSourceHandler}
      />

      <Button variant={"outlined"} onClick={submitHandler}>
        Submit
      </Button>
    </Box>
  );
};

export default AddCatForm;
