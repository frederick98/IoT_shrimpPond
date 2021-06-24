import React from "react";
import CIcon from "@coreui/icons-react";

const aNav = [
  {
    _tag: "CSidebarNavItem",
    name: "Dashboard",
    to: "/admins/ADashboard",
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />,
    badge: {
      color: "info",
      text: "NEW",
      shape: "pill",
    },
  },
  {
    _tag: "CSidebarNavItem",
    name: "Your Pond Location",
    to: "/allUser/location",
    icon: <CIcon name="cil-location-pin" customClasses="c-sidebar-nav-icon" />,
    badge: {
      color: "info",
      text: "NEW",
      shape: "pill",
    },
  },
  {
    _tag: "CSidebarNavTitle",
    _children: ["Monitoring Menu"],
  },
  // {
  //   _tag: "CSidebarNavItem",
  //   name: "Data Graphics Diagram",
  //   to: "/admins/monitoring/ADataGraphics",
  //   icon: "cil-graph",
  //   badge: {
  //     color: "info",
  //     text: "BETA",
  //     shape: "pill",
  //   },
  // },
  {
    _tag: "CSidebarNavItem",
    name: "Node Status Checking",
    to: "/admins/monitoring/ANodeCheck",
    icon: "cil-check-circle",
  },
  {
    _tag: "CSidebarNavItem",
    name: "Monitoring",
    to: "/allUser/monitoring/monitoring",
    icon: <CIcon name="cil-tv" customClasses="c-sidebar-nav-icon" />,
  },
  {
    _tag: "CSidebarNavItem",
    name: "Add New Node",
    to: "/admins/monitoring/AAdd",
    icon: "cil-plus",
  },
  {
    _tag: "CSidebarNavTitle",
    _children: ["User Account"],
  },
  {
    _tag: "CSidebarNavItem",
    name: "Manage User Access",
    to: "/admins/account/AUserControl",
    icon: <CIcon name="cil-people" customClasses="c-sidebar-nav-icon" />,
  },
  {
    _tag: "CSidebarNavTitle",
    _children: ["Help"],
  },
  // {
  //   _tag: "CSidebarNavItem",
  //   name: "Bug Report",
  //   //to: "/allUser/help/bugReport",
  //   icon: <CIcon name="cil-bug" customClasses="c-sidebar-nav-icon" />,
  //   badge: {
  //     color: "warning",
  //     text: "PREVIEW",
  //     shape: "pill",
  //   },
  //   addLinkClass: "c-disabled",
  //   disabled: true,
  // },
  {
    _tag: "CSidebarNavItem",
    name: "How-To-Use",
    to: "/allUser/help/howTo",
    icon: "cil-list-numbered",
  },
  {
    _tag: "CSidebarNavTitle",
    _children: ["About Applications"],
  },
  {
    _tag: "CSidebarNavItem",
    name: "Application Features",
    to: "/allUser/about/features",
    icon: "cil-pin",
  },
  {
    _tag: "CSidebarNavItem",
    name: "Hardwares",
    to: "/allUser/about/hardwares",
    icon: "cil-devices",
  },
  {
    _tag: "CSidebarNavItem",
    name: "System Author",
    to: "/allUser/about/authors",
    icon: "cib-about-me",
  },
];

export default aNav;
