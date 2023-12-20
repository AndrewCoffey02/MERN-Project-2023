import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import NavBar from 'react-bootstrap/NavBar';
import Nav from 'react-bootstrap/Nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cars from './Components/Carlist';
import Create from './Components/createCar';
import Edit from './Components/editCar';
import Home from './Components/Home';


function App() {
  return (
    // navbar component with navigation
    <BrowserRouter>
    <div className="App">
      <NavBar bg="dark" data-bs-theme="dark">
        <Container>
          <NavBar.Brand href='/Home'>Mechanic Logbook</NavBar.Brand>
          <Nav className="me-auto">
            <Nav.Link href='/Carlist'>Cars</Nav.Link>
            <Nav.Link href='/createCar'>Add Car</Nav.Link>
          </Nav>
        </Container>
      </NavBar>
      <Routes>
        <Route path="/Home" element={<Home></Home>}></Route>
        <Route path="/Carlist" element={<Cars></Cars>}></Route>
        <Route path="/createCar" element={<Create></Create>}></Route>
        <Route path="/editCar/:id" element={<Edit></Edit>}></Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
