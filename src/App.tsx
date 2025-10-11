import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Components from "./pages/Components";
import ProjectDetails from "./pages/ProjectDetails";
import { ToastContainer, toast } from "react-toastify";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/components" element={<Components />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer
        position="bottom-center" // or "top-right", "top-center"
        autoClose={2000} // auto hide after 2 seconds
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        theme="dark" // "light" | "dark" | "colored"
      />
    </>
  );
}

export default App;
