import  {FC} from 'react';
import { Typography, Divider, IconButton, ListItem, ListItemText, ListItemAvatar, Avatar } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import useRestaurants from '../hooks/useRestaurant';

interface MenuItemTypeProps {
  resId:number;
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

const MenuItem: FC<MenuItemTypeProps> = ({ id, name, description, price, image,resId }) => {


  const {deleteMenuItemFromRestaurant}= useRestaurants()


  const handleDelete = () => {
    if (window.confirm(`Are you sure you want to delete ${name}?`)) {
      deleteMenuItemFromRestaurant(resId, id);
    }
  };

  return (
    <>
      <ListItem alignItems="flex-start" secondaryAction={
        <>
          <IconButton edge="end" aria-label="delete" onClick={handleDelete}>
            <DeleteIcon />
          </IconButton>
        </>
      }>
        <ListItemAvatar>
          <Avatar alt={name} src={image} />
        </ListItemAvatar>
        <ListItemText
          primary={name}
          secondary={
            <Typography
              component="span"
              variant="body2"
              sx={{ color: 'text.primary', display: 'inline' }}
            >
              {description} - ₹{price}
            </Typography>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </>
  );
};

export default MenuItem;
