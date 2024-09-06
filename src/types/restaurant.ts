export interface MenuItemType {
  id: number;
  name: string;
  description: string;
  price: number;
  image:string
}

export interface RestaurantType {
  id: number;
  name: string;
  description: string;
  location: string;
  image:string;
  menuItems: MenuItemType[];
}

