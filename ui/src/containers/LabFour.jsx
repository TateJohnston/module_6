import {
  Typography,
  Box,
  ToggleButton,
  ToggleButtonGroup,
  TextField,
} from "@mui/material";
import BigCats from "../components/BigCats";
import { useState } from "react";

const LabFour = () => {
  const filters = ["ASC", "DESC"];
  const [searchText, setSearchText] = useState("");
  const [filterType, setFilterType] = useState(filters[0]);

  const cats = [
    {
      name: "Cheetah",
      latinName: "Acinonyx jubatus",
      imgSource: "../src/assets/images/Cheetah.webp",
    },
    {
      name: "Cougar",
      latinName: "Puma concolor",
      imgSource: "../src/assets/images/cougar.jpeg",
    },
    {
      name: "Jaguar",
      latinName: "Panthera onca",
      imgSource: "../src/assets/images/jaguar.webp",
    },
    {
      name: "Leopard",
      latinName: "Panthera pardus",
      imgSource: "../src/assets/images/leopard.webp",
    },
    {
      name: "Lion",
      latinName: "Panthera leo",
      imgSource: "../src/assets/images/lion.webp",
    },
    {
      name: "Snow leopard",
      latinName: "Panthera uncia",
      imgSource: "../src/assets/images/snow_leopard.jpg",
    },
    {
      name: "Tiger",
      latinName: "Panthera tigris",
      imgSource: "../src/assets/images/tiger.jpeg",
    },
  ];

  const changeFilter = () => {
    const updatedValue = filterType === filters[0] ? filters[1] : filters[0];
    setFilterType(updatedValue);
  };

  const changeTextField = (e) => {
    setSearchText(e.target.value);
  };

  const dataHandlingFunction = () => {
    const sortedInASC = cats.sort((a, b) => {
      var textA = a.name.toUpperCase();
      var textB = b.name.toUpperCase();
      return textA < textB ? -1 : textA > textB ? 1 : 0;
    });

    const filteredCats = sortedInASC.filter((cat) => {
      if (searchText && searchText.length >= 3) {
        return cat.name.toUpperCase().includes(searchText.toUpperCase());
      }
      return true; // If searchText is less than 3 characters, return all cats
    });

    if (filterType === filters[0]) {
      sortedInASC;
    }
    if (filterType === filters[1]) {
      filteredCats.reverse();
    }
    return filteredCats;
  };

  return (
    <Box>
      <Typography variant="h5">Lab Four Content</Typography>
      <Box
        component="form"
        sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          variant="outlined"
          onChange={changeTextField}
        />
      </Box>
      <ToggleButtonGroup
        value={filterType}
        exclusive
        onChange={() => changeFilter()}
        aria-label="text alignment"
      >
        <ToggleButton value={filters[0]} aria-label="left aligned">
          <Typography>ASC</Typography>
        </ToggleButton>
        <ToggleButton value={filters[1]} aria-label="centered">
          <Typography>DESC</Typography>
        </ToggleButton>
      </ToggleButtonGroup>
      <BigCats data={dataHandlingFunction()} />
    </Box>
  );
};

export default LabFour;
