import { Game } from "../components/game/game";
import { Header } from "../components/header/header";
import { Main } from "../components/main/main";


export default [
  { path: "/", component: new Header() },
  { path: "/best", component: new Main() },
  { path: "/settings", component: new Game() },
];
