import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import * as d3 from 'd3';
import * as myData from '/Users/jonahmiller/Documents/ncaa-viz/src/spread summary.csv';
import { makeStyles } from "@material-ui/core";


function createData(id, confidenceCategory, truePerformance, numberOfGames) {

  return { id, confidenceCategory, truePerformance, numberOfGames };
}

const columns = [
  // { wordBreak: 'break-word'},
//   {'whiteSpace': 'unset'},
  { field: 'id', headerName: 'ID', flex:1 , hide:true},
  { field: 'confidenceCategory', headerName: 'Confidence', width:100},
  { field: 'truePerformance', headerName: 'True Performance',width:150},
  { field: 'numberOfGames', headerName: 'Number of Games', width:150},
];


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
      for (let j = 1; j < 5; j++) {
        var key = Object.keys(valsToParse)[j]
        ta.push(valsToParse[key]);
  
      }
      var row_data = [];
  
      // console.log(ta)
      row_data = createData(ta[0],ta[1],ta[2],ta[3],ta[4]);
      rows.push(row_data);
    }    


  return (
    <div style={{ height: 360, width: "100%" }}>
      <DataGrid
        className={classes.root}
        headerHeight={45}
        rows={rows}
        columns={columns}
        pageSize={5}
        // rowsPerPageOptions={[4]}        
      />
    </div>
  );
}