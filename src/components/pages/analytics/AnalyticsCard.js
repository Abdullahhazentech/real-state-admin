import React from "react";
import { Stack, Typography, Box, Chip, Rating, Button } from "@mui/material";
import { analyticsCardStyles } from "./analyticsCardStyles";
const AnalyticsCard = ({
  profilePicture,
  id,
  name,
  joinDate,
  paragraph,
  tabs,
  rating,
}) => {
  return (
    <Box sx={{ ...analyticsCardStyles.cardContainer }}>
      <Box sx={{ ...analyticsCardStyles.box1 }}>
        <img
          style={{ ...analyticsCardStyles.pofilePicture }}
          src={profilePicture}
        />
        <Box>
          <Typography variant="h6" sx={{ ...analyticsCardStyles.box1Text1 }}>
            {id}
          </Typography>
          <Typography variant="h3" sx={{ ...analyticsCardStyles.box1Text2 }}>
            {name}
          </Typography>
          <Typography variant="body2" sx={{ ...analyticsCardStyles.box1Text3 }}>
            {joinDate}
          </Typography>
        </Box>
      </Box>
      <Box sx={{ ...analyticsCardStyles.box2 }}>
        <Typography variant="h6" sx={{ ...analyticsCardStyles.box2Text }}>
          {/* Friendly service <br />
          Josh, Lunar and everyone at Just Property in Hastings deserved a big
          Thank You from us for moving us from Jakarta to Medan during the
          lockdown. */}
          {paragraph}
        </Typography>
        <Stack direction="row" spacing={1} marginTop="0.5rem">
          {tabs.map((tab, index) => {
            const {value,color}=tab;
            return(
              <Chip
              key={index}
              sx={{ ...analyticsCardStyles.tagStyle,color:{color} }}
              label={value}
              variant="outlined"
            />
            );
            
          })}
        </Stack>
      </Box>
      <Box sx={{ ...analyticsCardStyles.box3 }}>
        <Box sx={{ ...analyticsCardStyles.box3Box }}>
          <Typography
            variant="h2"
            sx={{ ...analyticsCardStyles.box3RatingText }}
          >
            {rating}
          </Typography>
          <Rating
            name="size-medium"
            defaultValue={3}
            readOnly
            value={rating}
            precision={0.5}
          />
        </Box>
        <Stack direction="row" spacing={1} marginTop="0.5rem">
          <Button variant="outlined" sx={{...analyticsCardStyles.box3ArchieveButton}}>
            Archieve
          </Button>
          <Button variant="contained" sx={{...analyticsCardStyles.box3ApproveButton}}>
            Approve
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default AnalyticsCard;
