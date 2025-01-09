import AboutPage from "@pages/AboutPage";
import ContactPage from "@pages/ContactPage";
import HomePage from "@pages/HomePage";
import PortfolioPage from "@pages/PortfolioPage";
import {
  ABOUT_PAGE_ROUTE,
  CONTACT_PAGE_ROUTE,
  HOME_PAGE_ROUTE,
  PORTFOLIO_PAGE_ROUTE
} from "./consts";
import { IAppRoute } from "./interfaces";

export const routes: IAppRoute[] = [
  {
    path: HOME_PAGE_ROUTE,
    element: HomePage
  },
  {
    path: ABOUT_PAGE_ROUTE,
    element: AboutPage
  },
  {
    path: CONTACT_PAGE_ROUTE,
    element: ContactPage
  },
  {
    path: PORTFOLIO_PAGE_ROUTE,
    element: PortfolioPage
  }
];
