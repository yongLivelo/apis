import { BrowserRouter, Routes, Route } from "react-router";
import Home from "@/pages/Home";
import Biodata from "@/pages/Biodata";
import Documents from "@/pages/Documents";
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
          </Routes>
        </BrowserRouter>
      </Layout>
    </>
  );
}

export default App;
