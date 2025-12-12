
import { Router , Route , Routes } from "react-router-dom";
import HomePage from "./HomePage";
import ProjectSection from "./components/Project";



function App() {
   
   
   


  return (

    <Routes>
      <Route  index element={<HomePage/>}/>
      
    </Routes>
  )
}

export default App;
