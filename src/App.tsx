import './App.css'
import Main from "./Pages/Main.tsx";
import PersoContexteProvider from "./contexte/PersoContexte.tsx";

function App() {

  return (
      <PersoContexteProvider>
          <Main />
      </PersoContexteProvider>
  )
}

export default App
