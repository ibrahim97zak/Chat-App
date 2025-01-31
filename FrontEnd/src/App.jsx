import React, { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext";

const Home = lazy(() => import("./pages/home/Home"));
const Login = lazy(() => import("./pages/login/Login"));
const SignUp = lazy(() => import("./pages/signup/Signup"));
const MessageContainer = lazy(() => import("./components/messages/MessageContainer"));

function App() {
  const { authUser } = useAuthContext();

  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={authUser ? <Home /> : <Navigate to={"/login"} />} />
          <Route path="/login" element={authUser ? <Navigate to="/" /> : <Login />} />
          <Route path="/signup" element={authUser ? <Navigate to="/" /> : <SignUp />} />
          <Route path="/messages/MessageContainer" element={<MessageContainer />} />
        </Routes>
      </Suspense>
      <Toaster />
    </div>
  );
}

export default App;
