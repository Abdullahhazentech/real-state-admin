import React, { useState } from "react";
import { tableRows } from "./transactionsData";
import CustomPagination from "../../common/pagination/CustomPagination";
import "./transactions.css"
import "./transactionsTable.css"
const Transactions = () => {
  const tableColumns = [
    "Order ID",
    "Date",
    "Customer",
    "Property",
    "Location",
    "Price",
    "Type",
    "Agent",
    "Status",
  ];
  const statusBackground = (status) => {
    // if (status === "Negotiation") return "#2251F8";
    // else if (status === "Approved") return "#09BD3C";
    // else if (status === "Pending") return "#FF9F34";

    return status === "Negotiation"
      ? "#2251F8"
      : status === "Approved"
      ? "#09BD3C"
      : "#FF9F34";
  };
  const itemsPerPage = 6;
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentTableRows = tableRows.slice(itemOffset, endOffset);
  const updateOffset = (offset) => {
    setItemOffset(offset);
  };

  return (
    <>
      <div className="d-flex justify-content-between mb-3">
        <div
          id="card1"
          className="d-flex align-items-center justify-content-between"
        >
          <div>
            <img
              src="/transactions/shield.png"
              alt="Header Logo"
              style={{ height: "94px", width: "94px" }}
            />
          </div>
          <div className="d-flex flex-column">
            <h3 id="card1Text1">INFORMATION</h3>
            <h6 id="card1Text2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed{" "}
              <br />
              do eiusmod tempor incididunt ut labore
            </h6>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-around card2">
          <div className="d-flex flex-column">
            <h1 className="card2Text1">623</h1>
            <h5 className="card2Text2">Total Customers</h5>
          </div>
          <div className="card2Box">
            <img
              src="/transactions/user.png"
              alt="Header Logo"
              style={{ height: "32px", width: "32px", margin: "28px" }}
            />
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-around card3">
          <div className="d-flex flex-column">
            <h1 className="card3Text1">982</h1>
            <h5 className="card3Text2">Total Transactions</h5>
          </div>
          <div className="card3Box">
            <img
              src="/transactions/shopping-cart.png"
              alt="Header Logo"
              style={{ height: "32px", width: "32px", margin: "28px" }}
            />
          </div>
        </div>
      </div>

      <div className="table-responsive tableBorder" style={{margin:"0",Padding:"0"}}>
        <table className="table">
          <thead>
            <tr>
              <th>
                <div class="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    class="custom-control-input"
                    id="customCheck1"
                  />
                  <label
                    class="custom-control-label"
                    for="customCheck1"
                  ></label>
                </div>
              </th>
              {tableColumns.map((column) => {
                if (column === "Status") {
                  return <th scope="col">{column}</th>;
                } else {
                  return (
                    <th className="text-start" scope="col">
                      {column}
                    </th>
                  );
                }
              })}
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {currentTableRows.map((row, index) => {
              const {
                OrderID,
                Date,
                Customer,
                Property,
                Location,
                Price,
                Type,
                Agent,
                Status,
              } = row;
              return (
                <tr>
                  <td>
                    <div class="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="customCheck1"
                      />
                      <label
                        class="custom-control-label"
                        for="customCheck1"
                      ></label>
                    </div>
                  </td>
                  <td className="text-start">{OrderID}</td>
                  <td className="text-start">{Date}</td>
                  <td className="text-start">{Customer}</td>
                  <td className="text-start" id="property">
                    {Property}
                  </td>
                  <td className="text-start" id="location">
                    {Location}
                  </td>
                  <td className="text-start">{Price}</td>
                  <td className="text-start">{Type}</td>
                  <td className="text-start">{Agent}</td>
                  <td>
                    <span className="status">
                      <h6
                        // className="statusText"
                        className="statusText"
                        style={{ background: statusBackground(Status) }}
                      >
                        {Status}
                      </h6>
                    </span>
                  </td>
                  <td className="text-start">
                    <img
                      src="/transactions/more-vertical.png"
                      alt="Header Logo"
                      style={{
                        width: "24px",
                        height: "24px",
                      }}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {/*table div*/}
      <CustomPagination itemsPerPage={itemsPerPage} length={tableRows.length} updateOffset={updateOffset}/>
    </>
  );
};

export default Transactions;
