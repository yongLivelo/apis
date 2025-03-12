import { BrowserRouter, Routes, Route } from "react-router";
import Biodata from "@/pages/Biodata/Biodata";
import Layout from "@/layouts/Layout";
import References from "@/pages/References/References";
import Settings from "@/pages/Settings/Settings";

function App() {
  return (
    <>
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route path="/references" element={<References />} />
            <Route path="/biodata" element={<Biodata />} />
            <Route path="/settings" element={<Settings />} />
            <Route index element={<References />} />
          </Routes>
        </BrowserRouter>
      </Layout>
    </>
  );
}

export default App;
