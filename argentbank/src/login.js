import store from "./app/store";
import { login, loading } from "./features/userSlice";
import { Link } from "react-router-dom";

export const logFunction = async (username, password, setError, checked) => {
  setError(false);
  const requestLogin = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: username,
      password: password,
    }),
  };
  await fetch("http://localhost:3001/api/v1/user/login", requestLogin)
    .then((response) => response.json())
    .then((res) => {
      getProfile(res.body.token, checked);
    })
    .catch((err) => {
      setError(true)
    });
};

export const getProfile = async (token, checked) => {
  store.dispatch(loading());
  const requestProfile = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  const fetchProfile = await fetch(
    "http://localhost:3001/api/v1/user/profile",
    requestProfile
  );
  const parseProfile = await fetchProfile.json();
  if (checked) {
    localStorage.setItem("token", JSON.stringify(token));
  }
  store.dispatch(login(parseProfile.body));
  <Link to="/transactions"/>
};
