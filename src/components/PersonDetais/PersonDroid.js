import { Box, Card, CardMedia, Typography } from '@mui/material';
import React from 'react';
import { usePersonDroid } from "../../CustomHooks/usePersonDroid"
const PersonPet = ({id}) => {

    const { error, loading, data } = usePersonDroid(id)
 
    return(
    <Box>
      {data?.getPersonById.droid.map(item=>(
      <Card sx={{ width: 300, height: "100%", margin: 1 }}>
        <CardMedia
          sx={{ objectFit: "cover" }}
          component="img"
          height="400"
          width="200"
          image={item.img}
        />
        <Box display={"flex"} justifyContent={"space-around"} flexDirection={"column"}>
          <Typography variant="h4">Type: {item.type}</Typography>
          <Typography variant="h4">Name: {item.name}</Typography>
          <Typography variant="h4">Owner: {item.owner}</Typography>
        </Box>
      </Card>
      ))}
    </Box>
    )
}

export default PersonPet;
