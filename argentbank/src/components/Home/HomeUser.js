import "../../style/Home/home.css";
import "../../style/Home/homeUser.css";
import { selectUser } from "../../features/userSlice";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

function HomeUser() {
  const user = useSelector(selectUser);
  const [edit, setEdit] = useState(false);
  const [firstName, setFirstName] = useState(user?.firstName);
  const [lastName, setLastName] = useState(user?.lastName);
  const [isConnected, setIsConnected] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await localStorage.getItem("token");
    const requestOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${JSON.parse(token)}`,
      },
      body: JSON.stringify({ firstName: firstName, lastName: lastName }),
    };
    await fetch("http://localhost:3001/api/v1/user/profile", requestOptions)
      .then((response) => response.json())
      .then((res) => window.location.reload(false))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if(user){
      setIsConnected(true)
    }
  }, []);

  if (isConnected) {
    return (
      <main
        className="main bg-gray"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <div className="header">
          <h1 style={{ color: "black" }}>
            Welcome back
            <br />
            {user.firstName} {user.lastName} !
          </h1>
          {edit ? (
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <div className="input-wrapper_editFirst">
                <label for="username" />
                <input
                  type="text"
                  id="firstname"
                  className="input_edit"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <button
                  className="button-editFirst"
                  onClick={(e) => handleSubmit(e)}
                >
                  Save
                </button>
              </div>
              <div className="input-wrapper_editLast">
                <label for="password" />
                <input
                  type="text"
                  id="lastname"
                  className="input_edit"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
                <button className="button-editFirst" onClick={() => setEdit(false)}>
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <button className="edit-button" onClick={() => setEdit(true)}>
              Edit Name
            </button>
          )}
        </div>
        <h2 className="sr-only">Accounts</h2>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Checking (x8349)</h3>
            <p className="account-amount">$2,082.79</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Savings (x6712)</h3>
            <p className="account-amount">$10,928.42</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
            <p className="account-amount">$184.30</p>
            <p className="account-amount-description">Current Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
      </main>
    );
  }
  <Navigate to="/" />;
}

export default HomeUser;
