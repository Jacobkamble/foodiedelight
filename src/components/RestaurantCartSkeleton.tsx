import React from 'react';
import { Card, CardMedia, CardContent, Skeleton, Box, CardActions, IconButton } from '@mui/material';

const RestaurantCartSkeleton: React.FC = () => {
  return (
    <Card sx={{ maxWidth: 345, margin: '20px', boxShadow: 3 }}>
      <CardMedia component="img" height="200" image="" alt="" />
      <CardContent>
        <Skeleton variant="text" width="60%" />
        <Skeleton variant="text" width="90%" />
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="edit restaurant" disabled>
          <Skeleton variant="circular" width={24} height={24} />
        </IconButton>
        <IconButton aria-label="delete restaurant" disabled>
          <Skeleton variant="circular" width={24} height={24} />
        </IconButton>
        <IconButton aria-label="menu" disabled>
          <Skeleton variant="circular" width={24} height={24} />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default RestaurantCartSkeleton;
