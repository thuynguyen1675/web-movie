import { BrowserRouter, Route, Routes } from "react-router-dom";
import TopRated from "./component/TopRated";
import NowPlaying from "./component/NowPlaying";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/now-playing" element={<NowPlaying />} />
        <Route path="/" element={<TopRated />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
