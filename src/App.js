import "./App.css";
import { UseAllPersons } from "./CustomHooks/useGetAllPersons";
import { Box,Button, ThemeProvider, Typography, createTheme,IconButton } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import MainCard from "./components/MainCard";
import { orange } from "@mui/material/colors";
import { useState } from "react";
import RemoveAlert from "./components/RemoveAlert";
import UpdateAlert from "./components/UpdateAlert";
import DetailsAlert from './components/DetailsAlert';
import CreatePerSonAlert from "./components/CreatePerson";

const theme = createTheme({
  palette: {
    primary: {
      main: orange[500],
      secondary: orange[900],
    },
  },
});

const Loading = (
  <Box style={{ width: "100%", height: "100px", alignItems: "center" }}>
    <Typography variant="h3" style={{ textAlign: "center" }}>
      Loading...
    </Typography>
  </Box>
);
const Error = (
  <Box style={{ width: "100%", height: "100px", alignItems: "center" }}>
    <Typography variant="h3" style={{ textAlign: "center" }}>
    Пожалуйтса включите сервер(npm start из сервера),либо проеверьте graphql запросы...
    </Typography>
  </Box>
);

function App() {
  ///стейты для вызова окон
  const [removeToggle, setRemoveToggle] = useState(false);
  const [createToggle, setCreateToggle] = useState(false);
  const [updateToggle, setUpdateToggle] = useState(false);
  const [detailToggle, setDetailToggle] = useState(false);
  const [id, setId] = useState(0);

  const { error, loading, data } = UseAllPersons();

  const getId = (id) => {
    setId(id);
  };

  if (loading) return Loading;
  if (error) return Error;

  return (
    <ThemeProvider theme={theme}>

      {/*вызов окон по нажитию*/}
      {createToggle && (
        <CreatePerSonAlert setCreateToggle={setCreateToggle} id={id} />
      )}
      
      {removeToggle && (
        <RemoveAlert setRemoveToggle={setRemoveToggle} id={id} />
      )}
      
      {updateToggle && (
        <UpdateAlert setUpdateToggle={setUpdateToggle} id={id} />
      )}

      {detailToggle && (
        <DetailsAlert setDetailToggle={setDetailToggle} id={id} />
      )}

      <Box className="App">
        <Box sx={{ bgcolor: "rgb(5, 18, 53)", padding: 2 }}>
          <Typography variant="h4">
            🚀🚀🚀 CRUD operations using by Graphql 🚀🚀🚀
          </Typography>
        </Box>

        <Box  >
          <Button onClick={()=>setCreateToggle(true)} sx={{margin:2,borderRadius:30,height:60}}  variant="contained" bgcolor='red'>
            <AddIcon/>
          </Button>
        </Box>

        <Box
          sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
        >
          {data.persons?.map((item) => {
            return (
              <MainCard
                getId={getId}
                item={{ ...item }}
                setRemoveToggle={setRemoveToggle}
                setUpdateToggle={setUpdateToggle}
                setDetailToggle={setDetailToggle}
              />
            );
          })}
        </Box>
      </Box>
    </ThemeProvider>
  );
}
export default App;
