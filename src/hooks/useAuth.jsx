import { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

const Context = createContext({});
export const useAuth = () => useContext(Context);
export const AuthProvider = (props) => {
  const [user, setUser] = useState(null);

  function handleSetUser(user) {
    localStorage.setItem("user", JSON.stringify(user));
    setUser(user);
  }

  function handleLogout() {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
  }

  useEffect(() => {
    const localUser = localStorage.getItem("user");
    if (localUser) {
      setUser(JSON.parse(localUser));
    }
  }, []);

  return (
    <Context.Provider
      value={{ user, setUser: handleSetUser, logout: handleLogout }}
    >
      {props.children}
    </Context.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
