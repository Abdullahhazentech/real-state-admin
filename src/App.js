import "./App.css";
import { Grid, Stack } from "@mui/material";
import Sidebar from "./components/pages/sidebar/Sidebar.js";
import Header from "./components/pages/header/Header";
import Customer from "./components/pages/custmer/Customer";
import Transactions from "./components/pages/transactions/Transactions";
import Analytics from "./components/pages/analytics/Analytics";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Grid className="appContainer">
        <Sidebar />
        <Grid
          className="mainLayout"
          sx={{ position: "relative", left: "20%" }}
          direction="column"
        >
          <Header />
          <Grid className="mainContent">
            <Routes>
              <Route exact path="/customer" element={<Customer />} />
              <Route exact path="/transactions" element={<Transactions />} />
              <Route exact path="/analytics" element={<Analytics />} />
            </Routes>
          </Grid>
        </Grid>
      </Grid>
    </Router>
  );
}

export default App;
