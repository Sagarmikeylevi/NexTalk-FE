import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navigation = () => {
  const location = useLocation();
  const { user, logout } = useAuth();

  const renderNavData = () => {
    if (location.pathname === "/login" || location.pathname === "/register") {
      return null;
    } else {
      return (
        <div className="w-[100vw] h-[12%] absolute left-0 top-0 bg-[#FFFFFF] shadow-sm px-4 flex items-center justify-between sm:px-8 md:px-10 lg:px-12">
          <h1 className="text-[#6A4DFF] text-2xl font-bold md:text-3xl lg:text-4xl">
            Nex<span className="text-[#353535] font-thin">Talk</span>
          </h1>

          <Link
            to="/login"
            className="text-sm px-4 py-2 rounded-md bg-[#353535] text-[#FFFFFF] md:text-base lg:text-lg hover:bg-[#353535]"
            onClick={() => logout()}
          >
            {user}
          </Link>
        </div>
      );
    }
  };
  return renderNavData();
};

export default Navigation;
