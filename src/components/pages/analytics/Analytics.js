import React,{useState} from "react";
import { Stack } from "@mui/material";
import Head from "./Head";
import AnalyticsCard from "./AnalyticsCard";
import { analyticsCardData } from "./analyticsCardData";
import CustomPagination from "../../common/pagination/CustomPagination";
const Analytics = () => {
  const itemsPerPage=4;
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentAnalyticsData=analyticsCardData.slice(itemOffset, endOffset);
  const updateOffset=(offset)=>{
    setItemOffset(offset);
  }
  return (
    <>
      <Head />
      <Stack spacing={2} sx={{ marginTop: "0.5rem" }}>
        {currentAnalyticsData.map((analyticsCard, index) => {
          const { profilePicture, id, name, joinDate, tabs, rating, paragraph } =
            analyticsCard;
          return (
            <>
              <AnalyticsCard
                key={index}
                profilePicture={profilePicture}
                id={id}
                name={name}
                joinDate={joinDate}
                tabs={tabs}
                rating={rating}
                paragraph={paragraph}
              />
            </>
          );
        })}
      </Stack>
      <CustomPagination itemsPerPage={itemsPerPage} length={analyticsCardData.length} updateOffset={updateOffset}/>
    </>
  );
};

export default Analytics;
