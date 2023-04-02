import * as React from 'react';
import { DataGrid} from '@mui/x-data-grid';
import CopyAllTwoToneIcon from '@mui/icons-material/CopyAllTwoTone';
import { IconButton } from '@mui/material';
import { Box } from '@mui/system';

const rows = [
  { id: 1, "Strategy": 'Atlas', "Ticket": 30158004,"Symbol":"DJ_EUR50","Buy/Sell":"buy", "size": 1, "open":3866.1,"stop":3886.1, "limit":3886.2,"Current":3886.1, "Net P/L":"-€48", "Open Time (GMT)":"2202.03.17 16:05:15" },
  { id: 2, "Strategy": 'Atlas', "Ticket": 30158004,"Symbol":"DJ_EUR50","Buy/Sell":"buy", "size": 4, "open":3866.1,"stop":3886.1, "limit":3886.2,"Current":3886.1, "Net P/L":"-€48", "Open Time (GMT)":"2202.03.17 16:05:15" },
  { id: 3, "Strategy": 'Atlas', "Ticket": 30158004,"Symbol":"DJ_EUR50","Buy/Sell":"buy", "size": 4, "open":3866.1,"stop":3886.1, "limit":3886.2,"Current":3886.1, "Net P/L":"-€48", "Open Time (GMT)":"2202.03.17 16:05:15" },
  { id: 4, "Strategy": 'Atlas', "Ticket": 30158004,"Symbol":"DJ_EUR50","Buy/Sell":"buy", "size": 5, "open":3866.1,"stop":3886.1, "limit":3886.2,"Current":3886.1, "Net P/L":"-€48", "Open Time (GMT)":"2202.03.17 16:05:15" },
  { id: 5, "Strategy": 'Atlas', "Ticket": 30158004,"Symbol":"DJ_EUR50","Buy/Sell":"buy", "size": 4, "open":3866.1,"stop":3886.1, "limit":3886.2,"Current":3886.1, "Net P/L":"-€48", "Open Time (GMT)":"2202.03.17 16:05:15" },
  { id: 6, "Strategy": 'Atlas', "Ticket": 30158004,"Symbol":"DJ_EUR50","Buy/Sell":"buy", "size": 5, "open":3866.1,"stop":3886.1, "limit":3886.2,"Current":3886.1, "Net P/L":"-€48", "Open Time (GMT)":"2202.03.17 16:05:15" },
  { id: 7, "Strategy": 'Atlas', "Ticket": 30158004,"Symbol":"DJ_EUR50","Buy/Sell":"buy", "size": 1, "open":3866.1,"stop":3886.1, "limit":3886.2,"Current":3886.1, "Net P/L":"-€48", "Open Time (GMT)":"2202.03.17 16:05:15" },
  { id: 8, "Strategy": 'Atlas', "Ticket": 30158004,"Symbol":"DJ_EUR50","Buy/Sell":"buy", "size": 4, "open":3866.1,"stop":3886.1, "limit":3886.2,"Current":3886.1, "Net P/L":"-€48", "Open Time (GMT)":"2202.03.17 16:05:15" },
  { id: 9, "Strategy": 'Atlas', "Ticket": 30158004,"Symbol":"DJ_EUR50","Buy/Sell":"buy", "size": 4, "open":3866.1,"stop":3886.1, "limit":3886.2,"Current":3886.1, "Net P/L":"-€48", "Open Time (GMT)":"2202.03.17 16:05:15" },
  { id: 10, "Strategy": 'Atlas', "Ticket": 30158004,"Symbol":"DJ_EUR50","Buy/Sell":"buy", "size": 5, "open":3866.1,"stop":3886.1, "limit":3886.2,"Current":3886.1, "Net P/L":"-€48", "Open Time (GMT)":"2202.03.17 16:05:15" },
  { id: 11, "Strategy": 'Atlas', "Ticket": 30158004,"Symbol":"DJ_EUR50","Buy/Sell":"buy", "size": 4, "open":3866.1,"stop":3886.1, "limit":3886.2,"Current":3886.1, "Net P/L":"-€48", "Open Time (GMT)":"2202.03.17 16:05:15" },
  { id: 12, "Strategy": 'Atlas', "Ticket": 30158004,"Symbol":"DJ_EUR50","Buy/Sell":"buy", "size": 5, "open":3866.1,"stop":3886.1, "limit":3886.2,"Current":3886.1, "Net P/L":"-€48", "Open Time (GMT)":"2202.03.17 16:05:15" },
];

export default function table({boughtTradeByID, setSelectedTradeByID, setExpanded}) {
    const btnColumns ={
        field: "Copy",
        headerName: "Copy",
        headerClassName:"header",
        sortable: false,
        flex:0.6,
        minWidth: 50,
        renderCell: (params) => {
            let isIDBeenBought = false
            for( const IDBought of boughtTradeByID){
                if(IDBought.toString() === params.id.toString()){
                    isIDBeenBought = true
                }
            }
            const onClick = (e) => {
                setExpanded(true)
            // e.stopPropagation(); // don't select this row after clickin
            // if(!isIDBeenBought)
            setSelectedTradeByID(params.id)
            // return alert(JSON.stringify(params.id, null, 4));
            };
    
            return <IconButton style={{backgroundColor: "rgba(233,236,239,0.4)" ,borderRadius:1}} onClick={onClick}><CopyAllTwoToneIcon fontSize='medium' style={{color:isIDBeenBought ? "#FFA800" : "#858585" }}
           /></IconButton>
        }
      }
      const columns = [
   
        { field: 'Strategy', headerName: 'Strategy', minWidth: 80,flex:1,cellClassName: 'bold',headerClassName:"header" },
        { field: 'Ticket', headerName: 'Ticket', minWidth: 85,flex:1,headerClassName:"header" },
        { field: 'Symbol', headerName: 'Symbol', minWidth: 100,flex:1,headerClassName:"header" },
        { field: 'Buy/Sell', headerName: 'Buy/Sell', minWidth: 65,flex:0.8,headerClassName:"header" },
        { field: 'size', headerName: 'Size', minWidth: 50,flex:0.7,headerClassName:"header" },
        { field: 'open', headerName: 'Open', minWidth: 65,flex:0.8,headerClassName:"header" },
        { field: 'stop', headerName: 'Stop', minWidth: 65,flex:0.8,headerClassName:"header" },
        { field: 'limit', headerName: 'limit', minWidth: 65,flex:0.8,headerClassName:"header" },
        { field: 'Current', headerName: 'Current', minWidth: 65,flex:0.8,headerClassName:"header" },
        { field: 'Net P/L', headerName: 'Net P/L', minWidth: 65,flex:0.8,headerClassName:"header" },
        { field: 'Open Time (GMT)', headerName: 'Open Time (GMT)', minWidth: 170,flex:1.4,headerClassName:"header" },
        {...btnColumns},
      ];

  return (
    <Box
      sx={{
        height: "500px",
        display:"grid",
        overflowX: 'hidden',
        '& .bold': {
          fontWeight: '700',
        },
        '& .header': {
            color: '#ADADAD',
            fontWeight:"400",
            fontSize:"14px",
            fontFamily:"Open Sans"
          }
      }}
    >
      <DataGrid 
        style={{overflowX:"scroll"}}
        rows={rows} 
        density={"compact"}
        columns={columns}
        initialState={{
            ...rows.initialState,
            pagination: { paginationModel: { pageSize: 10 } },
          }}
          pageSizeOptions={[5, 10, 25]}  />
    </Box>
  
  );
}