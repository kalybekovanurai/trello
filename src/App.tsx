import AddColumnForm from "./components/AddColumnForm";
import Board from "./components/Board";


import "./index.css";

function App() {
  return (
    <div className="flex flex-col items-center bg-gray-100 p-6 m-6">
      <header className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Mini Trello</h1>
        <AddColumnForm />
      </header>

      <Board/>
    </div>
  );
}

export default App;
