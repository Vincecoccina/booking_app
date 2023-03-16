import React, { useState } from "react";
import {
  Box,
  Typography,
  InputBase,
  InputLabel,
  InputAdornment,
  Button,
} from "@mui/material";
import { useLocation } from "react-router-dom";
import { Search } from "@mui/icons-material";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import fr from "date-fns/locale/fr";
import SearchItem from "../components/seacrh/SearchItem";

const HotelsList = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [Opendate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);

  return (
    <section>
      <Box display="flex" justifyContent="center">
        <Box
          display="flex"
          gap="20px"
          sx={{ width: "100%", maxWidth: "1024px" }}
        >
          {/* LEFT SIDE */}
          <Box
            sx={{
              flex: "1",
              backgroundColor: "#feba02",
              padding: "20px 15px",
              borderRadius: "3px",
              height:"max-content"
            }}
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: "20px",
                fontWeight: 700,
                color: "#333",
                marginBottom: "10px",
              }}
            >
              Rechercher
            </Typography>
            <Box sx={{ marginBottom: "15px" }}>
              <InputLabel sx={{ fontSize: "13px", color: "black" }}>
                Destination
              </InputLabel>
              <InputBase
                type="text"
                value={destination}
                placeholder="Où allez-vous ?"
                sx={{
                  backgroundColor: "white",
                  color: "black",
                  height: "40px",
                  width: "100%",
                }}
                startAdornment={
                  <InputAdornment position="start">
                    <Search sx={{ color: "grey" }} />
                  </InputAdornment>
                }
              />
            </Box>
            <Box>
              <InputLabel sx={{ fontSize: "13px", color: "black" }}>
                Date
              </InputLabel>
              <Button
                onClick={() => setOpenDate((prev) => !prev)}
                sx={{
                  backgroundColor: "white",
                  color: "black",
                  height: "40px",
                  width: "100%",
                  borderRadius: "0",
                  "&:hover": {
                    backgroundColor: "white",
                  },
                }}
              >
                {" "}
                {`${format(date[0].startDate, "EEEdd MMMM", {
                  locale: fr,
                })} - ${format(date[0].endDate, "EEEdd MMMM", {
                  locale: fr,
                })} `}
              </Button>
              {Opendate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </Box>

            <Box sx={{ marginTop: "15px" }}>
              <Button
                sx={{
                  backgroundColor: "white",
                  color: "black",
                  height: "40px",
                  width: "100%",
                  textTransform: "none",
                  borderRadius: "0",
                  "&:hover": {
                    backgroundColor: "white",
                  },
                }}
              >
                {`${options.adult} adultes . ${options.children} enfants . ${options.room} chambre`}
              </Button>
            </Box>
            <Box sx={{ marginTop: "15px" }}>
              <Button
                sx={{
                  backgroundColor: "#1976d2",
                  width: "100%",
                  height: "50px",
                  color: "white",
                  textTransform: "none",
                  fontSize: "16px",
                  fontWeight: "400",
                }}
              >
                Rechercher
              </Button>
            </Box>
          </Box>

          {/* LEFT SIDE */}
          <Box sx={{ flex: "3" }} display="flex" flexDirection="column" gap="15px">
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
          </Box>
        </Box>
      </Box>
    </section>
  );
};

export default HotelsList;
