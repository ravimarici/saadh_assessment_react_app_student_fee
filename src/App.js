import Home from "./Components/Home";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import FeesManager from "./Components/FeesManager";
import { Image } from "react-bootstrap";
import { Navbar } from "react-bootstrap";

function App() {
  return (
    <div>
       {/* Navbar Header */}
       <Navbar className="justify-content-center">
        <Image src="/Images/logo.png" alt="logo" height={50} width={200} />
      </Navbar>
      <hr></hr>

      <Navbar bg="secondary" expand="lg">
        <Navbar.Brand href="/" className="stud">
          Student Registration 
        </Navbar.Brand>
      <Navbar bg="secondary" expand="lg">
        <Navbar.Brand href="feemanager" className="stud">
           Fee Manager
        </Navbar.Brand>
      </Navbar>
      </Navbar>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="feemanager" element={<FeesManager/>} />
        </Routes>
      </Router>
        
      
    </div>
  );
}

export default App;
