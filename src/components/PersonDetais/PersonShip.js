import React from 'react';
import { usePersonShip  } from "../../CustomHooks/usePersonShip"
import { Box, Card, CardMedia, Typography } from '@mui/material';

const PersonShip = ({id}) => {
    
    const { error, loading, data } = usePersonShip (id)
  
    return(
    <Box>
      {data?.getPersonById.ship.map(item=>(
      <Card
        sx={{ width: 400, height: "100%", margin: 1, display:'flex',flexDirection:'column',justifyContent:'space-between'}}
      >
 <CardMedia
          sx={{ objectFit: "cover" }}
          component="img"
          height="300"
          width="100%"
          image={item.img}
        />
        <Box display={"flex"} justifyContent={"space-around"} flexDirection={'column'}>
          <Typography variant="h5">Name: {item.brand}</Typography>
          <Typography variant="h5"> Owner: {item.owner}</Typography>
        </Box>
      </Card>

      ))

      }
    </Box>)
}

export default PersonShip ;
