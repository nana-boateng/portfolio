import { BrowserRouter as Router, Route } from "react-router-dom";

// pages
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Timeline from "./pages/Timeline";

function App() {
  return (
    <Home />
    // <Router>
    //   <Route exact path="/" component={Home} />
    //   <Route exact path="/skills" component={Skills} />
    //   <Route exact path="/projects" component={Projects} />
    //   <Route exact path="/timeline" component={Timeline} />
    // </Router>
  );
}

export default App;
