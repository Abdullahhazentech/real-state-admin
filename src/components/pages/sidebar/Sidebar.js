import { Paper, Box, Typography } from "@mui/material";
import "./sidebar.css";
import { sidebarStyles } from "./sidebarStyles";
import { Link } from "react-router-dom";
import { useState } from "react";
const Sidebar = () => {
  const [activeTAB, setActiveTab] = useState(null);
  return (
    <>
      <Paper sx={{ ...sidebarStyles.sidebar }} elevation={2}>
        <img className="logo" src="../sidebar/logo.svg" alt="" />
        <Typography
          className="mainMenu"
          variant="p"
          component="h4"
          sx={{ marginTop: "1rem" }}
        >
          Main Menu
        </Typography>
        <Link
          to="/"
          onClick={() => setActiveTab("dashboard")}
          style={{
            textDecoration: "none",
            color: "#717579",
            "&:hover": {
              color: "white",
            },
          }}
        >
          <Box className={`options ${
              activeTAB === "dashboard" && "activeTabStyles"
            }`} sx={{ ...sidebarStyles.optionMargin }}>
            <img className="optionIcon" src="../sidebar/dashboard.svg" alt="" />
            <Typography variant="h5" sx={{ ...sidebarStyles.optionText }}>
              Dashboard
            </Typography>
          </Box>
        </Link>
        <Link
          to="/"
          onClick={() => setActiveTab("property")}
          style={{
            textDecoration: "none",
            color: "#717579",
            "&:hover": {
              color: "white",
            },
          }}
        >
          <Box className={`options ${
              activeTAB === "property" && "activeTabStyles"
            }`} sx={{ ...sidebarStyles.optionMargin }}>
            <img className="optionIcon" src="../sidebar/property.svg" alt="" />
            <Typography variant="h5" sx={{ ...sidebarStyles.optionText }}>
              Property
            </Typography>
          </Box>
        </Link>
        <Link
          to="/"
          onClick={() => setActiveTab("type")}
          style={{
            textDecoration: "none",
            color: "#717579",
            "&:hover": {
              color: "white",
            },
          }}
        >
          <Box className={`options ${
              activeTAB === "Type" && "activeTabStyles"
            }`} sx={{ ...sidebarStyles.optionMargin }}>
            <img className="optionIcon" src="../sidebar/type.svg" alt="" />
            <Typography variant="h5" sx={{ ...sidebarStyles.optionText }}>
              Type
            </Typography>
          </Box>
        </Link>
        <Link
          to="/transactions"
          onClick={() => setActiveTab("transactions")}
          style={{
            textDecoration: "none",
            color: "#717579",
            "&:hover": {
              color: "white",
            },
          }}
        >
          <Box className={`options ${
              activeTAB === "transactions" && "activeTabStyles"
            }`} sx={{ ...sidebarStyles.optionMargin }}>
            <img
              className="optionIcon"
              src="../sidebar/transactions.svg"
              alt=""
            />
            <Typography variant="h5" sx={{ ...sidebarStyles.optionText }}>
              Transactions
            </Typography>
          </Box>
        </Link>
        <Link
          to="/analytics"
          onClick={() => setActiveTab("analytics")}
          style={{
            textDecoration: "none",
            color: "#717579",
            "&:hover": {
              color: "white",
            },
          }}
        >
          <Box className={`options ${
              activeTAB === "analytics" && "activeTabStyles"
            }`} sx={{ ...sidebarStyles.optionMargin }}>
            <img className="optionIcon" src="../sidebar/analytics.svg" alt="" />
            <Typography variant="h5" sx={{ ...sidebarStyles.optionText }}>
              Analytics
            </Typography>
          </Box>
        </Link>
        <Typography
          className="mainMenu"
          variant="p"
          component="h4"
          sx={{ marginTop: "1rem" }}
        >
          Others
        </Typography>

        <Link
          to="/customer"
          onClick={() => setActiveTab("customer")}
          style={{
            textDecoration: "none",
            color: "#717579",
            "&:hover": {
              color: "white",
            },
          }}
        >
          <Box
            className={`options ${
              activeTAB === "customer" && "activeTabStyles"
            }`}
            sx={{ ...sidebarStyles.optionMargin }}
          >
            <img className="optionIcon" src="../sidebar/customer.svg" alt="" />
            <Typography variant="h5" sx={{ ...sidebarStyles.optionText }}>
              Customer
            </Typography>
          </Box>
        </Link>
        <Link
          to="/"
          onClick={() => setActiveTab("messages")}
          style={{
            textDecoration: "none",
            color: "#717579",
            "&:hover": {
              color: "white",
            },
          }}
        >
          <Box className={`options ${
              activeTAB === "messages" && "activeTabStyles"
            }`} sx={{ ...sidebarStyles.optionMargin }}>
            <img className="optionIcon" src="../sidebar/messages.svg" alt="" />
            <Typography variant="h5" sx={{ ...sidebarStyles.optionText }}>
              Messages
            </Typography>
          </Box>
        </Link>
        <Link
          to="/"
          onClick={() => setActiveTab("settings")}
          style={{
            textDecoration: "none",
            color: "#717579",
            "&:hover": {
              color: "white",
            },
          }}
        >
          <Box className={`options ${
              activeTAB === "settings" && "activeTabStyles"
            }`} sx={{ ...sidebarStyles.optionMargin }}>
            <img className="optionIcon" src="../sidebar/settings.svg" alt="" />
            <Typography variant="h5" sx={{ ...sidebarStyles.optionText }}>
              Settings
            </Typography>
          </Box>
        </Link>

        <Box
          sx={{ ...sidebarStyles.optionMargin, ...sidebarStyles.sidebarFooter }}
        >
          <Typography variant="h6" sx={{ ...sidebarStyles.footerHeading }}>
            Hoomeee Admin Dashboard
          </Typography>
          <Typography variant="body2" sx={{ ...sidebarStyles.footerText }}>
            © 2020 All Rights Reserved
          </Typography>
          <Typography
            variant="body2"
            sx={{ ...sidebarStyles.footerText, marginTop: "1rem" }}
          >
            Made with ♥ by Peterdraw
          </Typography>
        </Box>
      </Paper>
    </>
  );
};
export default Sidebar;
