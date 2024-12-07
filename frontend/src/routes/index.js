import CarDetailPage from "../pages/CarDetailPage";
import HomePage from "../pages/Home";
import { routeText } from "./RouteText";

export const routeMapper = [
  {
    path: routeText.HOME,
    component: HomePage,
  },
  {
    path: routeText.CAR_DETAIL,
    component: CarDetailPage,
  },
];
