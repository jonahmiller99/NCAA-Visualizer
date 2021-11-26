import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import * as d3 from 'd3';
import * as myData from '/Users/jonahmiller/Documents/ncaa-viz/src/current data.csv';


function createData(date, favteam, undteam, favspread, predoutcome, confidence, vig, bet_to_take, half_kelly, quarter_kelly, finalscore, cover) {
  // console.log(date, favteam, undteam, favspread, predoutcome, confidence, vig, bet_to_take, finalscore, cover);
  return { date, favteam, undteam, favspread, predoutcome, confidence, vig, bet_to_take,  half_kelly, quarter_kelly, finalscore, cover };
}


  

export default function BasicTable() {

  const [data, setData] = React.useState([]);
  var rows =  [];


  React.useEffect(() => {
    // Import our csv 
    
    
    d3.csv(myData).then(setData);
  }, []);  

  var iterations = Object.values(data).length - 1;
  for (let i = 0; i < iterations; i++) {
    var valsToParse = Object.values(data)[i]
    const ta = []
    for (let j = 1; j < 13; j++) {
      var key = Object.keys(valsToParse)[j]
      ta.push(valsToParse[key]);

    }
    var row_data = [];

    // console.log(ta)
    row_data = createData(ta[0],ta[1],ta[2],ta[3],ta[4],ta[5],ta[6],ta[7],ta[8],ta[9], ta[10], ta[11]);
    rows.push(row_data);
  }

//   const getTotalForField = field => {
//     // something like
//     return ids.map(id => data[id][field]).reduce((acc, curr) => acc + curr);
// }
  // console.log(rows[0])

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            {/* <TableCell align="left">Date</TableCell> */}
            <TableCell align="right">Favored Team</TableCell>
            <TableCell align="right">Underdog Team</TableCell>
            <TableCell align="right">Favored Spread</TableCell>
            <TableCell align="right">Predicted Outcome</TableCell>
            <TableCell align="right">Confidence</TableCell>
            <TableCell align="right">Vig</TableCell>
            <TableCell align="right">Recommended Bet</TableCell>
            <TableCell align="right">Half Kelly</TableCell>
            <TableCell align="right">Quarter Kelly</TableCell>
            <TableCell align="right">Final Score</TableCell>
            <TableCell align="right">Cover</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.date}
                </TableCell> 
                <TableCell align="right">{row.favteam}</TableCell>
                <TableCell align="right">{row.undteam}</TableCell>
                <TableCell align="right">{row.favspread}</TableCell>
                <TableCell align="right">{row.predoutcome}</TableCell>
                <TableCell align="right">{row.confidence}</TableCell>
                <TableCell align="right">{row.vig}</TableCell>
                <TableCell align="right">{row.bet_to_take}</TableCell>
                <TableCell align="right">{row.half_kelly}</TableCell>
                <TableCell align="right">{row.quarter_kelly}</TableCell>
                <TableCell align="right">{row.finalscore}</TableCell>   
                <TableCell align="right">{row.cover}</TableCell>              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}