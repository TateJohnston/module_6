import { Typography, Box } from "@mui/material";
import BigCats from "../components/BigCats";
import CatAvatarListItem from "../components/CatAvatarListItem";

export const cats = [
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

const LabTwo = () => {
  return (
    <Box>
      <Typography variant="h5">Lab Two Content</Typography>
      <Box>
        <Typography variant="h6">Empty Data</Typography>
        <BigCats />
      </Box>
      <Box>
        <Typography variant="h6">Empty Data</Typography>
        <BigCats data={cats} />
      </Box>
    </Box>
  );
};

export default LabTwo;
