/* eslint-disable react-hooks/exhaustive-deps */
import "./App.css";
import { useEffect } from "react";
import KanbanBoard from "./components/KanbanBoard/KanbanBoard";
import { useGetDataQuery } from "./CustomHook/useQueryHook";
import Loader from "./components/Loader/Loader";

function App() {
  const { data, isLoading, refetch } = useGetDataQuery();

  useEffect(() => {
    refetch();
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <Loader />
      ) : (
        data && <KanbanBoard tickets={data.tickets} users={data.users} />
      )}
    </div>
  );
}

export default App;
