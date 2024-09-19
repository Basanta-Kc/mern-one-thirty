import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useContext } from "react";
import { AuthContext } from "../App";

export default function Product({ product }) {
  const { setCart, cart } = useContext(AuthContext);
  return (
    <Card sx={{ width: "345px" }}>
      <CardMedia
        sx={{ height: 200 }}
        image={`http://localhost:3003/${product?.image}`}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product?.name}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Price: ${product?.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          onClick={() => {
            // if the product exist in cart
            const productExist = cart.find(({ _id }) => _id === product._id);
            const newCartItems = [...cart];
            if (productExist) {
              productExist.quantity++;
            } else {
              newCartItems.push({
                _id: product._id,
                name: product.name,
                price: product.price,
                image: product.image,
                quantity: 1,
              });
            }

            setCart(newCartItems);
          }}
        >
          Add To Cart
        </Button>
      </CardActions>
    </Card>
  );
}
