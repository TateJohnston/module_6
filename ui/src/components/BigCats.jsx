import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
} from "@mui/material";
import CatAvatarListItem from "./CatAvatarListItem";

const BigCats = ({ data }) => {
  const ItemHandler = () => {
    if (!data) {
      return <Typography>No Cats data found</Typography>;
    }

    return data?.map((cat) => {
      return (
        <CatAvatarListItem
          key={cat.latinName}
          name={cat.name}
          latinName={cat.latinName}
          imageSrc={cat.imgSource}
        />
      );
    });
  };

  return <List>{ItemHandler()}</List>;
};

export default BigCats;
