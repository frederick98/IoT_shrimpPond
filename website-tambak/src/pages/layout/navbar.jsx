// library needed
import React, { Component } from "react";
import { Nav, NavBar, Form, FormControl } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const NavigationBar = () => {
  const History = useHistory();
  return (
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
      <div class="container-fluid">
        <a
          class="navbar-brand"
          href=""
          onClick={() => {
            History.push("/");
          }}
        >
          <div class="row h-100 justify-content-center align-items-center">
            <div class="col-xs-4">
              <img
                src="img/logo_unpar.png"
                alt="logoUnpar"
                class="d-inline-block align-middle"
                width="50"
                height="50"
              />
            </div>
            <div class="col-xs-4"></div>
            <div class="col-xs-4">
              <h2 class="container-fluid">KolamKu</h2>
            </div>
          </div>
        </a>
        <span></span>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsExample03"
          aria-controls="navbarsExample03"
          aria-expanded="false"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarsExample03">
          <ul class="navbar-nav ml-auto mb-2 mb-sm-0">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="myKolam">
                MyKolam
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="locations">
                Locations
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="hardwares">
                Hardwares
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="features">
                Features
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="howTo">
                How-To
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="aboutUs">
                About Us
              </a>
            </li>
            {/* <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="dropdown03"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul class="dropdown-menu" aria-labelledby="dropdown03">
                <li>
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li> */}
          </ul>
          {/* <form>
            <input
              class="form-control"
              type="text"
              placeholder="Search"
              aria-label="Search"
            />
          </form> */}
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;

// const Styles = styled.div`
//   .navbar {
//     background-color: #222;
//   }
//   a,
//   .navbar-nav,
//   .navbar-light .nav-link {
//     color: #9fffcb;
//     &:hover {
//       color: white;
//     }
//   }
//   .navbar-brand {
//     font-size: 1.4em;
//     color: #9fffcb;
//     &:hover {
//       color: white;
//     }
//   }
//   .form-center {
//     position: absolute !important;
//     left: 25%;
//     right: 25%;
//   }
// `;

// const NavigationBar = () => (
//   <Styles>
//     <Navbar expand="lg">
//       <Navbar.Brand href="/">Tutorial</Navbar.Brand>
//       <Navbar.Toggle aria-controls="basic-navbar-nav" />
//       <Form className="form-center">
//         <FormControl type="text" placeholder="Search" className="" />
//       </Form>
//       <Navbar.Collapse id="basic-navbar-nav">
//         <Nav className="ml-auto">
//           <Nav.Item>
//             <Nav.Link href="/">Home</Nav.Link>
//           </Nav.Item>
//           <Nav.Item>
//             <Nav.Link href="/about">About</Nav.Link>
//           </Nav.Item>
//         </Nav>
//       </Navbar.Collapse>
//     </Navbar>
//   </Styles>
// );
