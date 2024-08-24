import React from "react";
import { Card, CardContent, Typography, CircularProgress, Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const LeaveCard = ({ title, remaining, availed, color, total }) => {
  const progress = (availed / total) * 100;

  return (
    <Card className="bg-white shadow-lg rounded-lg">
      <CardContent>
        <Typography variant="h6" component="h3" className="text-center">
          {title}
        </Typography>
        <Box className="flex justify-center my-4">
          <Box position="relative" display="inline-flex">
            <CircularProgress
              variant="determinate"
              value={progress}
              size={70}
              thickness={4}
              style={{ color }}
            />
            <Box
              top={0}
              left={0}
              bottom={0}
              right={0}
              position="absolute"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Typography variant="h4" component="span" className={`text-${color}-600`}>
                {remaining}
              </Typography>
            </Box>
          </Box>
        </Box>
        <Typography variant="body2" className="text-center text-gray-600">
          {availed} Availed
        </Typography>
      </CardContent>
    </Card>
  );
};

const LeaveSlider = () => {
  const leaves = [
    { title: "Casual Leave", remaining: 8, availed: 4, color: "green", total: 12 },
    { title: "Privilege", remaining: 11, availed: 1, color: "blue", total: 12 },
    { title: "Sick Leave", remaining: 3, availed: 7, color: "orange", total: 10 },
    { title: "Comp off", remaining: 2, availed: 1, color: "pink", total: 3 },
    { title: "Casual Leave", remaining: 8, availed: 4, color: "green", total: 12 },
    { title: "Privilege", remaining: 11, availed: 1, color: "blue", total: 12 },
    { title: "Sick Leave", remaining: 3, availed: 7, color: "orange", total: 10 },
    { title: "Comp off", remaining: 2, availed: 1, color: "pink", total: 3 },
    { title: "Casual Leave", remaining: 8, availed: 4, color: "green", total: 12 },
    { title: "Privilege", remaining: 11, availed: 1, color: "blue", total: 12 },
    { title: "Sick Leave", remaining: 3, availed: 7, color: "orange", total: 10 },
    { title: "Comp off", remaining: 2, availed: 1, color: "pink", total: 3 },
 
  ];

  const slides = [];
  for (let i = 0; i < leaves.length; i += 4) {
    slides.push(
      <SwiperSlide key={i}>
        <div className="grid grid-cols-2 gap-4">
          {leaves.slice(i, i + 4).map((leave, index) => (
            <LeaveCard key={index} {...leave} />
          ))}
        </div>
      </SwiperSlide>
    );
  }

  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={1}
      pagination={{ clickable: true }}
      modules={[Pagination]}
      className="w-full"
    >
      {slides}
    </Swiper>
  );
};

export default LeaveSlider;
