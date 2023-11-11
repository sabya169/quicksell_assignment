import "./App.css";
import KanbanBoard from "./components/KanbanBoard/KanbanBoard";
import useQueryHook from "./CustomHook/useQueryHook";

function App() {
  const { data, isLoading, isError } = useQueryHook();

  if (isLoading) {
    return <div className="App">Loading...</div>;
  }

  if (isError) {
    return <div className="App">Error while fetching data</div>;
  }

  const { tickets, users } = data;

  return (
    <div className="App">
      <KanbanBoard tickets={tickets} users={users} />
    </div>
  );
}

export default App;
