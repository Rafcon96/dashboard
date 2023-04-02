import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import CopyAllTwoToneIcon from "@mui/icons-material/CopyAllTwoTone";
import { IconButton } from "@mui/material";
import { Box } from "@mui/system";
import { tradeData } from "../../data";

export default function table({
  boughtTradeByID,
  setSelectedTradeByID,
  setExpanded,
}) {
  const btnColumns = {
    field: "Copy",
    headerName: "Copy",
    headerClassName: "header",
    sortable: false,
    flex: 0.6,
    minWidth: 50,
    renderCell: (params) => {
      let isIDBeenBought = false;
      for (const IDBought of boughtTradeByID) {
        if (IDBought.toString() === params.id.toString()) {
          isIDBeenBought = true;
        }
      }
      const onClick = (e) => {
        setExpanded(true);
        setSelectedTradeByID(params?.id);
      };

      return (
        <IconButton
          style={{ backgroundColor: "rgba(233,236,239,0.4)", borderRadius: 1 }}
          onClick={onClick}
        >
          <CopyAllTwoToneIcon
            fontSize="medium"
            style={{ color: isIDBeenBought ? "#FFA800" : "#858585" }}
          />
        </IconButton>
      );
    },
  };
  const columns = [
    {
      field: "Strategy",
      headerName: "Strategy",
      minWidth: 100,
      flex: 1,
      cellClassName: "bold",
      headerClassName: "header",
    },
    {
      field: "Ticket",
      headerName: "Ticket",
      minWidth: 85,
      flex: 1,
      headerClassName: "header",
    },
    {
      field: "Symbol",
      headerName: "Symbol",
      minWidth: 100,
      flex: 1,
      headerClassName: "header",
    },
    {
      field: "Buy/Sell",
      headerName: "Buy/Sell",
      minWidth: 65,
      flex: 0.7,
      headerClassName: "header",
    },
    {
      field: "size",
      headerName: "Size",
      minWidth: 50,
      flex: 0.7,
      headerClassName: "header",
      type: "number",
    },
    {
      field: "open",
      headerName: "Open",
      minWidth: 75,
      flex: 0.8,
      headerClassName: "header",
      type: "number",
    },
    {
      field: "stop",
      headerName: "Stop",
      minWidth: 75,
      flex: 0.8,
      headerClassName: "header",
      type: "number",
    },
    {
      field: "limit",
      headerName: "limit",
      minWidth: 75,
      flex: 0.8,
      headerClassName: "header",
      type: "number",
    },
    {
      field: "Current",
      headerName: "Current",
      minWidth: 75,
      flex: 0.8,
      headerClassName: "header",
      type: "number",
    },
    {
      field: "Net P/L",
      headerName: "Net P/L",
      minWidth: 75,
      flex: 0.8,
      headerClassName: "header",
      type: "number",
    },
    {
      field: "Open Time (GMT)",
      headerName: "Open Time (GMT)",
      minWidth: 170,
      flex: 1.4,
      headerClassName: "header",
    },
    { ...btnColumns },
  ];

  return (
    <Box
      sx={{
        height: "500px",
        display: "grid",
        overflowX: "hidden",
        "& .bold": {
          fontWeight: "700",
        },
        "& .header": {
          color: "#ADADAD",
          fontWeight: "400",
          fontSize: "14px",
          fontFamily: "Open Sans",
        },
      }}
    >
      <DataGrid
        style={{ overflowX: "scroll" }}
        rows={tradeData}
        density={"compact"}
        columns={columns}
        initialState={{
          ...tradeData.initialState,
          pagination: { paginationModel: { pageSize: 10 } },
        }}
        pageSizeOptions={[5, 10, 25]}
      />
    </Box>
  );
}
