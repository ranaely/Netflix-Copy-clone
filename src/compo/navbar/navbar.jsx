import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink ,Link} from 'react-router-dom';
import '../../App.css'





function Navbar1() {

  return (

    <div>


      <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark" style={{ position: 'fixed', width: '100%', zIndex: 5 }}>
        <Container fluid>
          <Navbar.Brand href="#">
            <img src="https://cdn.vox-cdn.com/thumbor/sW5h16et1R3au8ZLVjkcAbcXNi8=/0x0:3151x2048/2000x1333/filters:focal(1575x1024:1576x1025)/cdn.vox-cdn.com/uploads/chorus_asset/file/15844974/netflixlogo.0.0.1466448626.png"
              width="30"
              height="30"
              className="d-inline-block align-top" /> NETFLIX</Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
             <Nav.Link ><NavLink to={'/'} className={(e)=>{ return e.isActive? "red" : ""}} style={{padding:'18px' ,color:'white'}}>Home</NavLink></Nav.Link> 
              <Nav.Link ><NavLink to={'/Hollywood'} className={(e)=>{ return e.isActive? "red" : ""}}style={{padding:'18px' ,color:'white'}}>Hollywood Movies</NavLink></Nav.Link>
              <Nav.Link ><NavLink to={'/NewSeries'}  className={(e)=>{ return e.isActive? "red" : ""}}style={{padding:'18px' ,color:'white'}}>New Series</NavLink></Nav.Link>
              
              <NavDropdown title="Link" id="navbarScrollingDropdown" >
                <NavDropdown.Item ><Link to={'/Home'} >Home</Link></NavDropdown.Item>
                <NavDropdown.Item >
                <Link to={'/Home'} >Home</Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item >
                <Link to={'/Home'} >Home</Link>
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#" disabled>
                Link
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                t
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>



    </div>


  );
}

export default Navbar1;