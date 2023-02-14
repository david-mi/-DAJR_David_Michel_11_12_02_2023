import Header from "./components/Header/Header";
import SportSeeLogo from "./components/svg/Logo/Logo";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";

const App = () => {
  return (
    <BrowserRouter>
      <Header Logo={SportSeeLogo} />
      <Routes />
    </BrowserRouter>
  );
};

export default App;
