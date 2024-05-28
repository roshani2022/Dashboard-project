import React from 'react';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const menuItems = [
  "Historical Trading",
  "Historical Chart",
  "Scanners",
  "Alerts",
  "Basic Backtest",
  "Advanced Backtest",
  "Pricing",
  "My Earnings"
];

function Header() {
  return (
     <>
    <div style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      fontStyle: 'italic',
      margin: '20px 20px',
      height: '40px',
      borderBottom: '1px solid black',
    }}>
      <Typography style={{ marginRight: '1rem' }}>Welcome</Typography>
      <Typography>Happy Trading</Typography>
    </div>
    <div style={{ display: 'flex', flexGrow: 1, justifyContent: 'space-around'}}>
    {menuItems.map((item, index) => (
      <Link
        key={index}
        to={`/${item.replace(/\s+/g, '-').toLowerCase()}`}
        style={{
          textDecoration: 'none',
          color: 'black',
          fontWeight: 'bold',
          cursor: 'pointer',
        }}
      >
        <Typography
          style={{ padding: '0 10px' }}
          onMouseEnter={e => e.target.style.textDecoration = 'underline'}
          onMouseLeave={e => e.target.style.textDecoration = 'none'}
        >
          {item}
        </Typography>
      </Link>
    ))};
    </div>
    </>
  ); 
}

export default Header;

