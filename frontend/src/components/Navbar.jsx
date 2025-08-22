import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import axios from "axios";
import { useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const { auth, setAuth } = useAuth();
  const [logoutMsg, setLogoutMsg] = useState("");

  const handleLogout = async () => {
  try {
    const res = await axios.post(
      "/api/auth/logout",
      {},
      { withCredentials: true }
    );
    console.log("User successfully logout"); // Changed message
    setAuth(null);
    setLogoutMsg(res.data.message); // Show logout message
    setTimeout(() => {
      setLogoutMsg("");
      navigate("/login");
    }, 1500);
  } catch (error) {
    console.error("Logout failed", error);
  }
};

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold hover:text-gray-300">
          Home
        </Link>

        <div className="flex items-center space-x-4">
          {auth?.accessToken ? (
            <>
              <button
                onClick={handleLogout}
                className="bg-red-600 px-3 py-1 rounded-lg hover:bg-red-700 transition"
              >
                Logout
              </button>
              {logoutMsg && (
                <span className="ml-4 text-green-400 font-semibold">
                  {logoutMsg}
                </span>
              )}
            </>
          ) : (
            <>
              <Link to="/login" className="hover:text-gray-300">
                Login
              </Link>
              <Link to="/register" className="hover:text-gray-300">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;