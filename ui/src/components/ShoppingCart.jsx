import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
} from "@mui/material";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";

const ShoppingCart = ({ cart, setCart }) => {
  const removeCart = (itemToRemove) => {
    const updatedCart = cart
      .map((item) =>
        item.id === itemToRemove.id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter((item) => item.quantity > 0);

    setCart(updatedCart);
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {cart.map((item, index) => (
        <ListItem key={index}>
          <ListItemAvatar>
            <Avatar alt={item.icecream} src={item.image} />
          </ListItemAvatar>
          <ListItemText primary={item.icecream} secondary={`$${item.price}`} />
          <Typography>QTY:{item.quantity}</Typography>
          <RemoveShoppingCartIcon
            onClick={() => removeCart(item)}
            sx={{ marginLeft: "20px", cursor: "pointer" }}
          />
        </ListItem>
      ))}
      <Typography variant="h6">${total.toFixed(2)}</Typography>
    </List>
  );
};

export default ShoppingCart;
