import {Navbar, Nav} from 'react-bootstrap'
import Option from "./Option"

function Menu() {
    return(
        <div>

            <Navbar bg="light" expand="lg">
                <Navbar.Brand>Eccomerce</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Option path="/" label="Home"/>
                        <Option path="/login" label="Log in"/>
                        <Option path="/create" label="Add Product"/>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
export default Menu;
