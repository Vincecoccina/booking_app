import React from "react";
import { Box, Typography } from "@mui/material";
import FeaturedList from "../components/home/FeaturedList";
import PropertyList from "../components/home/PropertyList";
import CustomerList from "../components/home/CustomerList";
import MailList from "../components/home/MailList";

const HomePage = () => {
  return (
    <section>
      <Box display="flex" flexDirection="column" alignItems="center" gap="30px">
        <Typography
          variant="h5"
          sx={{
            width: "100%",
            maxWidth: "1024px",
            fontSize: "25px",
            fontWeight: "bold",
          }}
        >
          Explorez la France
        </Typography>
        <PropertyList />
        <FeaturedList />
        <Typography
          variant="h5"
          sx={{
            width: "100%",
            maxWidth: "1024px",
            fontSize: "25px",
            fontWeight: "bold",
          }}
        >
          Les hébergements que les clients adorent
        </Typography>
        <CustomerList/>
        <MailList/>
      </Box>
    </section>
  );
};

export default HomePage;
