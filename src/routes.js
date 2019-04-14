import Dashboard from "views/Dashboard.jsx";
import TableList from "views/TableList.jsx";
import ImageMarker from "views/ImageMarker.jsx";
import UserProfile from "views/UserProfile.jsx";
import NewProject from "./views/NewProject";

var routes = [
  {
    path: "/dashboard",
    name: "Projects",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-chart-pie-36",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/newproject",
    name: "New Project",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-cloud-upload-94",
    component: NewProject,
    layout: "/admin"
  },
  // {
  //   path: "/icons",
  //   name: "Icons",
  //   rtlName: "الرموز",
  //   icon: "tim-icons icon-atom",
  //   component: Icons,
  //   layout: "/admin"
  // },
  // {
  //   path: "/notifications",
  //   name: "Notifications",
  //   rtlName: "إخطارات",
  //   icon: "tim-icons icon-bell-55",
  //   component: Notifications,
  //   layout: "/admin"
  // },
  {
    path: "/user-profile",
    name: "User Profile",
    rtlName: "ملف تعريفي للمستخدم",
    icon: "tim-icons icon-single-02",
    component: UserProfile,
    layout: "/admin"
  },
  // {
  //   path: "/tables",
  //   name: "Table List",
  //   rtlName: "قائمة الجدول",
  //   icon: "tim-icons icon-puzzle-10",
  //   component: TableList,
  //   layout: "/admin"
  // },
  {
    path: "/imagemarking",
    name: "Image Marker",
    rtlName: "طباعة",
    icon: "tim-icons icon-atom",
    component: ImageMarker,
    layout: "/admin"
  }
];
export default routes;
