import React from "react";

const Toaster = React.lazy(() =>
  import("./views/notifications/toaster/Toaster")
);
const Tables = React.lazy(() => import("./views/base/tables/Tables"));

const Breadcrumbs = React.lazy(() =>
  import("./views/base/breadcrumbs/Breadcrumbs")
);
const Cards = React.lazy(() => import("./views/base/cards/Cards"));

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
const ButtonGroups = React.lazy(() =>
  import("./views/buttons/button-groups/ButtonGroups")
);
const Buttons = React.lazy(() => import("./views/buttons/buttons/Buttons"));
const Dashboard = React.lazy(() => import("./views/dashboard/Dashboard"));
const CoreUIIcons = React.lazy(() =>
  import("./views/icons/coreui-icons/CoreUIIcons")
);
const Brands = React.lazy(() => import("./views/icons/brands/Brands"));
const Alerts = React.lazy(() => import("./views/notifications/alerts/Alerts"));
const Badges = React.lazy(() => import("./views/notifications/badges/Badges"));
const Modals = React.lazy(() => import("./views/notifications/modals/Modals"));
const Colors = React.lazy(() => import("./views/theme/colors/Colors"));
const Users = React.lazy(() => import("./views/users/Users"));
const User = React.lazy(() => import("./views/users/User"));

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
  { path: "/theme", name: "Theme", component: Colors, exact: true },
  { path: "/theme/colors", name: "Colors", component: Colors },
  { path: "/base", name: "Base", component: Cards, exact: true },
  { path: "/base/breadcrumbs", name: "Breadcrumbs", component: Breadcrumbs },
  { path: "/base/cards", name: "Cards", component: Cards },
  { path: "/base/paginations", name: "Paginations", component: Paginations },
  { path: "/base/progress-bar", name: "Progress Bar", component: ProgressBar },
  { path: "/base/tables", name: "Tables", component: Tables },
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
    path: "/buttons/button-groups",
    name: "Button Groups",
    component: ButtonGroups,
  },
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
  { path: "/notifications/badges", name: "Badges", component: Badges },
  { path: "/notifications/modals", name: "Modals", component: Modals },
  { path: "/notifications/toaster", name: "Toaster", component: Toaster },
  { path: "/users", exact: true, name: "Users", component: Users },
  { path: "/users/:id", exact: true, name: "User Details", component: User },
];

export default routes;
