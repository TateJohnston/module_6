import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
} from "@mui/material";
import { Products } from "../data/Products";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const ProductList = ({ cart, setCart }) => {
  const addToCart = (product) => {
    const exists = cart.find((item) => item.id === product.id);
    if (exists) {
      const updatedCart = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {Products.map((product) => (
        <ListItem key={product.id}>
          <ListItemAvatar>
            <Avatar alt={product.icecream} src={product.image} />
          </ListItemAvatar>
          <ListItemText
            primary={product.icecream}
            secondary={`$${product.price}`}
          />
          <AddShoppingCartIcon
            onClick={() => addToCart(product)}
            sx={{ marginLeft: "20px", cursor: "pointer" }}
          />
        </ListItem>
      ))}
    </List>
  );
};

export default ProductList;
