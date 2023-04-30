import { useEffect, useState } from "react";
import { getAllUsers } from "../utils/api";
import { useUser } from "../context/UserContext";

const LoginPage = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [user, setUser] = useState("");
  const [showErrorLabel, setShowErrorLabel] = useState(false);
  const [noUserFound, setNoUserFound] = useState(false);
  const [noUsername, setNoUsername] = useState(false);
  const { loggedInUser, setLoggedInUser } = useUser();

  useEffect(() => {
    getAllUsers().then((usersData) => {
      setAllUsers(usersData);
    });
  }, []);

  const handleChange = (e) => {
    setUser(e.target.value);
  };

  const inputStyles = {
    marginBottom: showErrorLabel ? "0.5rem" : "1rem",
  };

  const labelStyles = {
    marginBottom: showErrorLabel ? "0.5rem" : "0",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowErrorLabel(false);
    setNoUserFound(false);
    setNoUsername(false);

    if (user !== "") {
      const filterUser = allUsers.filter((obj) => obj.username === user);

      if (filterUser.length === 0) {
        setNoUserFound(true);
        setShowErrorLabel(true);
        return;
      } else {
        setLoggedInUser(filterUser[0]);
      }
    } else {
      setShowErrorLabel(true);
      setNoUsername(true);
    }
  };

  return (
    <div className="login-page">
      <h1 className="login-page__heading">Login</h1>

      <form className="login-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="login-form__username-input"
          className="login-form__username-input"
          id="login-form__username-input"
          value={user}
          onChange={handleChange}
          placeholder="Username"
          style={inputStyles}
        />
        <label htmlFor="login-form__username-input" style={labelStyles}>
          {noUserFound
            ? "No user found"
            : noUsername
            ? "Please enter username"
            : null}
        </label>
        <button className="login-form__login-btn">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
