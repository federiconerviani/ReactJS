import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

import { Link } from "react-router-dom";

const ItemList = ({ items }) => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
      }}
    >
      {items.map((item) => {
        return (
          <Card sx={{ maxWidth: 345, margin: 1 }} key={item.id}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image={item.img}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.description}
              </Typography>
              <Typography variant="body2" color="primary">
                ${item.price}
              </Typography>
            </CardContent>
            <CardActions>
              <Link to={`/itemDetail/${item.id}`}>
                <Button size="small">Más info</Button>
              </Link>
            </CardActions>
          </Card>
        );
      })}
    </div>
  );
};

export default ItemList;
