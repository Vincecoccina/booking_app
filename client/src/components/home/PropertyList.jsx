import React from "react";
import { Box, Typography } from "@mui/material";

const PropertyList = () => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      gap="20px"
      sx={{ width: "100%", maxWidth: "1024px" }}
    >
    
      <Box flex="1" sx={{ overflow: "hidden" }}>
        <img
          style={{
            width: "100%",
            height: "150px",
            objectFit: "cover",
          }}
          src="https://r-xx.bstatic.com/xdata/images/city/300x240/613088.jpg?k=a370ac3fb385fb211b35a79a42b0e968ddb458be37108af476c558bf4cedc1f3&o="
          alt=""
        />
        <Typography variant="h5" sx={{fontSize: "15px", fontWeight: "bold"}}>Paris</Typography>
        <Typography variant="p" sx={{fontSize: "13px", color: "grey"}}>7 555 établissements</Typography>
      </Box>

      <Box flex="1" sx={{ overflow: "hidden" }}>
        <img
        style={{
            width: "100%",
            height: "150px",
            objectFit: "cover",
          }}
          src="https://q-xx.bstatic.com/xdata/images/city/300x240/681777.jpg?k=a0dff5d5a41b8e0e548473039e2a15c5a86e396b7e54ef6ed8a4dec4ad903ea1&o="
          alt=""
        />
        <Typography variant="h5" sx={{fontSize: "15px", fontWeight: "bold"}}>Marseille</Typography>
        <Typography variant="p" sx={{fontSize: "13px", color: "grey"}}>7 555 établissements</Typography>
      </Box>

      <Box flex="1" sx={{ overflow: "hidden" }}>
        <img
        style={{
            width: "100%",
            height: "150px",
            objectFit: "cover",
          }}
          src="https://q-xx.bstatic.com/xdata/images/city/300x240/681685.jpg?k=046e119fb2ae20027ddb8be50ebfb8f512a452b1ef7ab5751b8c202c58dcbb63&o="
          alt=""
        />
        <Typography variant="h5" sx={{fontSize: "15px", fontWeight: "bold"}}>Lyon</Typography>
        <Typography variant="p" sx={{fontSize: "13px", color: "grey"}}>7 555 établissements</Typography>
      </Box>

      <Box flex="1" sx={{ overflow: "hidden" }}>
        <img
        style={{
            width: "100%",
            height: "150px",
            objectFit: "cover",
          }}
          src="https://q-xx.bstatic.com/xdata/images/city/300x240/681831.jpg?k=e6e0066f87dc775fed7eb11af4e7f96d554098a8ae3f50dcc37b918ab8777d5a&o="
          alt=""
        />
        <Typography variant="h5" sx={{fontSize: "15px", fontWeight: "bold"}}>Nice</Typography>
        <Typography variant="p" sx={{fontSize: "13px", color: "grey"}}>7 555 établissements</Typography>
      </Box>

      <Box flex="1" sx={{ overflow: "hidden" }}>
        <img
        style={{
            width: "100%",
            height: "150px",
            objectFit: "cover",
          }}
          src="https://q-xx.bstatic.com/xdata/images/city/300x240/674851.jpg?k=d337fa26f1057a1b45b55d59b228a23fb2916b8e8ec396b699c65c05c0b8fb41&o="
          alt=""
        />
        <Typography variant="h5" sx={{fontSize: "15px", fontWeight: "bold"}}>Annecy</Typography>
        <Typography variant="p" sx={{fontSize: "13px", color: "grey"}} >595 établissements</Typography>
      </Box>

      <Box flex="1" sx={{ overflow: "hidden" }}>
        <img
        style={{
            width: "100%",
            height: "150px",
            objectFit: "cover",
          }}
          src="https://q-xx.bstatic.com/xdata/images/city/300x240/674924.jpg?k=163342ccd650196a1c9b542302a96b46f9034ce721f9b79dabdb5ca0383fbac8&o="
          alt=""
        />
        <Typography variant="h5" sx={{fontSize: "15px", fontWeight: "bold"}}>Bordeaux</Typography>
        <Typography variant="p" sx={{fontSize: "13px", color: "grey"}}>930 établissements</Typography>
      </Box>

    </Box>
  );
};

export default PropertyList;
