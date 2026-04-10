import { lazy, Suspense } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import RootLayout from "./components/layout/RootLayout";
const LoginPage = lazy(() => import("./pages/auth/LoginPage"));
const SignupPage = lazy(() => import("./pages/auth/SignupPage"));

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Suspense fallback={<div>Loading...</div>}>
          <Router>
            <Routes>
              <Route element={<RootLayout />}>
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/login" element={<LoginPage />} />
              </Route>
            </Routes>
          </Router>
        </Suspense>
      </QueryClientProvider>
    </>
  );
}

export default App;
