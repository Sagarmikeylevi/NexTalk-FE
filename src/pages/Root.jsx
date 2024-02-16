import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { getTokenDuration } from "../auth";

export default function RootPage() {
  const { token, logout } = useAuth();

  useEffect(() => {
    let logoutTimer;

    if (!token) {
      return;
    }

    if (token === "EXPIRED") {
      logout();
      return;
    }

    const tokenDuration = getTokenDuration();
    logoutTimer = setTimeout(() => {
      logout();
    }, tokenDuration);

    return () => clearTimeout(logoutTimer);
  }, [token, logout]);

  return (
    <>
      <Navigation />

      <main>
        <Outlet />
      </main>
    </>
  );
}
