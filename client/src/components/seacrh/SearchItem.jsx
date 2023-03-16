import React from "react";
import { Box, Typography, Button, Link } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const SearchItem = () => {
  return (
    <Link href="/hotels/:id">
      <Box
        display="flex"
        gap="15px"
        sx={{ border: "1px solid lightgrey", padding: "10px" }}
      >
        {/* DESCRIPTION */}

        <img
          style={{ width: "200px", height: "200px", objectFit: "cover" }}
          src="https://cf.bstatic.com/xdata/images/hotel/square600/149538780.webp?k=09a9b8b0eaab72a611c86826f4df6659fb94d5b18076a507e38db69f16284776&o=&s=1"
          alt=""
        />

        <Box display="flex" flex="2" gap="20px" flexDirection="column">
          <Box>
            <Typography
              variant="h4"
              sx={{ fontSize: "20px", color: "#1976d2", fontWeight: "700" }}
            >
              Surin Majestic Hotel
            </Typography>
            <Typography variant="span" sx={{ fontSize: "13px" }}>
              0,7 km du centre
            </Typography>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            sx={{ padding: "0 10px", borderLeft: "1px solid lightgrey" }}
          >
            <Typography
              variant="span"
              sx={{ fontSize: "13px", fontWeight: "700" }}
            >
              Chambre Lits Jumeaux Deluxe
            </Typography>
            <Typography variant="span" sx={{ fontSize: "12px", color: "#333" }}>
              2 lits simples
            </Typography>
            <Typography
              variant="span"
              sx={{
                fontSize: "12px",
                marginTop: "15px",
                color: "green",
                fontWeight: "700",
              }}
            >
              Annulation GRATUITE • Aucun prépaiement requis
            </Typography>
            <Typography
              variant="span"
              sx={{ fontSize: "12px", color: "green" }}
            >
              Vous pourrez annuler plus tard. N'attendez donc pas pour vous
              garantir ce super tarif aujourd'hui.
            </Typography>
          </Box>
        </Box>

        {/* DETAILS*/}
        <Box flex="1" display="flex" flexDirection="column" alignItems="end">
          {/* FIRST ROW */}
          <Box display="flex" gap="5px">
            <Box display="flex" flexDirection="column">
              <Typography variant="span" sx={{ textAlign: "end" }}>
                Très bien
              </Typography>
              <Typography
                variant="span"
                sx={{ fontSize: "12px", whiteSpace: "nowrap" }}
              >
                264 expériences vécues
              </Typography>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              sx={{
                backgroundColor: "#003580",
                width: "30px",
                height: "30px",
                padding: "10px",
                borderTopLeftRadius: "4px",
                borderTopRightRadius: "4px",
                borderBottomRightRadius: "4px",
              }}
            >
              <Typography variant="span" sx={{ color: "white" }}>
                8,1
              </Typography>
            </Box>
          </Box>

          {/* SECOND ROW */}
          <Box sx={{ textAlign: "end", marginTop: "10px" }}>
            <Typography
              variant="span"
              sx={{ fontSize: "15px", fontWeight: "600", color: "#1976d2" }}
            >
              Confort 8,4
            </Typography>
            <Box
              display="flex"
              flexDirection="column"
              gap="5px"
              sx={{ marginTop: "10px" }}
            >
              <Typography variant="span" sx={{ fontSize: "12px" }}>
                15 nuits, 2 adultes
              </Typography>
              <Typography
                variant="span"
                sx={{ fontSize: "20px", fontWeight: "500" }}
              >
                € 480
              </Typography>
              <Typography variant="span" sx={{ fontSize: "12px" }}>
                Taxes et frais compris
              </Typography>
            </Box>
            <Button
              endIcon={<ArrowForwardIosIcon style={{ fontSize: "10px" }} />}
              sx={{
                textTransform: "none",
                backgroundColor: "#1976d2",
                marginTop: "10px",
                color: "white",
                whiteSpace: "nowrap",
                padding: "8px 15px",
                "&:hover": {
                  backgroundColor: "#1976d2",
                  filter: "brightness(0.8)",
                },
              }}
            >
              Voir les disponibilités
            </Button>
          </Box>
        </Box>
      </Box>
    </Link>
  );
};

export default SearchItem;
