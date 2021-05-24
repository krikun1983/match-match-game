import { Route } from "../app.api";
import { NotFound404Page } from "../components/page/404Page";
import { AboutPage } from "../components/page/aboutPage";
import { GamePage } from "../components/page/gamePage";
import { ScorePage } from "../components/page/scorePage";

export const routes: Route[] = [
  {
    path: '/',
    Component: AboutPage,
  },
  {
    path: '/about',
    Component: AboutPage,
  },
  {
    path: '/score',
    Component: ScorePage,
  },
  {
    path: '/game',
    Component: GamePage,
  },
  {
    path: '/**',
    Component: NotFound404Page,
  },
];
