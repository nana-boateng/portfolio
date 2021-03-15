// components
import Card from "./components/Card";
import Intro from "./components/Intro";
import Specialties from "./components/Specialities";

function App() {
  return (
    <div className="h-screen bg-indigo-300 flex flex-col justify-center">
      <div className="flex flex-row justify-center">
        <h1 className="text-9xl text-black">nana.</h1>
      </div>
      <Intro />
      <Specialties />
      <div>
        <Card header="TEST" content="content" />
      </div>
    </div>
  );
}

export default App;
