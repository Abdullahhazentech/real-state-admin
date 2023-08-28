import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import { searchStyles } from "./searchStyles";
import InputBase from "@mui/material/InputBase";

const Search = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  position: "relative",
  borderRadius: "0.8rem",
  border: "1px solid #EEE",
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  //marginRight: theme.spacing(2),
  //marginLeft: "10rem",
  width: "20rem",
  height: "2.2rem",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    //marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

// const SearchIconWrapper = styled("div")(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: "100%",
//   position: "absolute",
//   pointerEvents: "none",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
// }));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  fontSize:"0.75rem",
  "& .MuiInputBase-input": {
    //padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(0.5em + ${theme.spacing(1)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const SearchBar = () => {
  return (
    <Search>
      <StyledInputBase
        placeholder="Search here…"
        inputProps={{ "aria-label": "search" }}
      />
      <img
        style={{ ...searchStyles.iconSize }}
        src="../header/searchIcon.svg"
        alt=""
      />
    </Search>
  );
};

export default SearchBar;
