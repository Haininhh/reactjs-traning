import Home from "../features/Home/Home";
import Login from "../features/Login/Login";

const routes = [
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/",
    component: Home,
  },
];

export default routes;
