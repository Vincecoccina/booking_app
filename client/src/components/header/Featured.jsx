import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Link,
  InputBase,
  InputAdornment,
  Button,
} from "@mui/material";

import {
  BedOutlined,
  LocalAirportOutlined,
  DateRangeOutlined,
  PersonOutlineOutlined,
  Luggage,
  DriveEta,
  Attractions,
  Hail,
} from "@mui/icons-material";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { format } from "date-fns";
import fr from "date-fns/locale/fr";

const Featured = () => {
  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const navigate = useNavigate();
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 2,
    children: 0,
    room: 1,
  });

  const handleOptions = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]:
          operation === "increase" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const handleSearch = () => {
    navigate("/hotels", {state: {destination, date, options}});
  };

  return (
    <>
      {/* NAVBAR */}
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        sx={{
          backgroundColor: "#003580",
          color: "white",
          position: "relative",
        }}
      >
        <Box
          display="flex"
          alignItems="center"
          gap="40px"
          sx={{ width: "100%", maxWidth: "1024px", margin: "20px 0 100px 0" }}
        >
          <Box>
            <Link
              href="/hotels"
              display="flex"
              alignItems="center"
              gap="5px"
              sx={{ color: "white", textDecoration: "none" }}
            >
              <BedOutlined />
              <Typography variant="span">Hébergements</Typography>
            </Link>
          </Box>

          <Box>
            <Link
              href="/hotels"
              display="flex"
              alignItems="center"
              gap="5px"
              sx={{ color: "white", textDecoration: "none" }}
            >
              <LocalAirportOutlined />
              <Typography variant="span">Vols</Typography>
            </Link>
          </Box>

          <Box>
            <Link
              href="/hotels"
              display="flex"
              alignItems="center"
              gap="5px"
              sx={{ color: "white", textDecoration: "none" }}
            >
              <Luggage />
              <Typography variant="span">Vols + Hotels</Typography>
            </Link>
          </Box>

          <Box>
            <Link
              href="/hotels"
              display="flex"
              alignItems="center"
              gap="5px"
              sx={{ color: "white", textDecoration: "none" }}
            >
              <DriveEta />
              <Typography variant="span">Voitures de location</Typography>
            </Link>
          </Box>

          <Box>
            <Link
              href="/hotels"
              display="flex"
              alignItems="center"
              gap="5px"
              sx={{ color: "white", textDecoration: "none" }}
            >
              <Attractions />
              <Typography variant="span">Attractions</Typography>
            </Link>
          </Box>

          <Box>
            <Link
              href="/hotels"
              display="flex"
              alignItems="center"
              gap="5px"
              sx={{ color: "white", textDecoration: "none" }}
            >
              <Hail />
              <Typography variant="span">Taxi aéroport</Typography>
            </Link>
          </Box>
        </Box>

        {/* TEXT HEADER */}
        <Box
          sx={{
            width: "100%",
            maxWidth: "1024px",
            marginBottom: "70px",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: "45px",
              fontWeight: "700",
              fontFamily: "Poppins, sans-serif",
            }}
          >
            Trouvez votre prochain séjour
          </Typography>
          <Typography
            variant="p"
            sx={{ fontSize: "20px", fontFamily: "Poppins, sans-serif" }}
          >
            Recherchez des offres sur des hôtels, des hébergements indépendants
            et plus <br /> encore
          </Typography>
        </Box>

        {/* SEARCH BAR */}
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          sx={{
            height: "60px",
            width: "100%",
            maxWidth: "1024px",
            backgroundColor: "white",
            border: "5px solid #feba02",
            position: "absolute",
            bottom: "-30px",
          }}
        >
          <Box sx={{ marginLeft: "10px", width: "30%" }}>
            <InputBase
              onChange={(e) => setDestination(e.target.value)}
              variant="standard"
              placeholder="Où allez-vous"
              startAdornment={
                <InputAdornment position="start">
                  <BedOutlined sx={{ color: "grey" }} />
                </InputAdornment>
              }
            />
          </Box>
          <Box
            sx={{ height: "60px", width: "5px", backgroundColor: "#feba02" }}
          ></Box>
          <Box sx={{ position: "relative", width: "28%" }}>
            <Button
              onClick={() => setOpenDate((prev) => !prev)}
              sx={{ textTransform: "none", color: "#333" }}
            >
              <DateRangeOutlined sx={{ marginRight: "5px", color: "grey" }} />
              {`${format(date[0].startDate, "EEEdd MMMM", {
                locale: fr,
              })} - ${format(date[0].endDate, "EEEdd MMMM", { locale: fr })} `}
            </Button>
            {openDate && (
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                minDate={new Date()}
                ranges={date}
                className="date"
              />
            )}
          </Box>

          <Box
            sx={{ height: "60px", width: "5px", backgroundColor: "#feba02" }}
          ></Box>
          <Box position="relative" sx={{ width: "28%" }}>
            <Button
              sx={{ textTransform: "none", color: "#333" }}
              onClick={() => setOpenOptions((prev) => !prev)}
            >
              <PersonOutlineOutlined
                sx={{ marginRight: "5px", color: "grey" }}
              />
              {`${options.adult} adultes . ${options.children} enfant . ${options.room} chambre`}
            </Button>
            {openOptions && (
              <Box
                position="absolute"
                display="flex"
                flexDirection="column"
                gap="5px"
                top="55px"
                right="0"
                sx={{
                  width: "130%",
                  height: "270px",
                  padding: "30px",
                  backgroundColor: "white",
                  boxShadow: " 0px 0px 15px rgba(0,0,0,0.3)",
                  zIndex: "999",
                }}
              >
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography variant="span" sx={{ color: "black" }}>
                    Adultes
                  </Typography>
                  <Box
                    sx={{ border: "2px solid LightGrey", borderRadius: "3px" }}
                  >
                    <Button
                      disabled={options.adult <= 1}
                      sx={{ fontSize: "18px" }}
                      onClick={() => handleOptions("adult", "decrease")}
                    >
                      -
                    </Button>
                    <Typography
                      variant="span"
                      sx={{ color: "black", fontSize: "14px" }}
                    >
                      {options.adult}
                    </Typography>
                    <Button
                      sx={{ fontSize: "18px" }}
                      onClick={() => handleOptions("adult", "increase")}
                    >
                      +
                    </Button>
                  </Box>
                </Box>

                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography variant="span" sx={{ color: "black" }}>
                    Enfants
                  </Typography>
                  <Box
                    sx={{ border: "2px solid LightGrey", borderRadius: "3px" }}
                  >
                    <Button
                      disabled={options.children <= 0}
                      sx={{ fontSize: "18px" }}
                      onClick={() => handleOptions("children", "decrease")}
                    >
                      -
                    </Button>
                    <Typography
                      variant="span"
                      sx={{ color: "black", fontSize: "14px" }}
                    >
                      {options.children}
                    </Typography>
                    <Button
                      sx={{ fontSize: "18px" }}
                      onClick={() => handleOptions("children", "increase")}
                    >
                      +
                    </Button>
                  </Box>
                </Box>

                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography variant="span" sx={{ color: "black" }}>
                    Chambres
                  </Typography>
                  <Box
                    sx={{ border: "2px solid LightGrey", borderRadius: "3px" }}
                  >
                    <Button
                      disabled={options.room <= 1}
                      sx={{ fontSize: "18px" }}
                      onClick={() => handleOptions("room", "decrease")}
                    >
                      -
                    </Button>
                    <Typography
                      variant="span"
                      sx={{ color: "black", fontSize: "14px" }}
                    >
                      {options.room}
                    </Typography>
                    <Button
                      sx={{ fontSize: "18px" }}
                      onClick={() => handleOptions("room", "increase")}
                    >
                      +
                    </Button>
                  </Box>
                </Box>
                <Button
                  sx={{
                    margin: "15px 0",
                    backgroundColor: "none",
                    border: "1px solid #009fe3",
                    textTransform: "none",
                  }}
                >
                  Terminer
                </Button>
              </Box>
            )}
          </Box>
          <Box
            sx={{ height: "60px", width: "5px", backgroundColor: "#feba02" }}
          ></Box>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            sx={{
              backgroundColor: "#1976d2",
              height: "52px",
              padding: "10px 20px",
              width: "15%",
              cursor: "pointer",
            }}
          >
            <Typography
              sx={{ fontSize: "20px", fontWeight: "600" }}
              onClick={handleSearch}
            >
              Rechercher
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Featured;
