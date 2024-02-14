import { useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();

  const renderNavData = () => {
    if (location.pathname === "/login" || location.pathname === "/register") {
      return null;
    } else {
      return (
        <div>
          <h1 className="text-lg text-res-400">Navigation</h1>
        </div>
      );
    }
  };
  return renderNavData();
};

export default Navigation;
