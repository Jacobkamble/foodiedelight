import React, { memo } from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  IconButton,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import { Link } from 'react-router-dom';

interface RestaurantCardProps {
  id: number;
  name: string;
  image: string;
  description: string;
  onEdit: () => void;
  onDelete: () => void;
}

const RestaurantCart: React.FC<RestaurantCardProps> = ({
  id,
  name,
  image,
  description,
  onDelete,
  onEdit,
}) => {
  console.log("RestaurantCart render")
  return (
    <>
      <Card sx={{ maxWidth: 345, margin: '20px', boxShadow: 3 }}>
        <CardMedia component="img" height="200" image={image} alt={name} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="edit restaurant" onClick={onEdit}>
            <EditIcon />
          </IconButton>
          <IconButton aria-label="delete restaurant" onClick={onDelete}>
            <DeleteIcon />
          </IconButton>

          <IconButton aria-label="menu">
            <Link to={`restaurant/${id}`}>
              <RestaurantMenuIcon />
            </Link>
          </IconButton>
        </CardActions>
      </Card>
    </>
  );
};

export default memo(RestaurantCart);
