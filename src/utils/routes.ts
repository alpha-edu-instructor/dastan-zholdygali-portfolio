import AboutPage from "@pages/AboutPage";
import ContactPage from "@pages/ContactPage";
import { ABOUT_PAGE_ROUTE, CONTACT_PAGE_ROUTE } from "./consts";
import { IAppRoute } from "./interfaces";

export const routes: IAppRoute[] = [
  {
    path: ABOUT_PAGE_ROUTE,
    element: AboutPage
  },
  {
    path: CONTACT_PAGE_ROUTE,
    element: ContactPage
  }
];
