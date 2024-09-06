import React, { useState,memo } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button } from '@mui/material';

const AddMenuItemDialog = ({ open, onClose, onAddMenuItem }:any) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  const handleAdd = () => {
    if (!name || !price) {

      return;
    }

    const newItem = { name, price: parseFloat(price), description, image };
    onAddMenuItem(newItem);
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add New Menu Item</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Name"
          fullWidth
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          margin="dense"
          label="Price"
          fullWidth
          variant="outlined"
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <TextField
          margin="dense"
          label="Description"
          fullWidth
          variant="outlined"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <TextField
          margin="dense"
          label="Image URL"
          fullWidth
          variant="outlined"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleAdd}>Add</Button>
      </DialogActions>
    </Dialog>
  );
};

export default memo( AddMenuItemDialog);
