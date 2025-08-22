import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { AuthProvider } from "./context/AuthContext";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserDashboard from "./pages/UserDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return(
    <BrowserRouter>
     <AuthProvider>
      <Navbar/>
    <Routes>
  <Route path="/login" element={<Login/>}/>
  <Route path="/register" element={<Register/>}/>
  <Route path="/user" element={
    <PrivateRoute allowedRoles={["user", "admin"]}>
      <UserDashboard/>
    </PrivateRoute>
  }/>
  <Route path="/admin" element={
    <PrivateRoute allowedRoles={["admin"]}>
      <AdminDashboard/>
    </PrivateRoute>
  }/>
</Routes>
     </AuthProvider>
  </BrowserRouter>
  )
}

export default App;
