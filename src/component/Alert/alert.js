import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { useState } from 'react';

export default function ActionAlerts() {
    const [close, setClose] = useState(false)
    const isClose = close ? "none" : "flex"
  return (
    <Stack display={isClose} sx={{ width: '100%', marginTop:"70px", marginRight: "20px"}} spacing={2}>
      <Alert data-aos="fade-up" data-aos-duration="1000" severity='warning' onClose={() => {setClose(true)}}>This website is currently undergoing beta testing. Thank you for your patience and understanding. </Alert>
    </Stack>
  );
}