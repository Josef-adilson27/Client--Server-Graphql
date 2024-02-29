import React from 'react';
import { Box,Typography,Button} from "@mui/material";
import {UseRemove} from '../CustomHooks/useRemove'

const CustomAlert = ({id,setRemoveToggle}) => {
    const {onDelete} = UseRemove();
  
    return (
        <Box sx={{
            width:'100%',
            height:'100%',
            bgcolor:'rgb(22, 45, 45,0.7)',
          
            position:'fixed',
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            zIndex:2
            }}>
            <Box padding={5} width={400} height={200} bgcolor='white'
            sx={{display:'flex',flexDirection:'column'}}>
         
             <Typography variant='h4' fontSize={20} color={'grey'}>Прежде чем удалить этого парня, посмотри ему в глаза в последний раз...</Typography>

             <Box sx={{display:'flex',flexDirection:'column', justifyContent:'center',alignItems:'center'}}>
              <Button sx={{margin:3}} variant='contained'
                onClick={()=>onDelete(id)}
                >
                    <Typography  color='white'>Да! пусть убирается...</Typography>
                </Button>
                <Button  onClick={()=>setRemoveToggle(false)} variant='contained'>
                    <Typography color='white'>Помиловать!</Typography>
                </Button>
             </Box>
            </Box>
        </Box>
    );
}

export default CustomAlert;
