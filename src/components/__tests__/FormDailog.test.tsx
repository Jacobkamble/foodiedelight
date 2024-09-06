import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import FormDialog from '../FormDialog';


// Mock data
const mockRestaurant = {
  id: 1,
  name: 'Test Restaurant',
  description: 'Test Description',
  image: 'testimage.jpg',
  location: 'Test Location',
  menuItems: []
};

// Mock functions
const mockOnSubmit = jest.fn();
const mockOnClose = jest.fn();

describe('FormDialog', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders dialog in add mode', () => {
    render(
      <FormDialog
        open={true}
        onClose={mockOnClose}
        onSubmit={mockOnSubmit}
        isEditing={false}
      />
    );

    expect(screen.getByText(/Add Restaurant/i)).toBeInTheDocument();
    expect(screen.getByText(/Fill in the details to add a new restaurant:/i)).toBeInTheDocument();
  });

  test('renders dialog in edit mode and pre-fills data', () => {
    render(
      <FormDialog
        open={true}
        onClose={mockOnClose}
        onSubmit={mockOnSubmit}
        isEditing={true}
        restaurant={mockRestaurant}
      />
    );

    expect(screen.getByText(/Edit Restaurant/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Restaurant Name/i).value).toBe(mockRestaurant.name);
    expect(screen.getByLabelText(/Description/i).value).toBe(mockRestaurant.description);
    expect(screen.getByLabelText(/Image URL/i).value).toBe(mockRestaurant.image);
    expect(screen.getByLabelText(/Location/i).value).toBe(mockRestaurant.location);
  });

  test('submits form data correctly', async () => {
    render(
      <FormDialog
        open={true}
        onClose={mockOnClose}
        onSubmit={mockOnSubmit}
        isEditing={false}
      />
    );

    fireEvent.change(screen.getByLabelText(/Restaurant Name/i), { target: { value: 'New Restaurant' } });
    fireEvent.change(screen.getByLabelText(/Description/i), { target: { value: 'New Description' } });
    fireEvent.change(screen.getByLabelText(/Image URL/i), { target: { value: 'newimage.jpg' } });
    fireEvent.change(screen.getByLabelText(/Location/i), { target: { value: 'New Location' } });

    fireEvent.click(screen.getByText(/Add/i));

    await waitFor(() => {
      expect(mockOnSubmit).toHaveBeenCalledWith({
        id: expect.any(Number),
        name: 'New Restaurant',
        description: 'New Description',
        image: 'newimage.jpg',
        location: 'New Location',
        menuItems: [],
      });
    });
  });

  test('closes dialog on cancel', () => {
    render(
      <FormDialog
        open={true}
        onClose={mockOnClose}
        onSubmit={mockOnSubmit}
        isEditing={false}
      />
    );

    fireEvent.click(screen.getByText(/Cancel/i));

    expect(mockOnClose).toHaveBeenCalled();
  });
});
