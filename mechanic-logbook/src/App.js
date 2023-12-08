import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import NavBar from 'react-bootstrap/NavBar';
import Nav from 'react-bootstrap/Nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Add from './Components/Add';
import Cards from './Components/Card';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <NavBar bg="dark" data-bs-theme="dark">
        <Container>
          <NavBar.Brand href='/'></NavBar.Brand>
          <Nav className="me-auto">
            <Nav.Link href='/Add'>Add</Nav.Link>
            <Nav.Link href='/Card'>Car</Nav.Link>
          </Nav>
        </Container>
      </NavBar>
      <Routes>
        <Route path="/Add" element={<Add></Add>}></Route>
        <Route path="/Card" element={<Cards></Cards>}></Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
