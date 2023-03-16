import React from "react";
import { Typography, Button, Box } from "@mui/material";

const Navbar = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      sx={{ height: "50px", backgroundColor: "#003580" }}
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        sx={{ width: "100%", maxWidth: "1024px", color: "white" }}
      >
        <Typography
          variant="span"
          sx={{ fontFamily: "Poppins, sans-serif", fontWeight: "500", fontSize: "22px" }}
        >
          Bookingclone
        </Typography>
        <Box display="flex" alignItems="center" gap="10px">
          <Button
            sx={{
              backgroundColor: "white",
              borderRadius: "0px",
              fontSize: "13px",
              textTransform: "none",
              border: "none",
              "&:hover":{
                backgroundColor: "rgb(214, 242, 255)",
              }
            }}
          >
            S'inscire
          </Button>
          <Button
            sx={{
              backgroundColor: "white",
              borderRadius: "0px",
              fontSize: "13px",
              textTransform: "none",
              border: "none",
              "&:hover":{
                backgroundColor: "rgb(214, 242, 255)",
              }
            }}
          >
            Se connecter
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
