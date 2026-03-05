import { Route, Routes } from "react-router";
import Home from "./component/pages/Home";
import Rootlayouts from "./component/layouts/Rootlayouts";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Rootlayouts />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
