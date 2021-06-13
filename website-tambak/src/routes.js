import React from "react";

const Toaster = React.lazy(() =>
  import("./views/helper/notifications/toaster/Toaster")
);

const Paginations = React.lazy(() =>
  import("./views/helper/base/paginations/Pagnations")
);
const ProgressBar = React.lazy(() =>
  import("./views/helper/base/progress-bar/ProgressBar")
);

const BrandButtons = React.lazy(() =>
  import("./views/helper/buttons/brand-buttons/BrandButtons")
);
const Buttons = React.lazy(() =>
  import("./views/helper/buttons/buttons/Buttons")
);
const CoreUIIcons = React.lazy(() =>
  import("./views/helper/icons/coreui-icons/CoreUIIcons")
);
const Brands = React.lazy(() => import("./views/helper/icons/brands/Brands"));
const Alerts = React.lazy(() =>
  import("./views/helper/notifications/alerts/Alerts")
);

const MainPage = React.lazy(() => import("./views/home"));

// Admin-Specific Routes
const ADashboard = React.lazy(() => import("./views/admins/aDashboard"));
const ADataGraphics = React.lazy(() =>
  import("./views/admins/monitoring/aDataGraphics")
);
const ANodeCheck = React.lazy(() =>
  import("./views/admins/monitoring/aNodeCheck")
);
const AAddUser = React.lazy(() => import("./views/admins/account/aAddUser"));

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
  { path: "/admins/ADashboard", name: "Dashboard", component: ADashboard },
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
    path: "/admins/account/AAddUser",
    name: "Add New User",
    component: AAddUser,
  },

  { path: "/", exact: true, name: "Home" },
  { path: "/mainPage", name: "Main", component: MainPage },

  // User-Specific Routes
  { path: "/users/UDashboard", name: "Dashboard", component: UDashboard },
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

  { path: "/base/paginations", name: "Paginations", component: Paginations },
  { path: "/base/progress-bar", name: "Progress Bar", component: ProgressBar },
  { path: "/buttons", name: "Buttons", component: Buttons, exact: true },
  { path: "/buttons/buttons", name: "Buttons", component: Buttons },
  {
    path: "/buttons/brand-buttons",
    name: "Brand Buttons",
    component: BrandButtons,
  },
  { path: "/icons", exact: true, name: "Icons", component: CoreUIIcons },
  { path: "/icons/coreui-icons", name: "CoreUI Icons", component: CoreUIIcons },
  { path: "/icons/brands", name: "Brands", component: Brands },
  {
    path: "/notifications",
    name: "Notifications",
    component: Alerts,
    exact: true,
  },
  { path: "/notifications/alerts", name: "Alerts", component: Alerts },
  { path: "/notifications/toaster", name: "Toaster", component: Toaster },
];

export default routes;
