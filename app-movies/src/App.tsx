import { BrowserRouter, Route, Routes } from "react-router-dom";
import TopRated from "./page/TopRated";
import NowPlaying from "./page/NowPlaying";
import DetailMovie from "./page/DetailMovie";
import SearchMovie from "./page/SearchMovie";
import NotFound from "./page/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/now-playing" element={<NowPlaying />} />
        <Route path="/search" element={<SearchMovie />} />
        <Route path="/detail-movie/:id" element={<DetailMovie />} />
        <Route path="/" element={<TopRated />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
