import React from 'react';
import { Button } from '@mui/material';
import { CalendarToday } from '@mui/icons-material';

const YearSelector = () => {
  return (
    <Button
      variant="outlined"
      startIcon={<CalendarToday />}
      className="mr-2 border-gray-300 text-black bg-white"
    >
      2022
    </Button>
  );
};

export default YearSelector;
