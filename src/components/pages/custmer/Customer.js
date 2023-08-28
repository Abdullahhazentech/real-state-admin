import React, { useState } from "react";
import Head from "./Head";
import { Grid, Typography, Stack, Box } from "@mui/material";
import CustomerCard from "./CustomerCard";
import CustomPagination from "../../common/pagination/CustomPagination";
import { customerData } from "./customerData";
import "../../common/pagination/pagination.css";
const Customer = () => {
  const itemsPerPage=12;
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentCustomerData=customerData.slice(itemOffset, endOffset);
  const updateOffset=(offset)=>{
    setItemOffset(offset);
  }
  return (
    <>
      <Head />
      <Grid container spacing={2} sx={{ marginTop: "0.5rem" }}>
        {currentCustomerData.map((customer, index) => {
          const { name, id, profilePicture, location } = customer;
          return (
            <>
              <Grid key={index} item xs={12} sm={6} md={3}>
                <CustomerCard
                  name={name}
                  id={id}
                  profilePicture={profilePicture}
                  location={location}
                />
              </Grid>
            </>
          );
        })}
      </Grid>
      <CustomPagination itemsPerPage={itemsPerPage} length={customerData.length} updateOffset={updateOffset}/>
    </>
  );
};

export default Customer;
