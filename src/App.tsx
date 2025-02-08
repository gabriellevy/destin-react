import './App.css'
import Main from "./Pages/Main.tsx";
import PersoContexteProvider from "./contexte/PersoContexte.tsx";
import {CssBaseline} from "@mui/material";

function App() {

  return (
      <PersoContexteProvider>
          <CssBaseline />
          <Main />
      </PersoContexteProvider>
  )
}

export default App
