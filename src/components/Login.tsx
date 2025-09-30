import React from "react";
// Update the import path to the correct location of UserContext

// import { useUser } from "host/UserContext";

type Props = {
  onLoggedIn?: (
    token: string,
    user: { id: number; name: string; role: "Admin" | "User" }
  ) => void;
};

export default function Login({ onLoggedIn }: Props) {
  const [email, setEmail] = React.useState("");
  const [pwd, setPwd] = React.useState("");
  // const { user } = useUser();

  function submit(e: React.FormEvent) {
    e.preventDefault();
    // Demo auth: user with Admin role
    const token = "demo-" + Math.random().toString(36).slice(2);

    const user = { id: 7, name: email || "Subbiah", role: "User" as const }; // change to "User" to test RBAC
    // const currentUser = user;
    onLoggedIn?.(token, user);
  }

  return (
    <form onSubmit={submit} style={{ display: "grid", gap: 8, minWidth: 300 }}>
      <h4>Login</h4>
      <input
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        placeholder="password"
        type="password"
        value={pwd}
        onChange={(e) => setPwd(e.target.value)}
      />
      <button type="submit">Sign in</button>
    </form>
  );
}
