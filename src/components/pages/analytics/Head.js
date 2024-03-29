import React from "react";
import SearchBar from "../../common/searchbar/SearchBar";
import { Stack, Button } from "@mui/material";
import { headStyles } from "./headStyles";
import BasicTabs from "./CustomTabPanel";
const Head = () => {
  return (
    <Stack direction="row" sx={{ ...headStyles.head }}>
      <SearchBar />
      <BasicTabs />
      <Stack direction="row" sx={{ ...headStyles.head }}>
        <Button
          variant="outlined"
          sx={{
            ...headStyles.headOutlinedButton,
            ...headStyles.headButton,
          }}
        >
          Filter By Date
        </Button>
      </Stack>
    </Stack>
  );
};

export default Head;
