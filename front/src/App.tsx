import { BrowserRouter, Routes, Route } from "react-router";
import Home from "@/pages/Home/Home";
import Biodata from "@/pages/Biodata/Biodata";
import Documents from "@/pages/Documents/Documents";
import Layout from "@/layouts/Layout";

function App() {
  return (
    <>
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/biodata" element={<Biodata />} />
            <Route path="/documents" element={<Documents />} />
            <Route index element={<Home />} />
          </Routes>
        </BrowserRouter>
      </Layout>
    </>
  );
}

export default App;
