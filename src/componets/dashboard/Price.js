import React, { useState } from "react";
import {
  Card,
  CardContent,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { styled } from "@mui/system";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

const WinBadge = styled("div")({
  backgroundColor: "lightgreen",
  borderRadius: "5px",
  padding: "2px 6px",
  marginLeft: "10px",
});

// Custom styled button to remove border on click
const ToggleButton = styled(Button)({
  "&:focus": {
    outline: "none", // Remove outline on focus
    boxShadow: "none", // Remove box shadow on focus
  },
});

const Price = ({ data }) => {
  const [expanded, setExpanded] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const toggleExpand = () => {
    setExpanded(!expanded);
    if (!expanded) {
      setCurrentIndex((prevIndex) => prevIndex + 5);
    } else {
      setCurrentIndex(0);
    }
  };

  const displayedData = data.slice(currentIndex, currentIndex + 5);

  return (
    <Card sx={{ maxWidth: 350, margin: "10px" }}>
      <CardContent>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  Name
                  <ToggleButton onClick={toggleExpand} size="small">
                    {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                  </ToggleButton>
                </TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Calmar Ratio</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {displayedData.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>
                    <WinBadge>{item.price}</WinBadge>
                  </TableCell>
                  <TableCell>{item.calmarRatio}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
};

export default Price;
