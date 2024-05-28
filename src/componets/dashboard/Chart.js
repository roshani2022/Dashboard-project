import React from 'react';
import { LineChart } from "@mui/x-charts";
import { Box } from '@mui/material';
import { Typography } from '@mui/material';

const Chart = ({ data }) => {
  const xLabels = data.map(item => `Rank ${item.rank}`);
  const overallProfits = data.map(item => item.overallProfit);
  const avgProfits = data.map(item => item.avgDailyProfit);

  const seriesA = {
    data: overallProfits,
    color: 'red',
  };

  const seriesB = {
    data: avgProfits,
    color: 'blue',
  };

  return (
    <div>
      <Box
        position="absolute"
        top={200}
        right={100}
        bgcolor="white"
        p={1}
        boxShadow="0px 2px 4px rgba(0, 0, 0, 0.1)"
        borderRadius="4px"
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        justifyContent="space-between"
        width="200px"
        height="60px"
      >
        <Box display="flex" alignItems="center">
          <div
            style={{
              width: "10px",
              height: "10px",
              backgroundColor: "red",
              marginRight: "5px",
            }}
          ></div>
          <Typography variant="subtitle1" color="textPrimary">
            Overall Profit
          </Typography>
        </Box>
        <Box display="flex" alignItems="center" mt={1}>
          <div
            style={{
              width: "10px",
              height: "10px",
              backgroundColor: "blue",
              marginRight: "5px",
            }}
          ></div>
          <Typography variant="subtitle1" color="textPrimary">
            Average Daily Profit
          </Typography>
        </Box>
      </Box>
      <div style={{ padding: '20px' }}> 
        <LineChart
          width={700}
          height={300}
          series={[seriesA]}
          xAxis={[{ data: xLabels, scaleType: 'band' }]}

        />
      </div>
      <div style={{ padding: '20px' }}> 
        <LineChart
          width={700}
          height={300}
          series={[seriesB]}
          xAxis={[{ data: xLabels, scaleType: 'band' }]}
        />
      </div>
    </div>
  );
}

export default Chart;
