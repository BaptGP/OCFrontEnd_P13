import logo from "../../assets/logo.png";
import "../../style/Navbar/navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faSignOut } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { selectUser } from "../../features/userSlice";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../features/userSlice";

function Navbar() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };
  return (
    <nav className="main-nav">
      <Link to="/" className="main-nav-logo">
        <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo" />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        {user ? (
          <div style={{display:"flex", flexDirection:"row"}}>
            <Link style={{marginRight:30, display:"flex", flexDirection:"row", alignItems:"center"}} to="/transactions">
              <FontAwesomeIcon icon={faUserCircle} />
              <span style={{ marginLeft: 5 }}>{user.firstName}</span>
            </Link>
            <button className="main-nav-item" onClick={(e) => handleLogout(e)}>
              <FontAwesomeIcon icon={faSignOut} />
              <span style={{ marginLeft: 5 }}>Sign Out</span>
            </button>
          </div>
        ) : (
          <Link to="/sign-in" className="main-nav-item">
            <FontAwesomeIcon icon={faUserCircle} />
            <span style={{ marginLeft: 5 }}>Sign In</span>
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
