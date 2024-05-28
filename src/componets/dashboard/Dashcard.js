import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, Typography, Button, Grid } from '@mui/material';
import { styled } from '@mui/system';

const RankCircle = styled('div')({
  width: '30px',
  height: '30px',
  borderRadius: '50%',
  backgroundColor: 'lemonchiffon',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: '10px',
});

const WinBadge = styled('div')({
  backgroundColor: 'lightgreen',
  borderRadius: '5px',
  padding: '2px 6px',
  marginLeft: '10px',
});

const CardContentStyled = styled(CardContent)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '10px',
});

const Dashcard = ({ data }) => {
  return (
    <>
      
      <Grid container spacing={2} justifyContent="center">
        {data.map((stock, index) => (
          <Grid item xs={12} key={index}>
            <Card sx={{ maxWidth: 350, margin: '10px' }}>
              <CardContentStyled>
                <RankCircle>
                  <Typography variant="subtitle1">{stock.rank}</Typography>
                </RankCircle>
                <Typography variant="body1">
                  {stock.name}
                </Typography>
                <WinBadge>
                  {stock.winPercent * 100}%
                </WinBadge>
                {stock.action === 'View' ? (
                  <Button component={Link} to={`/view/${stock.name}`} variant="outlined" size="small" color="primary">
                    {stock.action}
                  </Button>
                ) : (
                  <Button component={Link} to={`/buy/${stock.name}`} variant="contained" size="small" color="secondary">
                    {stock.action}
                  </Button>
                )}
              </CardContentStyled>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Dashcard;
