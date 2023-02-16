import Header from "./components/Header/Header";
import { SportSeeLogo } from "./components/svg/index";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import "./services/user/Modeling/types";

const headerNavLinks = [
  { route: "/", name: "Accueil" },
  { route: "/profile", name: "Profil" },
  { route: "/", name: "Réglage" },
  { route: "/", name: "Communauté" },
];

const App = () => {
  return (
    <BrowserRouter>
      <Header Logo={SportSeeLogo} links={headerNavLinks} />
      <Routes />
    </BrowserRouter>
  );
};

export default App;
