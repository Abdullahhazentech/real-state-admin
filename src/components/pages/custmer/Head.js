import React from "react";
import SearchBar from "../../common/searchbar/SearchBar";
import { Stack, Button } from "@mui/material";
import { customerStyles } from "./customerStyles";

const Head = () => {
  return (
    <Stack direction="row" sx={{ ...customerStyles.head }}>
      <SearchBar />
      <Stack direction="row" sx={{ ...customerStyles.head }}>
        <Button
          variant="outlined"
          sx={{
            ...customerStyles.headOutlinedButton,
            ...customerStyles.headButton,
          }}
        >
          Filter By Date
        </Button>
        <Button
          variant="contained"
          sx={{
            ...customerStyles.headContainedButton,
            ...customerStyles.headButton,
          }}
        >
          + Add New Customer{" "}
        </Button>
      </Stack>
    </Stack>
  );
};

export default Head;
