import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import * as d3 from 'd3';
import * as myData from '/Users/jonahmiller/Documents/ncaa-viz/src/old_picks copy 2.csv';
import { makeStyles } from "@material-ui/core";


function createData(id, date, favteam, undteam, favspread, predoutcome, confidence, vig, overunder, predtotal, overundervig,overunderbet,overunderconf, bet_to_take, half_kelly, quarter_kelly, overunderhkelly, finalscore, cover, overcover) {
  // console.log(date, favteam, undteam, favspread, predoutcome, confidence, vig, bet_to_take, finalscore, cover);
  return { id, date, favteam, undteam, favspread, predoutcome, confidence, vig,  overunder, predtotal, overundervig,overunderbet,overunderconf, bet_to_take,  half_kelly, quarter_kelly, overunderhkelly, finalscore, cover, overcover };
}

const columns = [
  // { wordBreak: 'break-word'},
  {'whiteSpace': 'unset'},
  // {style: { 'whiteSpace': 'unset' }},
  { field: 'id', headerName: 'ID', flex:1 , hide:true},
  { field: 'date', headerName: 'Date', flex:1},
  { field: 'favteam', headerName: 'Favored Team',  flex:1, headerClassName: "wrapHeader" },
  { field: 'undteam', headerName: 'Underdog Team',  flex:1, headerClassName: "wrapHeader" },
  { field: 'favspread', headerName: 'Favored Spread',  width:100,headerClassName: "wrapHeader" ,  hide:true},
  { field: 'predoutcome', headerName: 'Predicted Outcome', width: 250,  hide:true},
  { field: 'confidence', headerName: 'Spread Confidence', width: 100,  hide:true },
  { field: 'vig', headerName: 'Vig', width: 60, hide:true},
  { field: 'overunder', headerName: 'Over Under',flex:1 },
  { field: 'predtotal', headerName: 'Predicted Total',flex:1 },
  { field: 'overundervig', headerName: 'Over Under Vig', width: 130,hide:true },
  { field: 'overunderbet', headerName: 'Over Under Bet', flex:1},
  { field: 'overunderconf', headerName: 'Over Under Confidence', flex:1 },
  { field: 'bet_to_take', headerName: 'Recommended Bet', width: 200,  hide:true},
  { field: 'half_kelly', headerName: 'Half Kelly',  flex:1,  hide:true },
  { field: 'quarter_kelly', headerName: 'Quarter Kelly',  flex:1,  hide:true},
  { field: 'overunderhkelly', headerName: 'Over Under Half Kelly',  flex:1  },
  { field: 'finalscore', headerName: 'Final Score',  flex:1 },
  { field: 'cover', headerName: 'Spread Cover',  flex:1,  hide:true},
  { field: 'overcover', headerName: 'Over Under Cover',  flex:1 },

];

// // Row highlighting attempt
// const options = {
//     setRowProps: row => { 
//         console.log("rows");
//         if (row[12] === 1.0) {
//             console.log(row[12]);
//           return {
//             style: { background: "red" }
//           };
//         }
//       }
// };

const useStyle = makeStyles({
  root: {
    "& .wrapHeader .MuiDataGrid-colCellTitle": {
      overflow: "visible",
      lineHeight: "1.43rem",
      whiteSpace: "normal"
    }
  }
});

export default function DataTable() {
    const classes = useStyle();
    const [data, setData] = React.useState([]);
    var rows =  [];
  
    React.useEffect(() => {
      d3.csv(myData).then(setData);
    }, []);  
  
    var iterations = Object.values(data).length - 1;
    for (let i = 0; i < iterations; i++) {
      var valsToParse = Object.values(data)[i]
      const ta = []
      // getting row id
      ta.push(i);
      for (let j = 1; j < 20; j++) {
        var key = Object.keys(valsToParse)[j]
        ta.push(valsToParse[key]);
  
      }
      var row_data = [];
  
      // console.log(ta)
      row_data = createData(ta[0],ta[1],ta[2],ta[3],ta[4],ta[5],ta[6],ta[7],ta[8],ta[9], ta[10], ta[11], ta[12], ta[13],  ta[14], ta[15], ta[16], ta[17], ta[18], ta[19]);
      rows.push(row_data);
    }    


  return (
    <div style={{ height: 1000, width: '100%' }}>
      <DataGrid
        className={classes.root}
        headerHeight={75}
        rows={rows}
        columns={columns}
        pageSize={20}
        rowsPerPageOptions={[20]}
        // options={options}
        
        checkboxSelection
      />
    </div>
  );
}