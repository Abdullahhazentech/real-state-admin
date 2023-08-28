import React from "react";
import { Stack, CardContent, Typography, Box } from "@mui/material";
import { cardStyles } from "./cardStyles";
const CustomerCard = ({ name, id, profilePicture,location }) => {
  return (
    <Box sx={{ ...cardStyles.cardContainer }}>
      <Stack direction="row" sx={{ ...cardStyles.upperCard }}>
        <Stack direction="row">
          <img
            style={{ ...cardStyles.profilePicture }}
            src={profilePicture}
            alt=""
          />
          <Stack sx={{ justifyContent: "space-between" }}>
            <Typography variant="h4" sx={{ ...cardStyles.customerName }}>
              {name}
            </Typography>
            <Typography variant="body2" sx={{ ...cardStyles.customerID }}>
              {id}
            </Typography>
            <Stack direction="row" sx={{ justifyContent: "space-between" }}>
              <img
                style={{ ...cardStyles.iconStyle }}
                src="../customer/phoneCall.svg"
                alt=""
              />
              <img
                style={{ ...cardStyles.iconStyle }}
                src="../customer/videoCamera.svg"
                alt=""
              />
              <img
                style={{ ...cardStyles.iconStyle }}
                src="../customer/messages.svg"
                alt=""
              />
            </Stack>
          </Stack>
        </Stack>

        <img
          style={{ ...cardStyles.iconStyle }}
          src="../customer/moreVertical.svg"
          alt=""
        />
      </Stack>
      <Box>
        <Typography variant="h6" sx={{ ...cardStyles.location }}>
          Location
        </Typography>
        <Typography variant="h5" sx={{ ...cardStyles.locationValue }}>
          {location}
        </Typography>
      </Box>
    </Box>
  );
};

export default CustomerCard;
