interface MenuItem {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
  }
  
  interface Restaurant {
    id: number;
    name: string;
    image: string;
    description: string;
    location: string;
    rating: number;
    cuisine: string;
    menuItems: MenuItem[];
  }
  
  export const mockRestaurants: Restaurant[] = [
    {
      id: 1,
      name: 'Delicious Bites',
      image: 'https://via.placeholder.com/200x150?text=Delicious+Bites',
      description: 'A great place to enjoy delicious meals and snacks!',
      location: 'New York, NY',
      rating: 4.5,
      cuisine: 'American',
      menuItems: [
        { id: 1, name: 'Cheeseburger', description: 'Juicy beef burger with cheese.', price: 9.99, image: 'https://via.placeholder.com/100x100?text=Cheeseburger' },
        { id: 2, name: 'Fries', description: 'Crispy golden fries.', price: 4.99, image: 'https://via.placeholder.com/100x100?text=Fries' }
      ],
    },
    {
      id: 2,
      name: 'Sushi Haven',
      image: 'https://via.placeholder.com/200x150?text=Sushi+Haven',
      description: 'Authentic Japanese sushi prepared with fresh ingredients.',
      location: 'San Francisco, CA',
      rating: 4.8,
      cuisine: 'Japanese',
      menuItems: [
        { id: 1, name: 'Salmon Sushi', description: 'Fresh salmon on seasoned rice.', price: 12.99, image: 'https://via.placeholder.com/100x100?text=Salmon+Sushi' },
        { id: 2, name: 'Tuna Roll', description: 'Tuna and avocado wrapped in seaweed and rice.', price: 10.99, image: 'https://via.placeholder.com/100x100?text=Tuna+Roll' }
      ],
    },
    {
      id: 3,
      name: 'Pasta Palace',
      image: 'https://via.placeholder.com/200x150?text=Pasta+Palace',
      description: 'Heaven for pasta lovers! Enjoy Italian dishes at their best.',
      location: 'Chicago, IL',
      rating: 4.2,
      cuisine: 'Italian',
      menuItems: [
        { id: 1, name: 'Spaghetti Bolognese', description: 'Classic spaghetti with a rich meat sauce.', price: 14.99, image: 'https://via.placeholder.com/100x100?text=Spaghetti+Bolognese' },
        { id: 2, name: 'Penne Alfredo', description: 'Penne pasta in a creamy Alfredo sauce.', price: 13.99, image: 'https://via.placeholder.com/100x100?text=Penne+Alfredo' }
      ],
    },
    {
      id: 4,
      name: 'Spicy Curry House',
      image: 'https://via.placeholder.com/200x150?text=Spicy+Curry+House',
      description: 'Traditional Indian curries with bold flavors and spices.',
      location: 'Austin, TX',
      rating: 4.7,
      cuisine: 'Indian',
      menuItems: [
        { id: 1, name: 'Chicken Tikka Masala', description: 'Chicken in a rich tomato and cream sauce.', price: 15.99, image: 'https://via.placeholder.com/100x100?text=Chicken+Tikka+Masala' },
        { id: 2, name: 'Vegetable Korma', description: 'Mixed vegetables in a creamy coconut sauce.', price: 13.99, image: 'https://via.placeholder.com/100x100?text=Vegetable+Korma' }
      ],
    },
    {
      id: 5,
      name: 'Green Garden',
      image: 'https://via.placeholder.com/200x150?text=Green+Garden',
      description: 'A paradise for vegetarians and vegans with farm-fresh ingredients.',
      location: 'Los Angeles, CA',
      rating: 4.3,
      cuisine: 'Vegetarian',
      menuItems: [
        { id: 1, name: 'Vegan Burger', description: 'Plant-based patty with lettuce, tomato, and vegan mayo.', price: 11.99, image: 'https://via.placeholder.com/100x100?text=Vegan+Burger' },
        { id: 2, name: 'Quinoa Salad', description: 'Fresh quinoa with mixed greens and vinaigrette.', price: 9.99, image: 'https://via.placeholder.com/100x100?text=Quinoa+Salad' }
      ],
    },
    {
      id: 6,
      name: 'Pizza Delight',
      image: 'https://via.placeholder.com/200x150?text=Pizza+Delight',
      description: 'Delicious pizzas with fresh toppings and homemade crusts.',
      location: 'Dallas, TX',
      rating: 4.4,
      cuisine: 'Italian',
      menuItems: [
        { id: 1, name: 'Margherita Pizza', description: 'Classic pizza with tomatoes, mozzarella, and basil.', price: 10.99, image: 'https://via.placeholder.com/100x100?text=Margherita+Pizza' },
        { id: 2, name: 'Pepperoni Pizza', description: 'Pizza topped with pepperoni and cheese.', price: 12.99, image: 'https://via.placeholder.com/100x100?text=Pepperoni+Pizza' }
      ],
    },
    {
      id: 7,
      name: 'Burger World',
      image: 'https://via.placeholder.com/200x150?text=Burger+World',
      description: 'Mouthwatering burgers with a variety of toppings.',
      location: 'Miami, FL',
      rating: 4.1,
      cuisine: 'American',
      menuItems: [
        { id: 1, name: 'BBQ Bacon Burger', description: 'Burger topped with BBQ sauce, bacon, and cheese.', price: 10.49, image: 'https://via.placeholder.com/100x100?text=BBQ+Bacon+Burger' },
        { id: 2, name: 'Veggie Burger', description: 'A delicious burger made with a plant-based patty.', price: 9.99, image: 'https://via.placeholder.com/100x100?text=Veggie+Burger' }
      ],
    },
    {
      id: 8,
      name: 'Taco Fiesta',
      image: 'https://via.placeholder.com/200x150?text=Taco+Fiesta',
      description: 'Mexican tacos with bold flavors and fresh ingredients.',
      location: 'Phoenix, AZ',
      rating: 4.6,
      cuisine: 'Mexican',
      menuItems: [
        { id: 1, name: 'Chicken Tacos', description: 'Tacos filled with grilled chicken, lettuce, and salsa.', price: 8.99, image: 'https://via.placeholder.com/100x100?text=Chicken+Tacos' },
        { id: 2, name: 'Beef Tacos', description: 'Tacos filled with seasoned beef, cheese, and tomatoes.', price: 9.49, image: 'https://via.placeholder.com/100x100?text=Beef+Tacos' }
      ],
    },
    {
      id: 9,
      name: 'Steakhouse Grill',
      image: 'https://via.placeholder.com/200x150?text=Steakhouse+Grill',
      description: 'Premium steaks cooked to perfection.',
      location: 'Las Vegas, NV',
      rating: 4.9,
      cuisine: 'Steakhouse',
      menuItems: [
        { id: 1, name: 'Ribeye Steak', description: 'Juicy ribeye steak grilled to perfection.', price: 24.99, image: 'https://via.placeholder.com/100x100?text=Ribeye+Steak' },
        { id: 2, name: 'Filet Mignon', description: 'Tender filet mignon served with garlic butter.', price: 29.99, image: 'https://via.placeholder.com/100x100?text=Filet+Mignon' }
      ],
    },
    {
      id: 10,
      name: 'BBQ Heaven',
      image: 'https://via.placeholder.com/200x150?text=BBQ+Heaven',
      description: 'Slow-cooked BBQ with a variety of meats and sides.',
      location: 'Houston, TX',
      rating: 4.7,
      cuisine: 'Barbecue',
      menuItems: [
        { id: 1, name: 'Pulled Pork Sandwich', description: 'Pulled pork with BBQ sauce on a toasted bun.', price: 11.99, image: 'https://via.placeholder.com/100x100?text=Pulled+Pork+Sandwich' },
        { id: 2, name: 'Brisket Plate', description: 'Smoked brisket served with BBQ sauce and sides.', price: 18.99, image: 'https://via.placeholder.com/100x100?text=Brisket+Plate' }
      ],
    }
  ];
  