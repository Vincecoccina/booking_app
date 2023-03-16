import React from "react";
import { Box, Typography } from "@mui/material";

const FeaturedList = () => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      gap="10px"
      sx={{ width: "100%", height: "250px", maxWidth: "1024px", zIndex: "1" }}
    >
      <Box position="relative" sx={{overflow: "hidden", height: "100%"}}>
        <img
          style={{
            width: "100%",
            objectFit: "cover",
            filter: "brightness(0.7)",
          }}
          src="https://cf.bstatic.com/xdata/images/city/600x600/681777.jpg?k=a0dff5d5a41b8e0e548473039e2a15c5a86e396b7e54ef6ed8a4dec4ad903ea1&o="
          alt=""
        />
        <Box position="absolute" sx={{ top: "20px", left: "10px" }}>
          <Typography
            variant="h1"
            sx={{ fontSize: "30px", color: "white", fontWeight: "bold" }}
          >
            Paris
          </Typography>
        </Box>
      </Box>

      <Box position="relative" sx={{overflow: "hidden", height: "100%"}}>
        <img
          style={{
            width: "100%",
            objectFit: "cover",
            filter: "brightness(0.7)",
          }}
          src="https://cf.bstatic.com/xdata/images/city/600x600/613095.jpg?k=8caf960d96a59e284ac1518ac8777e89d17fda6572acd84dbec151f627c7bf07&o="
          alt=""
        />
        <Box position="absolute" sx={{ top: "20px", left: "10px" }}>
          <Typography
            variant="h1"
            sx={{ fontSize: "30px", color: "white", fontWeight: "bold" }}
          >
            Marseille
          </Typography>
        </Box>
      </Box>

      <Box position="relative" sx={{overflow: "hidden", height: "100%"}}>
        <img
          style={{
            width: "100%",
            objectFit: "cover",
            filter: "brightness(0.7)",
          }}
          src="https://cf.bstatic.com/xdata/images/city/600x600/613095.jpg?k=8caf960d96a59e284ac1518ac8777e89d17fda6572acd84dbec151f627c7bf07&o="
          alt=""
        />
        <Box position="absolute" sx={{ top: "20px", left: "10px" }}>
          <Typography variant="h1" sx={{fontSize: '30px', color: "white", fontWeight: "bold"}}>
            Lyon
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default FeaturedList ;
