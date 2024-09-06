import React from 'react';
import { Box, Typography, List, Skeleton } from '@mui/material';
import MenuItemSkeleton from "./MenuItemSkeleton"

const RestaurantSkeleton: React.FC = () => {
  return (
    <Box sx={{ textAlign: 'center', my: 4 }}>
      <Typography variant="h1">
        <Skeleton variant="text" width="60%" />
      </Typography>
      <Typography variant="h6" sx={{ color: 'text.secondary', mt: 1 }}>
        <Skeleton variant="text" width="80%" />
      </Typography>
      <Typography variant="h6" sx={{ color: 'text.secondary', mt: 1 }}>
        <Skeleton variant="text" width="40%" />
      </Typography>
      <Box sx={{ mt: 4 }}>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          {Array.from(new Array(2)).map((_, index) => (
            <MenuItemSkeleton key={index} />
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default RestaurantSkeleton;
