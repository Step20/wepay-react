import { NavPage } from "./components/NavComponent";
import { Home } from "./components/HomeComponent";
import { Under } from "./components/UnderComponent";
import { Box } from "./components/BoxComponent";
import { Card } from "./components/CardComponent";
import { Partner } from "./components/PartnerComponent";
import { Footer } from "./components/FooterComponent";
import "./style/main.scss";

function App() {
  return (
    <div className="App">
      <Home />
      <Under />
      <Box />
      <Card />
      <Partner />
      <Footer />
    </div>
  );
}

export default App;
