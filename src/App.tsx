import React from "react";
import UserProfile from "./components/UserProfile";
import Login from "./components/Login";
export default function App() {
  return (
    <div style={{ padding: 16 }}>
      <h3>auth-app (standalone)</h3>
      <Login />
      <hr />
      <UserProfile />
    </div>
  );
}
