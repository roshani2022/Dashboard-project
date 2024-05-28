
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import { Box, Typography } from "@mui/material";
import React from "react";
import Grid from "@mui/material/Grid";
import Chart from "./Chart";
import Price from "./Price";
import Dashcard from './Dashcard';

const stockData = [
  {
    rank: 1,
    name: "Selling with re entr",
    calmarRatio: 3.96,
    overallProfit: 381845,
    avgDailyProfit: 319.54,
    winPercent: 0.65,
    price: "-",
    action: "View",
  },
  {
    rank: 2,
    name: "strategy_name",
    calmarRatio: 3.62,
    overallProfit: 268872.5,
    avgDailyProfit: 216.31,
    winPercent: 0.64,
    price: 500,
    action: "Buy",
  },
  {
    rank: 3,
    name: "Based on premium and",
    calmarRatio: 3.42,
    overallProfit: 255425,
    avgDailyProfit: 208.51,
    winPercent: 0.64,
    price: "-",
    action: "View",
  },
  {
    rank: 4,
    name: "strategy_name",
    calmarRatio: 3.22,
    overallProfit: 370845,
    avgDailyProfit: 303.47,
    winPercent: 0.65,
    price: "-",
    action: "View",
  },
  {
    rank: 5,
    name: "strategy_name",
    calmarRatio: 3.22,
    overallProfit: 370845,
    avgDailyProfit: 303.47,
    winPercent: 0.65,
    price: "-",
    action: "View",
  },
  {
    rank: 6,
    name: "Based on premium wit",
    calmarRatio: 3.01,
    overallProfit: 135980,
    avgDailyProfit: 185.77,
    winPercent: 0.49,
    price: "-",
    action: "View",
  },
  {
    rank: 7,
    name: "strategy_name",
    calmarRatio: 2.76,
    overallProfit: 267867.5,
    avgDailyProfit: 218.49,
    winPercent: 0.6,
    price: "-",
    action: "View",
  },
  {
    rank: 8,
    name: "Wait and trade_Save",
    calmarRatio: 2.62,
    overallProfit: 178252.5,
    avgDailyProfit: 161.9,
    winPercent: 0.63,
    price: "-",
    action: "View",
  },
  {
    rank: 9,
    name: "iron condor",
    calmarRatio: 2.44,
    overallProfit: 176420,
    avgDailyProfit: 137.51,
    winPercent: 0.65,
    price: "-",
    action: "View",
  },
  {
    rank: 10,
    name: "strategy_name",
    calmarRatio: 2.04,
    overallProfit: 244555,
    avgDailyProfit: 198.66,
    winPercent: 0.62,
    price: "-",
    action: "View",
  },
];

const Leaderboard = () => {
  return (
    <Box mt={3}>
      <Typography variant="h6" gutterBottom>
        <EmojiEventsIcon fontSize="medium" /> Leaderboard
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={5}>
         <Dashcard data={stockData} />
        </Grid>
        <Grid item xs={12} sm={7} mt={12}>
          <Chart data={stockData} />
          <Price data={stockData} />
         
        </Grid>
      </Grid>
    </Box>
  );
};

export default Leaderboard;
