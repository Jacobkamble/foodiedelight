import React, { useEffect, useState ,useCallback} from "react";
import RestaurantCart from "./RestaurantCart";
import { Grid, Box, Button } from "@mui/material";
import FormDialog from "./FormDialog";
import useRestaurants from "../hooks/useRestaurant";
import RestaurantCartSkeleton from "./RestaurantCartSkeleton";
import {RestaurantType} from "../api/mockApi"

const RestaurantsContainer: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [isAdding, setIsAdding] = useState(false);

  const {
    restaurants,
    restaurant,
    loading,
    error,
    fetchAllRestaurants,
    fetchRestaurantById,
    createRestaurant,
    modifyRestaurant,
    removeRestaurant,
  } = useRestaurants();

  useEffect(() => {
    fetchAllRestaurants();
  }, []);

 
  const onEdit = useCallback(
    (rest: RestaurantType) => {
      if (isEditing) {
        setIsEditing(false);
        setIsAdding(false);
      } else {
        fetchRestaurantById(rest.id);
        setIsEditing(true);
      }
    },
    [fetchRestaurantById, isEditing]
  );

  const onDelete = useCallback(
    (id: number) => {
      removeRestaurant(id);
    },
    [removeRestaurant]
  );

  const handleEdit = useCallback(
    (rest: RestaurantType) => {
      console.log("handleEdit clicked");
      if (isEditing) {
        modifyRestaurant(rest);
        console.log("modifyRestaurant clicked");
      } else if (isAdding) {
        createRestaurant(rest);
        console.log("createRestaurant clicked");
      }
      setIsEditing(false);
      setIsAdding(false);
      // Close the form after adding or editing
    },
    [isEditing, isAdding, modifyRestaurant, createRestaurant]
  );

  const onAddRestaurant = useCallback(() => {
    setIsAdding(true);
    setIsEditing(false); 
  }, []);


  return (
    <>
    <Box padding={3}>
        <Button disabled={loading} variant="contained" color="primary" onClick={onAddRestaurant}>
          Add Restaurant
        </Button>
      </Box>
      <Grid container spacing={3} padding={3}>
        {loading
          ? Array.from(new Array(8)).map((_, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                <RestaurantCartSkeleton />
              </Grid>
            ))
          : restaurants &&
            restaurants.map(
              ({ id, name, description, image }) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={id}>
                  <RestaurantCart
                    id={id}
                    name={name}
                    description={description}
                    onDelete={() => onDelete(id)}
                    onEdit={() =>
                      onEdit({
                        name,
                        id,
                        description,
                        image,
                        location: '',
                        menuItems: [],
                      })
                    }
                    image={image}
                    // isLoading={loading} // Pass loading state to RestaurantCart
                  />
                </Grid>
              )
            )}
      </Grid>
      <FormDialog
        isEditing={isEditing}
        restaurant={restaurant}
        open={isEditing || isAdding}
        onClose={() => {
          setIsEditing(false);
          setIsAdding(false);
        }}
        onSubmit={handleEdit}
      />
    
    </>
  );
};

export default RestaurantsContainer;
