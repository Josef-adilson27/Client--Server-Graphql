import {Box,FormControl,TextField,Divider,Typography,Button, IconButton} from "@mui/material";
import { useUpdate } from "../CustomHooks/useUpdatePerson";
import React, { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';

const init = {
    personFirstName:'',
    personLastName:'',
    personId:'',
}


const UpdateAlert = ({id,setUpdateToggle}) => {

const [fields,setFieds] = useState(init);
console.log(fields.personFirstName);
const {onUpdate} = useUpdate()

const Update = ()=>{
  onUpdate(id,{
  id:fields.personId,
  firstName: fields.personFirstName,
  lastName: fields.personLastName
})
}

console.log(id);
    
const handle = (e) => {
    const {name,value} = e.target    
    setFieds({...fields,[name]:value})
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
       
      <FormControl
        sx={{
          width: "40%",
          height: "60%",
          bgcolor: "white",
          padding: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Box 
        sx={{width:'100%',
        position:'absolute',
        top:0,
        textAlign:'right'
        }}>
       <IconButton onClick={()=>setUpdateToggle(false)}>
        <CloseIcon/>
      </IconButton>
        </Box>
        <TextField
          name="personFirstName"
          sx={{ margin: 1 }}
          label="firstname"
          id="outlined-size-small"
          size="small"
          value={fields.personFirstName}
          onChange={handle}
        />
        <TextField
          sx={{ margin: 1 }}
          name="personLastName"
          label="lastname"
          id="outlined-size-small"
          size="small"
          onChange={handle}
        />
        <TextField
          sx={{ margin: 1 }}
          name="personId"
          label="ID"
          id="outlined-size-small"
          size="small"
          onChange={handle}
        />
        <Divider />

        <Button 
        onClick={()=>Update(id)}
        variant="contained"  sx={{backgroundColor:'primary.secondary'}}>
            <Typography color='white'>Добавить</Typography>         
        </Button>
      </FormControl>
    </Box>
  );
};

export default UpdateAlert;
