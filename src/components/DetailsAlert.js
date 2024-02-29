import { Box, Button, CardMedia, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React, { useState } from "react";
import { useGetPerson } from "../CustomHooks/useGetPerson";


import Friends from "./PersonDetais/PersonFriends";
import Ship from "./PersonDetais/PersonShip";
import Droid from "./PersonDetais/PersonDroid";

const DetailsAlert = ({ id, setDetailToggle }) => {

  const Loading = (
    <Box style={{ width: "100%", height: "100px", alignItems: "center" }}>
      <Typography variant="h4" style={{ textAlign: "center" }}>
        Loading...
      </Typography>
    </Box>
  );

  const Error = (
    <Box style={{ width: "100%", height: "100px", alignItems: "center" }}>
      <Typography variant="h6" style={{ textAlign: "center" }}>
       Пожалуйтса включите сервер(npm start из сервера),либо проеверьте graphql запросы...
      </Typography>
    </Box>
  );


  const [elements, setElements] = useState('');

  const { error, loading, data } = useGetPerson(id);

  const RenderPersonDetails = ({element}) =>{
    
    //вызов компонентв в зависимости  от нажатой кнопки
    if(element==='car'){
      return <Ship id={id}/>
    }else if(element==='friends') {
      return <Friends id={id}/>
    }else if(element==='pet') {
      return <Droid id={id}/>
    }
  }

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        bgcolor: "rgb(22, 45, 45,0.9)",
        position: "fixed",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 2,
      }}
    >
      <Box
        sx={{
          position: "relative",
          display: "flex",
          width: "80%",
          height: "80%",
        }}
      >
        <Box sx={{ position: "absolute", width: "100%", height: 50 }}>
          {error && Error}
          {loading && Loading}
        </Box>

        <Box sx={{ border: "1px solid grey", width: 300, height: "100%" }}>
          <CardMedia
           
            objectFit='cover'
            component="img"
            height="400"
            width="100"
            image={data?.getPersonById.img}
          />

          <Box display={"flex"} justifyContent={"space-around"}>
            <Typography variant="h4">{data?.getPersonById.firstName}</Typography>
            <Typography variant="h4">{data?.getPersonById.lastName}</Typography>
          </Box>
          
        </Box>

        <Box
          sx={{
            border: "1px solid grey",
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
          }}
        >
          <Box
            sx={{
              width: "100%",
              top: 0,
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <Button onClick={()=>setElements('car')} sx={{ marginTop: 1 }} variant="contained" size="small">
              <Typography color="white">Корабль</Typography>
            </Button>

            <Button onClick={()=>setElements('friends')} sx={{ marginTop: 1 }} variant="contained" size="small">
              <Typography color="white">Друзья</Typography>
            </Button>

            <Button onClick={()=>setElements('pet')} sx={{ marginTop: 1 }} variant="contained" size="small">
              <Typography color="white">Дроид</Typography>
            </Button>

            <Button onClick={()=>setElements('')} sx={{ marginTop: 1 }} variant="contained" size="small">
              <Typography color="white">Очистить</Typography>
            </Button>

            <IconButton
              sx={{ position: "absolute", right: 0 }}
              onClick={() => setDetailToggle(false)}
            >
              <CloseIcon />
            </IconButton>
          </Box>
          <Box
            sx={{
              flex: 1,
             
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <RenderPersonDetails element={elements}/>
                        
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default DetailsAlert;