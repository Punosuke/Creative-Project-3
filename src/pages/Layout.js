import { Nav, Navbar, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";
import './styles.css';
const Layout = () => {
    return (
        <>
        <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
            <Navbar.Toggle aria-controls="navbarScroll" data-bs-toggle="collapse" data-bs-target="#navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav>
                    <NavLink  eventKey="1" as={Link} to="/">Home</NavLink>
                    <NavLink  eventKey="2" as={Link} to="/aboutme">About Me</NavLink>
                    <NavLink  eventKey="3" as={Link} to="/gallery">Gallery</NavLink>
                </Nav>
            </Navbar.Collapse>     
        </Navbar>
        </>
    );
}
 


export default Layout;