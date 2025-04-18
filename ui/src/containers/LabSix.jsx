import {
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
} from "@mui/material";
import { useState } from "react";
import ProductList from "../components/ProductList";
import { Products } from "../data/Products";
import ShoppingCart from "../components/ShoppingCart";

const LabSix = () => {
  const [cart, setCart] = useState([]);

  return (
    <Box>
      <Typography variant="h5">Lab Six Content</Typography>
      <Box display={"flex"} justifyContent={"space-around"}>
        <Box>
          <Typography>Products</Typography>

          <ProductList cart={cart} setCart={setCart} />
        </Box>
        <Box>
          <Typography>Shopping Basket</Typography>
          <ShoppingCart cart={cart} setCart={setCart} />
        </Box>
      </Box>
    </Box>
  );
};

export default LabSix;
