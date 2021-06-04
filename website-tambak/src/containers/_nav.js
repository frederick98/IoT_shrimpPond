import React from "react";
import CIcon from "@coreui/icons-react";

const _nav = [
  {
    _tag: "CSidebarNavItem",
    name: "Dashboard",
    to: "/dashboard",
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
    to: "/location",
    icon: <CIcon name="cil-location-pin" customClasses="c-sidebar-nav-icon" />,
    badge: {
      color: "info",
      text: "NEW",
      shape: "pill",
    },
  },
  {
    _tag: "CSidebarNavTitle",
    _children: ["Admin Menu"],
  },
  {
    _tag: "CSidebarNavItem",
    name: "Data Graphics Diagram",
    to: "/admins/dataGraphics",
    icon: "cil-graph",
    badge: {
      color: "info",
      text: "BETA",
      shape: "pill",
    },
  },
  {
    _tag: "CSidebarNavItem",
    name: "Node Status Checking",
    to: "/admins/nodeCheck",
    icon: "cil-check-circle",
  },
  {
    _tag: "CSidebarNavItem",
    name: "Monitoring",
    to: "/admins/monitoring",
    icon: <CIcon name="cil-tv" customClasses="c-sidebar-nav-icon" />,
  },
  {
    _tag: "CSidebarNavTitle",
    _children: ["Help"],
  },
  {
    _tag: "CSidebarNavItem",
    name: "Bug Report",
    //to: "/help/bugReport",
    icon: <CIcon name="cil-bug" customClasses="c-sidebar-nav-icon" />,
    badge: {
      color: "warning",
      text: "PREVIEW",
      shape: "pill",
    },
    addLinkClass: "c-disabled",
    disabled: true,
  },
  {
    _tag: "CSidebarNavItem",
    name: "How-To-Use",
    to: "/help/howTo",
    icon: "cil-list-numbered",
  },
  {
    _tag: "CSidebarNavTitle",
    _children: ["About Applications"],
  },
  {
    _tag: "CSidebarNavItem",
    name: "Application Features",
    to: "/credits/features",
    icon: "cil-pin",
  },
  {
    _tag: "CSidebarNavItem",
    name: "Hardwares",
    to: "/credits/hardwares",
    icon: "cil-devices",
  },
  {
    _tag: "CSidebarNavItem",
    name: "System Author",
    to: "/credits/aboutUs",
    icon: "cib-about-me",
  },

  {
    _tag: "CSidebarNavDivider",
    className: "m-5",
  },
  {
    _tag: "CSidebarNavDivider",
    className: "m-5",
  },
  {
    _tag: "CSidebarNavDivider",
    className: "m-5",
  },
  {
    _tag: "CSidebarNavDivider",
    className: "m-5",
  },
  {
    _tag: "CSidebarNavDivider",
    className: "m-5",
  },
  {
    _tag: "CSidebarNavTitle",
    _children: ["Theme"],
  },
  {
    _tag: "CSidebarNavItem",
    name: "Colors",
    to: "/theme/colors",
    icon: "cil-drop",
  },
  {
    _tag: "CSidebarNavTitle",
    _children: ["Components"],
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Base",
    route: "/base",
    icon: "cil-puzzle",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Breadcrumb",
        to: "/base/breadcrumbs",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Cards",
        to: "/base/cards",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Pagination",
        to: "/base/paginations",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Progress",
        to: "/base/progress-bar",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Tooltips",
        to: "/base/tooltips",
      },
    ],
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Buttons",
    route: "/buttons",
    icon: "cil-cursor",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Buttons",
        to: "/buttons/buttons",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Brand buttons",
        to: "/buttons/brand-buttons",
      },
    ],
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Icons",
    route: "/icons",
    icon: "cil-star",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "CoreUI Free",
        to: "/icons/coreui-icons",
        badge: {
          color: "success",
          text: "NEW",
        },
      },
      {
        _tag: "CSidebarNavItem",
        name: "CoreUI Brands",
        to: "/icons/brands",
      },
    ],
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Notifications",
    route: "/notifications",
    icon: "cil-bell",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Alerts",
        to: "/notifications/alerts",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Toaster",
        to: "/notifications/toaster",
      },
    ],
  },
  {
    _tag: "CSidebarNavDivider",
  },
  {
    _tag: "CSidebarNavTitle",
    _children: ["Extras"],
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Pages",
    route: "/pages",
    icon: "cil-star",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Error 404",
        to: "/404",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Error 500",
        to: "/500",
      },
    ],
  },
  {
    _tag: "CSidebarNavDivider",
    className: "m-2",
  },
  {
    _tag: "CSidebarNavDivider",
    className: "m-2",
  },
];

export default _nav;
