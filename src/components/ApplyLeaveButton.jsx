import React from 'react';
import { Button } from '@mui/material';

const ApplyLeaveButton = () => {
  return (
    <Button
      variant="contained"
      color="error"
      className="bg-red-500 text-white hover:bg-red-600 shadow-none"
    >
      + Apply Leave
    </Button>
  );
};

export default ApplyLeaveButton;
