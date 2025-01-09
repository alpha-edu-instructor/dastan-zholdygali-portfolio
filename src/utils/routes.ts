import AboutPage from "@pages/AboutPage";
import { ABOUT_PAGE_ROUTE } from "./consts";
import { IAppRoute } from "./interfaces";

export const routes: IAppRoute[] = [
  {
    path: ABOUT_PAGE_ROUTE,
    element: AboutPage
  }
];
