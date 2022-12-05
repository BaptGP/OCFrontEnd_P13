import "../../style/SignIn/signin.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { logFunction } from "../../login";

function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [checked, setChecked] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    logFunction(username, password, setError, checked);
  };

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <FontAwesomeIcon icon={faUserCircle} />
        <h1>Sign In</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="input-wrapper">
            <label for="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-wrapper">
            <label for="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="input-remember">
            <input
              type="checkbox"
              id="remember-me"
              checked={checked}
              onChange={handleChange}
            />
            <label for="remember-me">Remember me</label>
          </div>

          {error && (
            <div>
              <p style={{ color: "red" }}>Identifiant incorrect</p>
            </div>
          )}

          <input type="submit" value="Sign In" className="sign-in-button" />
        </form>
      </section>
    </main>
  );
}

export default SignIn;
