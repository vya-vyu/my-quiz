import Quiz from "./Quiz";
import { jsQuizz } from "./constants";
function App() {
  return (
    <div className="App">
      <Quiz questions={jsQuizz.questions} />
    </div>
  );
}

export default App;
