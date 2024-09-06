import { useState } from 'react';
// import { fetchRestaurants, getRestaurantById, addRestaurant, updateRestaurant, deleteRestaurant ,addMenuItem,deleteMenuItem} from '../api/mockApi';
import {fetchRestaurants,getRestaurantById,addRestaurant,updateRestaurant,deleteRestaurant,addMenuItem,deleteMenuItem,} from "../api/mockApi"

export interface MenuItemType {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

export interface RestaurantType {
  id: number;
  name: string;
  description: string;
  location: string;
  image: string;
  menuItems: MenuItemType[];
}

type ErrorType = string | null;

const useRestaurants = () => {
  const [restaurants, setRestaurants] = useState<RestaurantType[]>([]);
  const [restaurant, setRestaurant] = useState<RestaurantType | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<ErrorType>(null);

  // Fetch all restaurants
  const fetchAllRestaurants = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchRestaurants() as RestaurantType[];
      setRestaurants(data);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unknown error occurred');
      }
    } finally {
      setLoading(false);
    }
  };

  // Fetch restaurant by ID
  const fetchRestaurantById = async (id: number) => {
  
    setError(null);
    try {
      const data = await getRestaurantById(id) as RestaurantType;
      console.log(data,"getById")
      setRestaurant(data);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unknown error occurred');
      }
    } finally {
     
    }
  };

  // Add a new restaurant
  const createRestaurant = async (newRestaurant: Omit<RestaurantType, 'id'>) => {
  
    setError(null);
    try {
      const data = await addRestaurant(newRestaurant) as RestaurantType;
      setRestaurants((prevRestaurants) => [...prevRestaurants, data]);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unknown error occurred');
      }
    } 
  };

  // Update an existing restaurant
  const modifyRestaurant = async (updatedRestaurant: RestaurantType) => {
  
    setError(null);
    console.log("updatedRestaurant",updatedRestaurant)
    try {
      const data = await updateRestaurant(updatedRestaurant) as RestaurantType;
      setRestaurants((prevRestaurants) =>
        prevRestaurants.map((restaurant) =>
          restaurant.id === data.id ? data : restaurant
        )
      );
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unknown error occurred');
      }
    } 
  };

  // Delete a restaurant
  const removeRestaurant = async (id: number) => {
   
    setError(null);
    try {
      await deleteRestaurant(id);
      setRestaurants((prevRestaurants) =>
        prevRestaurants.filter((restaurant) => restaurant.id !== id)
      );
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unknown error occurred');
      }
    } 
  };

  const addMenuItemToRestaurant = async (restaurantId: number, newMenuItem: Omit<MenuItemType, 'id'>) => {
  
    setError(null);
    try {
      const data = await addMenuItem(restaurantId, newMenuItem);
      setRestaurants((prevRestaurants) =>
        prevRestaurants.map((restaurant) =>
          restaurant.id === restaurantId
            ? { ...restaurant, menuItems: [...restaurant.menuItems, data] }
            : restaurant
        )
      );
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unknown error occurred');
      }
    } finally {
      setLoading(false);
    }
  };

  // Delete a menu item from a restaurant
  const deleteMenuItemFromRestaurant = async (restaurantId: number, menuItemId: number) => {
  
    setError(null);
    console.log(menuItemId,restaurantId,"deletig")
    try {
      await deleteMenuItem(restaurantId, menuItemId);
      setRestaurants((prevRestaurants) =>
        prevRestaurants.map((restaurant) =>
          restaurant.id === restaurantId
            ? { ...restaurant, menuItems: restaurant.menuItems.filter((item) => item.id !== menuItemId) }
            : restaurant
        )
      );
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unknown error occurred');
      }
    } 
  };

  return {
    restaurants,
    restaurant,
    loading,
    error,
    fetchAllRestaurants,
    fetchRestaurantById,
    createRestaurant,
    modifyRestaurant,
    removeRestaurant,
    addMenuItemToRestaurant,
    deleteMenuItemFromRestaurant
  };
};


export default useRestaurants;
