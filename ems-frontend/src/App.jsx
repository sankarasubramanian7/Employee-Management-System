import "./App.css";
import EmployeeComp from "./components/EmployeeComp";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ListEmpComponent from "./components/ListEmpComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <BrowserRouter>
        <Header />

        <main className="flex-fill container my-4">
          <Routes>
            <Route path="/" element={<ListEmpComponent />} />
            <Route path="/employees" element={<ListEmpComponent />} />
            <Route path="/add-employee" element={<EmployeeComp />} />
            <Route path="/edit-employee/:id" element={<EmployeeComp />} />
          </Routes>
        </main>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
