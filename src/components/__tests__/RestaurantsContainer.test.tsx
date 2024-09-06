import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import useRestaurants from '../../hooks/useRestaurant';
import RestaurantsContainer from '../RestaurantsContainer';


// Mock useRestaurants hook
jest.mock('../hooks/useRestaurant', () => ({
  __esModule: true,
  default: jest.fn(),
}));

const mockFetchAllRestaurants = jest.fn();
const mockFetchRestaurantById = jest.fn();
const mockCreateRestaurant = jest.fn();
const mockModifyRestaurant = jest.fn();
const mockRemoveRestaurant = jest.fn();

beforeEach(() => {
  useRestaurants.mockReturnValue({
    restaurants: [],
    restaurant: null,
    loading: false,
    error: null,
    fetchAllRestaurants: mockFetchAllRestaurants,
    fetchRestaurantById: mockFetchRestaurantById,
    createRestaurant: mockCreateRestaurant,
    modifyRestaurant: mockModifyRestaurant,
    removeRestaurant: mockRemoveRestaurant,
  });
});

test('renders RestaurantsContainer and shows loading state', () => {
  useRestaurants.mockReturnValue({
    ...useRestaurants(),
    loading: true,
  });

  render(<RestaurantsContainer />);

  expect(screen.getByText(/loading/i)).toBeInTheDocument();
});

test('renders restaurants when fetched', async () => {
  useRestaurants.mockReturnValue({
    ...useRestaurants(),
    restaurants: [
      { id: 1, name: 'Restaurant 1', description: 'Description 1', image: 'image1.jpg', location: '', menuItems: [] },
    ],
  });

  render(<RestaurantsContainer />);

  await waitFor(() => {
    expect(screen.getByText(/Restaurant 1/i)).toBeInTheDocument();
  });
});

test('opens dialog when "Add Restaurant" is clicked', () => {
    render(<RestaurantsContainer />);
  
    const addButton = screen.getByText(/Add Restaurant/i);
    fireEvent.click(addButton);
  
    expect(screen.getByText(/Add New Restaurant/i)).toBeInTheDocument(); // Assuming your FormDialog has this title
  });
  
  test('calls createRestaurant when form is submitted', async () => {
    useRestaurants.mockReturnValue({
      ...useRestaurants(),
      createRestaurant: jest.fn(),
    });
  
    render(<RestaurantsContainer />);
  
    fireEvent.click(screen.getByText(/Add Restaurant/i));
  
    const nameInput = screen.getByLabelText(/Restaurant Name/i);
    const descriptionInput = screen.getByLabelText(/Description/i);
    const imageInput = screen.getByLabelText(/Image URL/i);
    const locationInput = screen.getByLabelText(/Location/i);
    const submitButton = screen.getByText(/Add/i);
  
    fireEvent.change(nameInput, { target: { value: 'New Restaurant' } });
    fireEvent.change(descriptionInput, { target: { value: 'New Description' } });
    fireEvent.change(imageInput, { target: { value: 'newimage.jpg' } });
    fireEvent.change(locationInput, { target: { value: 'New Location' } });
  
    fireEvent.click(submitButton);
  
    await waitFor(() => {
      expect(useRestaurants().createRestaurant).toHaveBeenCalledWith({
        name: 'New Restaurant',
        description: 'New Description',
        image: 'newimage.jpg',
        location: 'New Location',
        menuItems: [],
      });
    });
  });
  
