import React from 'react';
import { Container, Nav, Navbar} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export default function MyNavbar() {
  return (
    <Navbar expand="lg" className='fixed-top'>
      <Container>
        <Navbar.Brand><Nav.Link as={NavLink} to="" className="text-white fw-bold fs-3" >START FRAMEWORK</Nav.Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto p-4 fw-bold fs-6 d-flex gap-4">
            <Nav.Link as={NavLink} to="about" className="text-white nav-btn">ABOUT</Nav.Link>
            <Nav.Link as={NavLink} to="portfolio" className="text-white nav-btn">PORTFOLIO</Nav.Link>
            <Nav.Link as={NavLink} to="contact" className="text-white nav-btn">CONTACT</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


// import React from 'react';
// import { Container, Nav, Navbar } from 'react-bootstrap';
// import { NavLink } from 'react-router-dom';
// import './MyNavbar';

// export default function MyNavbar() {
//   return (
//     <Navbar expand="lg" className='fixed-top bg-dark'>
//       <Container>
//         <Navbar.Brand>
//           <Nav.Link as={NavLink} to="/" className="text-white fw-bold fs-3">
//             START FRAMEWORK
//           </Nav.Link>
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="ms-auto p-4 fw-bold fs-6 d-flex gap-4">

//             <Nav.Link as={NavLink} to="/about" className="text-white nav-btn">
//               ABOUT
//             </Nav.Link>

//             <Nav.Link as={NavLink} to="/portfolio" className="text-white nav-btn">
//               PORTFOLIO
//             </Nav.Link>

//             <Nav.Link as={NavLink} to="/contact" className="text-white nav-btn">
//               CONTACT
//             </Nav.Link>

//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

