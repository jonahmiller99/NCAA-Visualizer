import './App.css';
import MyTable from "./MyTable.js"
import TestTable from "./testTable.js"
import OverTable from "./overTable.js"
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



const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));




function App() {
  return (

    <div>
      
      {/* <div className="Summary" >
        <Grid container spacing={1} alignItems = "center" >
          <Grid item xs={12}  md={4} style={{ flexGrow: "1" }}>
            <Paper>Record</Paper>
            </Grid>  
          <Grid item xs={12}  md={4} style={{ flexGrow: "1" }}>
            <Paper>Record</Paper>  
            </Grid>       
          <Grid item xs={12}  md={4} style={{ flexGrow: "1" }}>
            <Paper>Record</Paper>  
            </Grid>                             
          </Grid>      
      </div> */}
      <style>{'body { background-color: aliceblue; }'}</style>
      

      <div>
        <h1>
        <span>
          <Typography variant="h3" gutterBottom component="div" align="center">
          Spread Model
          </Typography>
        </span>
        </h1>
        <TestTable title="Spread Model" />
      </div>
      <h1>
        <span>
          <Typography variant="h3" gutterBottom component="div" align="center">
          Over Under Model
          </Typography>
        </span>
      </h1>
      <div>
      <OverTable/>
      </div>
  </div>
    
    
  );
}

export default App;
