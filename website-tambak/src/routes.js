import React from "react";

const Toaster = React.lazy(() =>
  import("./views/notifications/toaster/Toaster")
);

const Paginations = React.lazy(() =>
  import("./views/base/paginations/Pagnations")
);
const ProgressBar = React.lazy(() =>
  import("./views/base/progress-bar/ProgressBar")
);

const Tooltips = React.lazy(() => import("./views/base/tooltips/Tooltips"));
const BrandButtons = React.lazy(() =>
  import("./views/buttons/brand-buttons/BrandButtons")
);
const Buttons = React.lazy(() => import("./views/buttons/buttons/Buttons"));
const Dashboard = React.lazy(() => import("./views/dashboard/Dashboard"));
const CoreUIIcons = React.lazy(() =>
  import("./views/icons/coreui-icons/CoreUIIcons")
);
const Brands = React.lazy(() => import("./views/icons/brands/Brands"));
const Alerts = React.lazy(() => import("./views/notifications/alerts/Alerts"));

const MainPage = React.lazy(() => import("./views/home"));
const Location = React.lazy(() => import("./views/maps/location"));
const DataGraphics = React.lazy(() => import("./views/admins/dataGraphics"));
const NodeCheck = React.lazy(() => import("./views/admins/nodeCheck"));
const Monitoring = React.lazy(() => import("./views/admins/monitoring"));
const BugReport = React.lazy(() => import("./views/help/bugReport"));
const HowTo = React.lazy(() => import("./views/help/howTo"));
const Features = React.lazy(() => import("./views/authors/features"));
const Hardwares = React.lazy(() => import("./views/authors/hardwares"));
const AboutUs = React.lazy(() => import("./views/authors/aboutUs"));

const routes = [
  { path: "/", exact: true, name: "Home" },
  { path: "/dashboard", name: "Dashboard", component: Dashboard },
  { path: "/base/paginations", name: "Paginations", component: Paginations },
  { path: "/base/progress-bar", name: "Progress Bar", component: ProgressBar },
  { path: "/base/tooltips", name: "Tooltips", component: Tooltips },
  { path: "/buttons", name: "Buttons", component: Buttons, exact: true },
  { path: "/buttons/buttons", name: "Buttons", component: Buttons },

  { path: "/mainPage", name: "Main", component: MainPage },
  { path: "/location", name: "Pond Location", component: Location },
  {
    path: "/admins/dataGraphics",
    name: "Data Graphics Diagram",
    component: DataGraphics,
  },
  {
    path: "/admins/nodeCheck",
    name: "Node Status Checking",
    component: NodeCheck,
  },
  {
    path: "/admins/monitoring",
    name: "Monitoring",
    component: Monitoring,
  },
  { path: "/help/bugReport", name: "Bug Report", component: BugReport },
  { path: "/help/howTo", name: "How-To-Use", component: HowTo },
  { path: "/credits/aboutUs", name: "Author", component: AboutUs },
  { path: "/credits/features", name: "Features", component: Features },
  { path: "/credits/hardwares", name: "Hardwares", component: Hardwares },

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
