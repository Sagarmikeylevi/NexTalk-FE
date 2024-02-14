import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";

export default function RootPage() {
  return (
    <>
      <Navigation />

      <main>
        <Outlet />
      </main>
    </>
  );
}
