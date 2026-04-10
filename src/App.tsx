import { lazy, Suspense } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import { SignupForm } from "./components/signup-form";

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Router>
          <div className="flex justify-center items-center">
            <Routes>
              <Route path="/signup" element={<SignupForm />} />
            </Routes>
          </div>
        </Router>
      </Suspense>
    </>
  );
}

export default App;
