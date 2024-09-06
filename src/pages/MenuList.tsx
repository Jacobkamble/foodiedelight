import { Box, Typography, List, Button } from "@mui/material";
import { useState, useEffect } from "react";
import MenuItem from "../components/MenuItem";
import AddIcon from '@mui/icons-material/Add';
import { useParams } from "react-router-dom";
import useRestaurants from "../hooks/useRestaurant";
import AddMenuItemDialog from "../components/AddMenuItemDialog";
import RestaurantSkeleton from "../components/RestaurantMenuSkeleton";


const MenuList = () => {
  const { resId } = useParams();
  const { fetchRestaurantById, restaurant, addMenuItemToRestaurant } = useRestaurants();
  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    fetchRestaurantById(Number(resId));
  }, [fetchRestaurantById, resId]);

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleAddMenuItem = (item:any) => {
    addMenuItemToRestaurant(Number( resId), item);
    handleCloseDialog();
  };
  if (!restaurant) {
    return <RestaurantSkeleton />;
  }

  return (
    <>
      <Box sx={{ textAlign: "center", my: 4 }}>
        <Typography variant="h1" sx={{ fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" } }}>
          {restaurant?.name}
        </Typography>
        <Typography variant="h6" sx={{ fontSize: { xs: "1rem", sm: "1.2rem", md: "1.5rem" }, color: "text.secondary", mt: 1 }}>
          {restaurant?.description}
        </Typography>
        <Typography variant="h6" sx={{ fontSize: { xs: "1rem", sm: "1.2rem", md: "1.5rem" }, color: "text.secondary", mt: 1 }}>
          {restaurant?.location}
        </Typography>
      </Box>
      <Button
        variant="contained"
        color="primary"
        startIcon={<AddIcon />}
        onClick={handleOpenDialog}
        sx={{ mb: 2, mx: 'auto', display: 'block' }}
      >
        Add Menu Item
      </Button>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {restaurant && restaurant.menuItems.map((item) => (
          <MenuItem key={item.id} {...item} resId={Number( resId)} />
        ))}
      </List>
      <AddMenuItemDialog open={openDialog} onClose={handleCloseDialog} onAddMenuItem={handleAddMenuItem} />
    </>
  );
};

export default MenuList;
