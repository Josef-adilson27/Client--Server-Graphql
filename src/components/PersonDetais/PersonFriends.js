import { Box, Typography,CardMedia, Card } from '@mui/material';
import React from 'react';

import { usePersonFriends } from "../../CustomHooks/usePersonFriends"
const PersonFriends = ({id}) => {

    const { error, loading, data } = usePersonFriends(id)
 
    return(
    <Box sx={{display:'flex'}}>
      {data?.getPersonById.friends.map(item=>(
      <Card
        sx={{  width: 300, height: "100%", margin: 1 }}
      >
        <CardMedia
          sx={{ objectFit: "cover" }}
          component="img"
          height="400"
          width="100"
          image={item.img}
        />
        <Box display={"flex"} justifyContent={"space-around"}>
          <Typography variant="h4">{item.firstName}</Typography>
          <Typography variant="h4">{item.lastName}</Typography>
          
        </Box>
      </Card>
      ))}
    </Box>
    )
}

export default PersonFriends;
