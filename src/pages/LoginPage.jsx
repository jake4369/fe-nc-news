import { useEffect, useState } from "react";
import { getAllUsers } from "../utils/api";
import { useUser } from "../context/UserContext";

const LoginPage = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [user, setUser] = useState("");
  const { loggedInUser, setLoggedInUser } = useUser();

  useEffect(() => {
    getAllUsers().then((usersData) => {
      setAllUsers(usersData);
    });
  }, []);

  const handleChange = (e) => {
    setUser(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (user !== "") {
      const filterUser = allUsers.filter((obj) => obj.username === user);

      if (filterUser.length === 0) {
        alert("No user found");
        return;
      } else {
        setLoggedInUser(filterUser[0]);
      }
    } else {
      alert("Enter username");
    }
  };

  return (
    <div className="login-page">
      <h1>Login</h1>

      <form className="login-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="login-form__username-input"
          value={user}
          onChange={handleChange}
        />
        <button className="login-form__login-btn">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
