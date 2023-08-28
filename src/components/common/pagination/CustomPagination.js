import React, { useState } from "react";
import { Grid, Typography, Stack, Box } from "@mui/material";
import { Pagination } from "@mui/material";
import ReactPaginate from "react-paginate";
import { paginationStyles } from "./paginationStyles";
import "./pagination.css";


const CustomPagination = ({ itemsPerPage,length, updateOffset }) => {
  
  // Invoke when user click to request another page.
  const pageCount = Math.ceil(length / itemsPerPage);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    updateOffset(newOffset);
  };

  return (
    <Stack
        direction="row"
        sx={{
          justifyContent: "space-between",
          marginTop: "1rem",
          alignItems: "center",
        }}
      >
        <Typography
          variant="p"
          sx={{ ...paginationStyles.bottomText }}
        >{`Showing ${itemsPerPage} from ${length} data`}</Typography>
        <ReactPaginate
          nextLabel={
            <Box
              sx={{
                ...paginationStyles.next,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img src="/pagination/ic_chevron-next.svg" />
              <Typography sx={{ ...paginationStyles.nextText }}>
                next
              </Typography>
            </Box>
          }
          onPageChange={handlePageClick}
          pageRangeDisplayed={1}
          marginPagesDisplayed={2}
          pageCount={pageCount}
          pageClassName="listStyleNone page-item"
          previousClassName="previousStyle"
          previousLinkClassName="text-decoration-none"
          nextLinkClassName="text-decoration-none"
          nextClassName="nextStyle page-item"
          previousLabel={
            <Box
              sx={{
                ...paginationStyles.previous,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img src="/pagination/ic_chevron.svg" />
              <Typography sx={{ ...paginationStyles.previousText }}>
                previous
              </Typography>
            </Box>
          }
          renderOnZeroPageCount={null}
          containerClassName="d-flex justify-content-between align-items-center containerStyle pagination"
          pageLinkClassName="page-link"
          breakLabel=""
          activeClassName="active activeText"
        />
      </Stack>
  );
};

export default CustomPagination;
