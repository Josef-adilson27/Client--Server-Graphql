import React from "react";
import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const MainCard = ({ item, getId, setRemoveToggle, setUpdateToggle, setDetailToggle}) => {
  const removeClick = () => {
    getId(item.id);
    setRemoveToggle(true);
  };
  
  const updateClick = () => {
    getId(item.id);
    setUpdateToggle(true);
  };

  const detailClick = () => {
    getId(item.id);
    setDetailToggle(true);
  };

  return (
    <Card
      variant="outlined"
      key={item.id}
      sx={{ margin: 10, border: "solid 1px grey", flexDirection: "column" }}
    >

          <CardMedia
            sx={{ objectFit: "cover" }}
            component="img"
            height="400"
            width="100"
            image={item?.img}
          />  
      <CardContent sx={{ display: "flex", justifyContent: "space-around" }}>
        <Typography variant="h5">{item.firstName}</Typography>
        <Typography variant="h5">{item.lastName}</Typography>
      </CardContent>

      <CardActions
      > 
        <Button     
        onClick={detailClick}
        variant="contained" size="small">
          <Typography color="white">Details</Typography>
        </Button>

        <Button variant="contained" size="small" 
        onClick={updateClick}
        >
          <Typography color="white">Update</Typography>
        </Button>

        <Button
           onClick={removeClick}
          sx={{ backgroundColor: "primary.secondary" }}
          variant="contained"
          startIcon={<DeleteIcon sx={{ color: "white" }} />}
        >
          <Typography color="white">Remove this guy</Typography>
        </Button>
      </CardActions>
    </Card>
  );
};
export default MainCard;
