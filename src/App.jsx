import { Route, Routes } from "react-router";
import Home from "./components/pages/Home";
import Rootlayouts from "./components/layouts/Rootlayouts";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Rootlayouts />}>
          <Route index element={<Home />} />
        </Route>
        {/* <Route path="error" element={<Settings />} /> */}
      </Routes>
    </>
  );
}

export default App;
