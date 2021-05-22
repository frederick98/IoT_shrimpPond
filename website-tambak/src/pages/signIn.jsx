import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../signIn.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Login
        </Button>
      </Form>
    </div>
  );
}

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

//import AboutUs from "./aboutUs";
//import MyKolamMain from "./myKolam";
//export { Login } from "../components/login/login";
//export { Register } from "../components/login/register";

// const SignIn = () => {
//   return (
//     // <body class="text-center">
//     //   <form class="form-signin" _lpchecked="1">
//     //     <img
//     //       class="mb-4"
//     //       src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg"
//     //       alt=""
//     //       width="72"
//     //       height="72"
//     //     />
//     //     <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
//     //     <label for="inputEmail" class="sr-only">
//     //       Email address
//     //     </label>
//     //     <input
//     //       type="email"
//     //       id="inputEmail"
//     //       class="form-control"
//     //       placeholder="Email address"
//     //       required=""
//     //       autofocus=""
//     //       autocomplete="off"
//     //       style={{background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAAAXNSR0IArs4c6QAAAPhJREFUOBHlU70KgzAQPlMhEvoQTg6OPoOjT+JWOnRqkUKHgqWP4OQbOPokTk6OTkVULNSLVc62oJmbIdzd95NcuGjX2/3YVI/Ts+t0WLE2ut5xsQ0O+90F6UxFjAI8qNcEGONia08e6MNONYwCS7EQAizLmtGUDEzTBNd1fxsYhjEBnHPQNG3KKTYV34F8ec/zwHEciOMYyrIE3/ehKAqIoggo9inGXKmFXwbyBkmSQJqmUNe15IRhCG3byphitm1/eUzDM4qR0TTNjEixGdAnSi3keS5vSk2UDKqqgizLqB4YzvassiKhGtZ/jDMtLOnHz7TE+yf8BaDZXA509yeBAAAAAElFTkSuQmCC"); background-repeat: no-repeat; background-attachment: scroll; background-size: 16px 18px; background-position: 98% 50%}}/>
//     //     <label for="inputPassword" class="sr-only">
//     //       Password
//     //     </label>
//     //     <input
//     //       type="password"
//     //       id="inputPassword"
//     //       class="form-control"
//     //       placeholder="Password"
//     //       required=""
//     //       autocomplete="off"
//     //       style='background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAAAXNSR0IArs4c6QAAAPhJREFUOBHlU70KgzAQPlMhEvoQTg6OPoOjT+JWOnRqkUKHgqWP4OQbOPokTk6OTkVULNSLVc62oJmbIdzd95NcuGjX2/3YVI/Ts+t0WLE2ut5xsQ0O+90F6UxFjAI8qNcEGONia08e6MNONYwCS7EQAizLmtGUDEzTBNd1fxsYhjEBnHPQNG3KKTYV34F8ec/zwHEciOMYyrIE3/ehKAqIoggo9inGXKmFXwbyBkmSQJqmUNe15IRhCG3byphitm1/eUzDM4qR0TTNjEixGdAnSi3keS5vSk2UDKqqgizLqB4YzvassiKhGtZ/jDMtLOnHz7TE+yf8BaDZXA509yeBAAAAAElFTkSuQmCC"); background-repeat: no-repeat; background-attachment: scroll; background-size: 16px 18px; background-position: 98% 50%;'
//     //     />
//     //     <div class="checkbox mb-3">
//     //       <label>
//     //         <input type="checkbox" value="remember-me">
//     //           {" "}
//     //           Remember me
//     //         </input>
//     //       </label>
//     //     </div>
//     //     <button class="btn btn-lg btn-primary btn-block" type="submit">
//     //       Sign in
//     //     </button>
//     //     <p class="mt-5 mb-3 text-muted">© 2017-2018</p>
//     //   </form>
//     // </body>
//     // <Router>
//     //   <div className="App">
//     //     <nav className="navbar navbar-expand-lg navbar-light fixed-top">
//     //       <div className="container">
//     //         <Link className="navbar-brand" to={"/sign-in"}>
//     //           positronX.io
//     //         </Link>
//     //         <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
//     //           <ul className="navbar-nav ml-auto">
//     //             <li className="nav-item">
//     //               <Link className="nav-link" to={"/sign-in"}>
//     //                 Login
//     //               </Link>
//     //             </li>
//     //             <li className="nav-item">
//     //               <Link className="nav-link" to={"/sign-up"}>
//     //                 Sign up
//     //               </Link>
//     //             </li>
//     //           </ul>
//     //         </div>
//     //       </div>
//     //     </nav>

//     //     <div className="auth-wrapper">
//     //       <div className="auth-inner">
//     //         <Switch>
//     //           <Route exact path="/" component={MyKolamMain} />
//     //           <Route path="/sign-in" component={SignIn} />
//     //           <Route path="/sign-up" component={AboutUs} />
//     //         </Switch>
//     //       </div>
//     //     </div>
//     //   </div>
//     // </Router>
//   );
// };

// export default SignIn;
