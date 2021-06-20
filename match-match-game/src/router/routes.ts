import Route from '../app.types';
import NotFound404Page from '../components/page/404Page/404Page';
import AboutPage from '../components/page/aboutPage/aboutPage';
import GamePage from '../components/page/gamePage/gamePage';
import ScorePage from '../components/page/scorePage/scorePage';
import SettingsPage from '../components/page/settingsPage/settingsPage';

const routes: Route[] = [
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
    path: '/settings',
    Component: SettingsPage,
  },
  {
    path: '/game',
    Component: GamePage,
  },
  {
    path: '**',
    Component: NotFound404Page,
  },
];

export default routes;
