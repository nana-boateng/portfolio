import { BrowserRouter as Router, Route } from "react-router-dom";

// pages
import Home from "./pages/Home";
import Skills from "./pages/Skills";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/skills" component={Skills} />
      {/* <Home />
      <Skills /> */}
    </Router>
  );
}

export default App;
