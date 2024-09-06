import React from 'react';
import { ListItem, ListItemAvatar, Avatar, ListItemText, Skeleton, Divider } from '@mui/material';

const MenuItemSkeleton: React.FC = () => {
  return (
    <ListItem>
      <ListItemAvatar>
        <Skeleton variant="circular">
          <Avatar />
        </Skeleton>
      </ListItemAvatar>
      <ListItemText
        primary={<Skeleton variant="text" width="60%" />}
        secondary={<Skeleton variant="text" width="40%" />}
      />
      <Divider variant="inset" component="li" />
    </ListItem>
  );
};

export default MenuItemSkeleton;
