import React from "react";

const MainPage = React.lazy(() => import("./views/home"));

// Admin-Specific Routes
const ADashboard = React.lazy(() => import("./views/admins/aDashboard"));
const ADataGraphics = React.lazy(() =>
  import("./views/admins/monitoring/aDataGraphics")
);
const ANodeCheck = React.lazy(() =>
  import("./views/admins/monitoring/aNodeCheck")
);
const AAdd = React.lazy(() => import("./views/admins/monitoring/aAdd"));
const AUserControl = React.lazy(() =>
  import("./views/admins/account/aUserControl")
);

// User-Specific Routes
const UDashboard = React.lazy(() => import("./views/users/uDashboard"));
const UDataGraphics = React.lazy(() =>
  import("./views/users/monitoring/uDataGraphics")
);

// All-User Routes
const BMonitoring = React.lazy(() =>
  import("./views/allUser/monitoring/bMonitoring")
);
const BBugReport = React.lazy(() => import("./views/allUser/help/bBugReport"));
const BHowTo = React.lazy(() => import("./views/allUser/help/bHowTo"));
const BLocation = React.lazy(() => import("./views/allUser/maps/bLocation"));
const BFeatures = React.lazy(() => import("./views/allUser/about/bFeatures"));
const BHardwares = React.lazy(() => import("./views/allUser/about/bHardwares"));
const BAboutUs = React.lazy(() => import("./views/allUser/about/bAuthor"));

const routes = [
  // Admin-Specific Routes
  {
    path: "/admins/ADashboard",
    name: "Dashboard",
    component: ADashboard,
    id: 1,
  },
  {
    path: "/admins/monitoring/ADataGraphics",
    name: "Data Graphics Diagram",
    component: ADataGraphics,
  },
  {
    path: "/admins/monitoring/ANodeCheck",
    name: "Node Status Checking",
    component: ANodeCheck,
  },
  {
    path: "/admins/monitoring/AAdd",
    name: "Add New Node/Pond",
    component: AAdd,
  },
  {
    path: "/admins/account/AUserControl",
    name: "Manage User Access",
    component: AUserControl,
  },

  // User-Specific Routes
  {
    path: "/users/UDashboard",
    name: "Dashboard",
    component: UDashboard,
    id: 0,
  },
  {
    path: "/users/monitoring/UDataGraphics",
    name: "Data Graphics Diagram",
    component: UDataGraphics,
  },

  // All-User Routes
  {
    path: "/allUser/monitoring/monitoring",
    name: "Monitoring",
    component: BMonitoring,
  },
  {
    path: "/allUser/help/bugReport",
    name: "Bug Report",
    component: BBugReport,
  },
  { path: "/allUser/help/howTo", name: "How-To-Use", component: BHowTo },
  { path: "/allUser/location", name: "Pond Location", component: BLocation },
  { path: "/allUser/about/authors", name: "Author", component: BAboutUs },
  { path: "/allUser/about/features", name: "Features", component: BFeatures },
  {
    path: "/allUser/about/hardwares",
    name: "Hardwares",
    component: BHardwares,
  },

  { path: "/", exact: true, name: "Home" },
  { path: "/mainPage", name: "Main", component: MainPage },
];

export default routes;
