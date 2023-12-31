import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';



function ShippingInfoModal({onPlaceOrderSuccess}) {
  const [open, setOpen] = useState(false);
  const [shippingInfo, setShippingInfo] = useState({ first_name: '', last_name:'', 
    address1: '', address2:'', city:'', state:'', zip:'', country:'' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setShippingInfo({ ...shippingInfo, [name]: value });
  };

  // const handleSubmit = () => {
  //   fetch('http://localhost:5001/shipping-info', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(shippingInfo)
      
  //   })
  //   .then(response => {
  //     if (response.ok) {
  //       return response.json();
  //     }
  //     throw new Error('Network response was not ok.');
  //   })
  //   .then(data => {
  //     console.log('Success:', data);
  //     setOpen(false);
  //   })
  //   .catch((error) => {
  //     console.error('Error:', error);
  //   });
  // };

  const handlePlaceOrder = () => {
    onPlaceOrderSuccess();
  }
  // if (user) {
    return (
      <form onSubmit={handlePlaceOrder}>
          <Grid>
            <Typography variant="h5" align="left" gutterBottom>
                Shipping Information
            </Typography>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={6}>
                <TextField
                    required
                    id="firstName"
                    name="firstName"
                    label="First name"
                    fullWidth
                    autoComplete="given-name"
                    variant="standard"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                    required
                    id="lastName"
                    name="lastName"
                    label="Last name"
                    fullWidth
                    autoComplete="family-name"
                    variant="standard"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                    required
                    id="address1"
                    name="address1"
                    label="Address line 1"
                    fullWidth
                    autoComplete="shipping address-line1"
                    variant="standard"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                    id="address2"
                    name="address2"
                    label="Address line 2"
                    fullWidth
                    autoComplete="shipping address-line2"
                    variant="standard"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                    required
                    id="city"
                    name="city"
                    label="City"
                    fullWidth
                    autoComplete="shipping address-level2"
                    variant="standard"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                    id="state"
                    name="state"
                    label="State/Province/Region"
                    fullWidth
                    variant="standard"
              />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                    required
                    id="zip"
                    name="zip"
                    label="Zip / Postal code"
                    fullWidth
                    autoComplete="shipping postal-code"
                    variant="standard"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                    required
                    id="country"
                    name="country"
                    label="Country"
                    fullWidth
                    autoComplete="shipping country"
                    variant="standard"
                />
              </Grid>
            </Grid>
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Place Order
            </Button>
        </Grid>
      </form>
      
    );
  // } else {
  //   return <button>Sign In</button>;
  // }
  
}

export default ShippingInfoModal;
