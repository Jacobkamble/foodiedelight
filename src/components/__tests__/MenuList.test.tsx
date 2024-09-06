import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import useRestaurants from '../../hooks/useRestaurant';
import MenuList from '../../pages/MenuList';

jest.mock("../../hooks/useRestaurant");

const mockFetchRestaurantById = jest.fn();
const mockAddMenuItemToRestaurant = jest.fn();
const mockUseRestaurants = useRestaurants as jest.MockedFunction<typeof useRestaurants>;

beforeEach(() => {
  mockUseRestaurants.mockReturnValue({
    fetchRestaurantById: mockFetchRestaurantById,
    restaurant: {
      id: 1,
      name: 'Test Restaurant',
      description: 'Test Description',
      location: 'Test Location',
      image: 'test-image.jpg',
      menuItems: [
        {
          id: 101,
          name: 'Pizza',
          description: 'Delicious cheese pizza',
          price: 12,
          image: 'pizza-image.jpg',
        },
        {
          id: 102,
          name: 'Burger',
          description: 'Juicy beef burger',
          price: 10,
          image: 'burger-image.jpg',
        },
      ],
    },
    restaurants: [],
    loading: false,
    error: null,
    fetchAllRestaurants: jest.fn(),
    createRestaurant: jest.fn(),
    modifyRestaurant: jest.fn(),
    removeRestaurant: jest.fn(),
    deleteMenuItemFromRestaurant: jest.fn(),
    addMenuItemToRestaurant: mockAddMenuItemToRestaurant, // Mock addMenuItemToRestaurant
  });
});

afterEach(() => {
  jest.clearAllMocks();
});

test('renders restaurant details and menu items', async () => {
  render(
    <BrowserRouter>
      <MenuList />
    </BrowserRouter>
  );

  await waitFor(() => {
    // Verify restaurant details
    expect(screen.getByText('Test Restaurant')).toBeInTheDocument();
    expect(screen.getByText('Test Description')).toBeInTheDocument();
    expect(screen.getByText('Test Location')).toBeInTheDocument();

    // Verify menu items
    expect(screen.getByText(/Delicious cheese pizza/i)).toBeInTheDocument();
    expect(screen.getByText(/Juicy beef burger/i)).toBeInTheDocument();
    expect(screen.getByText(/₹12/)).toBeInTheDocument();
    expect(screen.getByText(/₹10/)).toBeInTheDocument();
  });
});

test('opens AddMenuItemDialog when Add Menu Item button is clicked', async () => {
  render(
    <BrowserRouter>
      <MenuList />
    </BrowserRouter>
  );

  // Simulate click on the "Add Menu Item" button
  const addButton = screen.getByRole('button', { name: /Add Menu Item/i });
  fireEvent.click(addButton);

  // Verify the dialog opens
  await waitFor(() => {
    expect(screen.getByText(/Add New Menu Item/i)).toBeInTheDocument();
  });

  // Verify that input fields are rendered in the dialog
  expect(screen.getByLabelText(/Name/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Price/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Description/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Image URL/i)).toBeInTheDocument();

  // Optionally, close the dialog by simulating a click on the Cancel button
  const cancelButton = screen.getByText(/Cancel/i);
  fireEvent.click(cancelButton);

  // Verify the dialog closes
  await waitFor(() => {
    expect(screen.queryByText(/Add New Menu Item/i)).not.toBeInTheDocument();
  });
});

test('adds a new menu item successfully', async () => {
  render(
    <BrowserRouter>
      <MenuList />
    </BrowserRouter>
  );

  // Step 1: Open the Add Menu Item Dialog
  const addButton = screen.getByRole('button', { name: /Add Menu Item/i });
  fireEvent.click(addButton);

  // Step 2: Wait for the dialog to open and input fields to appear
  await waitFor(() => {
    expect(screen.getByText(/Add New Menu Item/i)).toBeInTheDocument();
  });

  // Step 3: Fill in the form fields
  fireEvent.change(screen.getByLabelText(/Name/i), { target: { value: 'Pasta' } });
  fireEvent.change(screen.getByLabelText(/Price/i), { target: { value: '15' } });
  fireEvent.change(screen.getByLabelText(/Description/i), { target: { value: 'Creamy Alfredo Pasta' } });
  fireEvent.change(screen.getByLabelText(/Image URL/i), { target: { value: 'pasta-image.jpg' } });

  // Step 4: Click the "Add" button to add the new menu item
  const submitButton = screen.getByRole("button", { name: /Add/i });
  fireEvent.click(submitButton);

  // Step 5: Verify the addMenuItemToRestaurant function is called with the correct arguments
  await waitFor(() => {
    expect(mockAddMenuItemToRestaurant).toHaveBeenCalledWith(1, {
      name: 'Pasta',
      price: 15,
      description: 'Creamy Alfredo Pasta',
      image: 'pasta-image.jpg',
    });
  });

  // Step 6: Verify the dialog is closed
  await waitFor(() => {
    expect(screen.queryByText(/Add New Menu Item/i)).not.toBeInTheDocument();
  });

  // Step 7: Verify the new menu item is now part of the restaurant menu
  await waitFor(() => {
    expect(screen.getByText(/Pasta/i)).toBeInTheDocument();
    expect(screen.getByText(/Creamy Alfredo Pasta/i)).toBeInTheDocument();
    expect(screen.getByText(/₹15/)).toBeInTheDocument();
  });
});
