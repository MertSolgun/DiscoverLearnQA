import "./App.css";
import Header from "./components/Header";
import Question from "./components/Question";
import data from "./helper/data";

function App() {
  return (
    <div className="App">
      <Header />
      <Question data={data} />
    </div>
  );
}

export default App;
