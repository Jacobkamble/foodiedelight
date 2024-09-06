import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { memo ,useEffect,useState,ChangeEvent,FormEvent} from 'react';

import {RestaurantType} from "../types/restaurant"

interface FormDialogProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: RestaurantType) => void;
  isEditing: boolean;
  restaurant?: RestaurantType | null;
}

interface RestaurantFormData {
  name: string | undefined;
  description: string | undefined;
  image: string | undefined;
  location: string | undefined;
}

const  FormDialog=({
  open,
  onClose,
  onSubmit,
  isEditing,
  restaurant,
}: FormDialogProps) =>{

  console.log("FormDialog render")
  const [formData, setFormData] = useState<RestaurantFormData>({
    name: '',
    description: '',
    image: '',
    location: '',
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const menuItems = restaurant?.menuItems || [];
    // onSubmit({ ...formData, id: restaurant?.id ?? Date.now(), menuItems });
    onSubmit({
      id: restaurant?.id ?? Date.now(),
      menuItems,
      name: formData.name!,
      description: formData.description!,
      image: formData.image!,
      location: formData.location!,
    });
    setFormData({
      name: '',
      description: '',
      image: '',
      location: '',
    });
    onClose();
  };

  useEffect(() => {
    if (isEditing && restaurant) {
      setFormData({
        name: restaurant.name,
        description: restaurant.description,
        image: restaurant.image,
        location: restaurant.location,
      });
    }
  }, [isEditing, restaurant]);

  return (
    <Dialog open={open} onClose={onClose} PaperProps={{ component: 'form', onSubmit: handleSubmit }}>
      <DialogTitle>{isEditing ? 'Edit Restaurant' : 'Add Restaurant'}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          {isEditing ? 'Update the restaurant details below:' : 'Fill in the details to add a new restaurant:'}
        </DialogContentText>
        <TextField
          autoFocus
          required
          margin="dense"
          id="name"
          name="name"
          label="Restaurant Name"
          type="text"
          fullWidth
          variant="standard"
          value={formData.name}
          onChange={handleChange}
        />
        <TextField
          required
          margin="dense"
          id="description"
          name="description"
          label="Description"
          type="text"
          fullWidth
          variant="standard"
          value={formData.description}
          onChange={handleChange}
        />
        <TextField
          required
          margin="dense"
          id="image"
          name="image"
          label="Image URL"
          type="text"
          fullWidth
          variant="standard"
          value={formData.image}
          onChange={handleChange}
        />
        <TextField
          required
          margin="dense"
          id="location"
          name="location"
          label="Location"
          type="text"
          fullWidth
          variant="standard"
          value={formData.location}
          onChange={handleChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button type="submit">{isEditing ? 'Update' : 'Add'}</Button>
      </DialogActions>
    </Dialog>
  );
}

export default memo( FormDialog);