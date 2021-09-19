import Router from "./router";
import './App.scss'
import { AppProvider } from "./context/context/provider";

const App = () => {
  return (
   
      <AppProvider>
        <Router />
      </AppProvider>
       
  
  )
}

export default App
