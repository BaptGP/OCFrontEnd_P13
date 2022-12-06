import "./App.css";
import Navbar from "./components/Nav/Navbar";
import Home from "./components/Home/Home";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SignIn from "./components/SignIn/SignIn";
import BottomPage from "./components/BottomPage/BottomPage";
import { selectUser, selectState } from "./features/userSlice";
import { useSelector } from "react-redux";
import HomeUser from "./components/Home/HomeUser";
import Loading from "./components/Loading/Loading";
import { useEffect } from "react";
import { getProfile } from "./login";

function App() {
  const user = useSelector(selectUser);
  const state = useSelector(selectState);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token && !user) {
      getProfile(JSON.parse(token));
    }
  });

  if (state.loading === "loading") {
    return <Loading />;
  }
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/transactions"
          element={<HomeUser />}
        />
        <Route
          path="/sign-in"
          element={user ? <Navigate to="/" /> : <SignIn />}
        />
      </Routes>
      <BottomPage />
    </BrowserRouter>
  );
}

export default App;
