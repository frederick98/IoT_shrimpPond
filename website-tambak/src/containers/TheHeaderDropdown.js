import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import {
  CBadge,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CImg,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";

class TheHeaderDropdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      userFeed: "",
      redirectToReferrer: false,
      name: "",
    };

    this.onChange = this.onChange.bind(this);
    this.logout = this.logout.bind(this);
  }
  onChange(e) {
    this.setState({ userFeed: e.target.value });
  }
  logout() {
    sessionStorage.setItem("userData", "");
    sessionStorage.clear();
    this.setState({ redirectToReferrer: true });
  }

  render() {
    if (this.state.redirectToReferrer) {
      return <Redirect to={"/mainPage"} />;
    }
    return (
      <CDropdown inNav className="c-header-nav-items mx-2" direction="down">
        <CDropdownToggle className="c-header-nav-link" caret={false}>
          <div className="c-avatar">
            <CImg
              src={"avatars/1.jpeg"}
              className="c-avatar-img"
              alt="admin@bootstrapmaster.com"
            />
            {/* <CIcon name="cil-user" className="mfe-2" /> */}
          </div>
        </CDropdownToggle>
        <CDropdownMenu className="pt-0" placement="bottom-end">
          {/* <CDropdownItem
          header
          tag="div"
          color="light"
          className="text-center"
        >
          <strong>Account</strong>
        </CDropdownItem>
        <CDropdownItem>
          <CIcon name="cil-bell" className="mfe-2" />
          Updates
          <CBadge color="info" className="mfs-auto">42</CBadge>
        </CDropdownItem>
        <CDropdownItem>
          <CIcon name="cil-envelope-open" className="mfe-2" />
          Messages
          <CBadge color="success" className="mfs-auto">42</CBadge>
        </CDropdownItem>
        <CDropdownItem>
          <CIcon name="cil-task" className="mfe-2" />
          Tasks
          <CBadge color="danger" className="mfs-auto">42</CBadge>
        </CDropdownItem>
        <CDropdownItem>
          <CIcon name="cil-comment-square" className="mfe-2" />
          Comments
          <CBadge color="warning" className="mfs-auto">42</CBadge>
        </CDropdownItem> */}
          <CDropdownItem header tag="div" color="light" className="text-center">
            <strong>Settings</strong>
          </CDropdownItem>
          {/* <CDropdownItem>
            <CIcon name="cil-user" className="mfe-2" />
            Profile
          </CDropdownItem> */}
          <CDropdownItem className="disabled">
            <CIcon name="cil-settings" className="mfe-2" />
            Settings
            <CBadge color="secondary" className="mfs-auto">
              BETA
            </CBadge>
          </CDropdownItem>
          <CDropdownItem className="disabled">
            <CIcon name="cil-file" className="mfe-2" />
            Projects
            <CBadge color="secondary" className="mfs-auto">
              BETA
            </CBadge>
          </CDropdownItem>
          <CDropdownItem divider />
          {/* <CDropdownItem>
          <CIcon name="cil-lock-locked" className="mfe-2" />
          Lock Account
        </CDropdownItem> */}
          <CDropdownItem href="#" onClick={this.logout}>
            <CIcon name="cil-account-logout" className="mfe-2" />
            Back to Main Page
          </CDropdownItem>
        </CDropdownMenu>
      </CDropdown>
    );
  }
}
export default TheHeaderDropdown;
