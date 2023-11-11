/* eslint-disable react-hooks/exhaustive-deps */
import "./App.css";
import { useEffect } from "react";
import KanbanBoard from "./components/KanbanBoard/KanbanBoard";
import { useGetDataQuery } from "./CustomHook/useQueryHook";

function App() {
  const { data, isLoading, isError, refetch } = useGetDataQuery();

  useEffect(() => {
    refetch();
  }, []);

  return (
    <div className="App">
      {isLoading && <p>Loading data...</p>}
      {isError && <p>Error fetching data</p>}
      {data && <KanbanBoard tickets={data.tickets} users={data.users} />}
    </div>
  );
}

export default App;
