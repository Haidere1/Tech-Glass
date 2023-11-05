import Mainpage from "./components/mainpage";
import { Route,Routes } from "react-router-dom";
import Product from "./components/viewpr";

function App() {
  return (
    <Routes>
      
    <Route path="/" Component={Mainpage}/>
    <Route path="/View" Component={Product}/>
    </Routes>
    );
}

export default App;
