import React, { useEffect, useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import {
  LocationOnOutlined,
  LocationOn,
  Pool,
  Deck,
  ArrowBackIos,
  ArrowForwardIos,
  Close,
} from "@mui/icons-material";


const HotelDetails = () => {
  const [slider, setSlider] = useState(0);
  const [openModal, setOpenModal] = useState(false);


  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/149538780.jpg?k=c5277780841e987372416eb094372bb78c6e568764ade6cedba1064bda55a216&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/160945894.jpg?k=ffa3abadc7edd8ebe48ef9b98a6ce3fb21190fda7dd0c693ebf79e4f0d4393b2&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/161514857.jpg?k=116821defa675af5b4c8ff6e95b5e4e261555b193f9890104e87e46eacd55ffb&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/160945575.jpg?k=4f27b8246386b83ce5e9cc698ff99a44669da0426b619db3a6054ab5d515a511&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/160945896.jpg?k=a091a9dd7a31ed81cf2571de6173c186cea16af0864fd01a01b52099edcef2ff&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/161514860.jpg?k=f0bdd4f0a83ea2c69576c258a1c23610ab3cbb92e40293b2ea9316fbd4d787f5&o=&hp=1",
    },
  ];

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown, true)
  }, [])

  
  const handleModal = (index) => {
    setSlider(index);
    setOpenModal(true);
  };

const handleKeyDown = (e) =>{
  if(e.key === "ArrowLeft"){
    setSlider((slide) => slide === 0 ? 5 : slide - 1)
  }
  if(e.key === "ArrowRight"){
    setSlider((slide) => slide === 5 ? 0 : slide + 1)
  }

  
}
  const handleSlider = (direction) => {
    let newIndex;
  
    if (direction === "back") {
      newIndex = slider === 0 ? 5 : slider - 1;
    } 
    if(direction === "forward") {
      newIndex = slider === 5 ? 0 : slider + 1;
    }
    setSlider(newIndex);
  };

  return (
    <section>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Box sx={{ width: "100%", maxWidth: "1024px" }}>
          {openModal && (
            <Box
              display="flex"
              justifyContent="center"
              onKeyDown={handleKeyDown}
              sx={{
                width: "100%",
                padding: "15px 10px",
                position: "fixed",
                top: "0",
                left: "0",
                bottom: "0",
                right: "0",
                zIndex: "15",
                backgroundColor: "rgba(0,0,0,0.4)",
                margin: "auto",
              }}
            >
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-around"
                position="relative"
                sx={{ backgroundColor: "white", width: "90%" }}
              >
                <Box position="absolute" sx={{ right: "20px", top: "20px" }}>
                  <Button
                    onClick={() => setOpenModal(false)}
                    endIcon={<Close style={{ fontSize: "25px" }} />}
                    sx={{
                      border: "none",
                      textTransform: "none",
                      color: "#333",
                    }}
                  >
                    Fermer
                  </Button>
                </Box>
                <Box onClick={() => handleSlider("back")}>
                  <ArrowBackIos
                    style={{
                      fontSize: "50px",
                      color: "grey",
                      cursor: "pointer",
                    }}
                  />
                </Box>
                <img src={photos[slider].src} alt="" style={{ width: "60%" }} />
                <Box onClick={() => handleSlider("forward")}>
                  <ArrowForwardIos
                    style={{
                      fontSize: "50px",
                      color: "grey",
                      cursor: "pointer",
                    }}
                  />
                </Box>
              </Box>
            </Box>
          )}
          <Typography variant="h1" sx={{ fontSize: "25px", fontWeight: "700" }}>
            Surin Majestic Hotel
          </Typography>
          <Box display="flex" alignItems="center" sx={{ margin: "10px 0" }}>
            <LocationOn sx={{ color: "#1976d2" }} />
            <Box display="flex" alignItems="center" gap="5px">
              <Typography variant="span">
                99 Jitbumrung Road Nai Muang Muang Surin , 32000 Surin,
                Thaïlande -
              </Typography>
              <Typography
                variant="span"
                sx={{ fontWeight: "800", color: "#1976d2", fontSize: "15px" }}
              >
                Très bon emplacement - voir la carte
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box
          display="flex"
          flexWrap="wrap"
          gap="5px"
          sx={{ width: "100%", maxWidth: "1024px" }}
        >
          {photos.map((item, i) => (
            <Box sx={{ width: "33%" }}>
              <img
                onClick={() => handleModal(i)}
                src={item.src}
                alt=""
                style={{ width: "100%" }}
              />
            </Box>
          ))}
        </Box>

        <Box
          display="flex"
          gap="50px"
          sx={{ width: "100%", maxWidth: "1024px", marginTop: "40px" }}
        >
          <Box flex="2">
            <Typography variant="p" sx={{ fontSize: "13px" }}>
              Situé à Surin, le Surin Majestic Hotel dispose d'une salle de
              sport et d'un jardin. Il possède une réception ouverte 24h/24 et
              un restaurant. L'établissement propose un service de voiturier et
              une bagagerie. <br />
              <br /> Tous les logements du Surin Majestic Hotel sont équipés
              d'une télévision à écran plat. Toutes les chambres disposent d'une
              bouilloire et d'une salle de bains privative. Certaines possèdent
              un balcon. Toutes les chambres du Surin Majestic Hotel comprennent
              la climatisation et un bureau. <br />
              <br /> Un petit-déjeuner buffet est servi chaque matin. <br />
              <br /> Le Surin Majestic Hotel possède une piscine extérieure.{" "}
              <br />
              <br /> Vous séjournerez à 44 km de Buriram. L'aéroport de Buri Ram
              est implanté à 46 km. <br />
              <br /> Les couples apprécient particulièrement l'emplacement de
              cet établissement. Ils lui donnent la note de 8,9 pour un séjour à
              deux.
            </Typography>
          </Box>
          <Box
            flex="1"
            display="flex"
            flexDirection="column"
            sx={{ backgroundColor: "#cffaf1", padding: "15px" }}
          >
            <Typography
              variant="span"
              sx={{ fontWeight: "800", marginBottom: "15px" }}
            >
              Points forts de l'établissement
            </Typography>
            <Typography
              variant="span"
              sx={{ fontWeight: "800", marginBottom: "10px", fontSize: "15px" }}
            >
              Parfait pour un séjour de 15 nuits !
            </Typography>
            <Box display="flex" marginBottom="30px">
              <LocationOnOutlined />
              <Typography
                variant="span"
                sx={{ fontSize: "12px", fontWeight: "400" }}
              >
                Bonne situation géographique : très bien notée par de récents
                voyageurs (8,9)
              </Typography>
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              gap="20px"
              marginBottom="30px"
            >
              <Typography
                variant="span"
                sx={{ fontSize: "15px", fontWeight: "800" }}
              >
                Infos concernant le petit-déjeuner
              </Typography>
              <Typography
                variant="span"
                sx={{ fontSize: "12px", fontWeight: "400" }}
              >
                Asiatique, Américain
              </Typography>
            </Box>
            <Box sx={{ fontSize: "15px", fontWeight: "800" }}>
              <Typography variant="span">Hébergements avec :</Typography>
              <Box
                sx={{ marginTop: "20px" }}
                display="flex"
                alignItems="center"
                gap="5px"
              >
                <Deck />
                <Typography sx={{ fontSize: "12px", fontWeight: "400" }}>
                  Terrasse
                </Typography>
              </Box>
              <Box display="flex" alignItems="center" gap="5px">
                <Pool />
                <Typography sx={{ fontSize: "12px", fontWeight: "400" }}>
                  Vue sur la piscine
                </Typography>
              </Box>
              <Box display="flex" alignItems="center" gap="5px">
                <Pool />
                <Typography sx={{ fontSize: "12px", fontWeight: "400" }}>
                  Piscine avec vue
                </Typography>
              </Box>
              <Button
                sx={{
                  textTransform: "none",
                  backgroundColor: "#1976d2",
                  marginTop: "30px",
                  width: "100%",
                  color: "white",
                  whiteSpace: "nowrap",
                  padding: "8px 15px",
                  zIndex: "10",
                  "&:hover": {
                    backgroundColor: "#1976d2",
                    filter: "brightness(0.8)",
                  },
                }}
              >
                Réserver
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </section>
  );
};

export default HotelDetails;
