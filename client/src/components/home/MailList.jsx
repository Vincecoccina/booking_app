import { Box, Typography, InputBase, Button } from "@mui/material";
import React from "react";

const MailList = () => {
  return (
    <Box sx={{ width: "100%", height: "200px", backgroundColor: "#012359" }}>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        gap="20px"
        sx={{ width: "70%", height: "100%", margin: "0 auto" }}
      >
        <Box sx={{ textAlign: "center" }}>
          <Typography
            sx={{ color: "white", fontSize: "25px", fontWeight: "300" }}
          >
            Gagnez du temps et de l'argent !
          </Typography>
          <Typography
            sx={{ color: "#f1f1f1", fontSize: "16px", fontWeight: "300" }}
          >
            Inscrivez-vous et nous vous enverrons les meilleures offres
          </Typography>
        </Box>
        <Box display="flex" alignItems="center" sx={{ width: "50%" }}>
          <InputBase
          placeholder="Votre adresse e-mail"
            sx={{ backgroundColor: "white", width: "70%", height: "45px" }}
          />
          <Button
            sx={{ width: "30%", height: "45px", backgroundColor: "#009fe3", color: "white"}}
          >
            Abonnez-vous !
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default MailList;
