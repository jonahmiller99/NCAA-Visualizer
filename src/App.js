import './App.css';
import TestTable from "./testTable.js"
import OverTable from "./overTable.js"
import Over200Summary from "./summary_tables/over_200.js"
import OverSummary from "./summary_tables/over_summary"
import Spread200Summary from "./summary_tables/spread_200.js"
import SpreadSummary from "./summary_tables/spread_summary"
import React, { Component } from "react";
// import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { Text, StyleSheet, View } from 'react-native';
import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@material-ui/core/Typography';
import "@fontsource/open-sans"
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import { deepOrange } from '@mui/material/colors';



const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));




function App() {
  return (

    <div>
      
      
      <style>{'body { background-color: aliceblue; }'}</style>
      <div>
        <h1>
          <span className="performanceTitle">
            <Typography variant="h3" gutterBottom component="div" align="center">
            Performance Summary
            </Typography>
            <Typography variant="h3" gutterBottom component="div" align="center">
            Performance Summary
            </Typography>            
          </span>
        </h1>
        <table>
          <tbody>
            <tr>
              <td>
                <span className="summaryTitle"><Typography align = "center">All Over Unders</Typography></span>
                <OverSummary/>
              </td>
              <td>
                <span className="summaryTitle"><Typography align = "center">Past 200 Over Unders</Typography></span>
                <Over200Summary/>
              </td>
              <td>
                <span className="summaryTitle"><Typography align = "center">All Spreads</Typography></span>
                <SpreadSummary/>
              </td>
              <td>
                <span className="summaryTitle"><Typography align = "center">Past 200 Spreads</Typography></span>
                <Spread200Summary/>
              </td>                                          
            </tr>
          </tbody>
        </table>
        
      </div>      

      <div>
        <h1>
          <span>
            <Typography variant="h3" gutterBottom component="div" align="center">
            Over Under Model
            </Typography>
          </span>
        </h1>
        <OverTable/>
      </div>

      <div>
        <h1>
          <span>
            <Typography variant="h3" gutterBottom component="div" align="center">
            Spread Model
            </Typography>
          </span>
        </h1>
        <TestTable/>
      </div>

    </div>
    
    
  );
}

export default App;
