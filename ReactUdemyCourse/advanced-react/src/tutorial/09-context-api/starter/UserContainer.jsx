import React from "react";
import { useAppContext } from "./Navbar";

const UserContainer = () => {
  const { user, logout } = useAppContext();
  //   console.log(value);

  return (
    <div className="user-container">
      {user ? (
        <>
          <p>Hello There, {user?.name?.toUpperCase()}</p>
          <button className="btn" onClick={logout}>
            logout
          </button>
        </>
      ) : (
        <p>Logout</p>
      )}
    </div>
  );
};

export default UserContainer;
