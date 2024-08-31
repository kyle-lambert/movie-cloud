import { Route, Routes } from "react-router-dom";

import { Sidebar } from "@/components/sidebar";
import { Movies } from "@/routes/movies";
import { Root } from "@/routes/root";
import { Search } from "@/routes/search";
import { TvShows } from "@/routes/tv-shows";
import { Single } from "@/routes/single";

function App() {
  console.log(import.meta.env.VITE_BASE_URL);
  return (
    <div className="app">
      <Sidebar />
      <Routes>
        <Route
          path="/"
          Component={Root}
        />
        <Route
          path="/movies"
          Component={Movies}
        />
        <Route
          path="/tv-shows"
          Component={TvShows}
        />
        <Route
          path="/search"
          Component={Search}
        />
        <Route
          path="/:mediaType/:id"
          Component={Single}
        />
      </Routes>
    </div>
  );
}

export default App;
