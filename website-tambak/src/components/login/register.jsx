import React from "react";
import loginImg from "../../../public/img/pic_login.jpg";

export class Register extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="base-container">
        <div className="header">Register</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} alt="img login"></img>
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="Username?" />
            </div>
            <div className="form-group">
              <label htmlFor="text">E-Mail</label>
              <input type="text" name="email" placeholder="E-Mail?" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="Password?" />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn">
            Register
          </button>
        </div>
      </div>
    );
  }
}

{
  /* <a href='https://www.freepik.com/vectors/background'>Background vector created by brgfx - www.freepik.com</a> */
}
