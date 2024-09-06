// Import the mock data from the mock file
import { mockRestaurants } from "../mocks/mock"; 

// Define the interface for MenuItem
export interface MenuItemType {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

// Define the interface for Restaurant
export interface RestaurantType {
  id: number;
  name: string;
  description: string;
  location: string;
  image: string;
  menuItems: MenuItemType[];
}

// Use mock data for dummy restaurants
const dummyData: RestaurantType[] = mockRestaurants;

// Fetch all restaurants
export const fetchRestaurants = (): Promise<RestaurantType[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(dummyData);
    }, 1000); // Simulates a 1-second delay
  });
};

// Fetch restaurant by ID
export const getRestaurantById = (id: number): Promise<RestaurantType> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const restaurant = dummyData.find((r) => r.id === id);
      if (restaurant) {
        resolve(restaurant);
      } else {
        reject(new Error('Restaurant not found'));
      }
    }, 1000);
  });
};

export const addRestaurant = (newRestaurant: Omit<RestaurantType, 'id'>): Promise<RestaurantType> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const newId = dummyData.length + 1;
      const restaurantWithId: RestaurantType = { ...newRestaurant, id: newId };
      dummyData.push(restaurantWithId);
      resolve(restaurantWithId);
    }, 1000); // Simulate a delay
  });
};

// Update an existing restaurant
export const updateRestaurant = (updatedRestaurant: RestaurantType): Promise<RestaurantType> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const index = dummyData.findIndex((r) => r.id === updatedRestaurant.id);
      if (index !== -1) {
        dummyData[index] = updatedRestaurant;
        resolve(updatedRestaurant);
      } else {
        reject(new Error('Restaurant not found'));
      }
    }, 1000); // Simulate a delay
  });
};

// Delete a restaurant by ID
export const deleteRestaurant = (id: number): Promise<number> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const index = dummyData.findIndex((r) => r.id === id);
      if (index !== -1) {
        dummyData.splice(index, 1);
        resolve(id);
      } else {
        reject(new Error('Restaurant not found'));
      }
    }, 1000); // Simulate a delay
  });
};

// Add a new menu item to a restaurant
export const addMenuItem = (restaurantId: number, newMenuItem: Omit<MenuItemType, 'id'>): Promise<MenuItemType> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const restaurant = dummyData.find((r) => r.id === restaurantId);
      if (!restaurant) {
        return reject(new Error('Restaurant not found'));
      }

      const newId = restaurant.menuItems.length + 1;
      const menuItemWithId: MenuItemType = { ...newMenuItem, id: newId };
      restaurant.menuItems.push(menuItemWithId);

      resolve(menuItemWithId);
    }, 1000);
  });
};

// Delete a menu item from a restaurant
export const deleteMenuItem = (restaurantId: number, menuItemId: number): Promise<number> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const restaurant = dummyData.find((r) => r.id === restaurantId);
      if (!restaurant) {
        return reject(new Error('Restaurant not found'));
      }

      const index = restaurant.menuItems.findIndex((item) => item.id === menuItemId);
      if (index === -1) {
        return reject(new Error('Menu item not found'));
      }

      restaurant.menuItems.splice(index, 1);
      resolve(menuItemId);
    }, 1000);
  });
};
