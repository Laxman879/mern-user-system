import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import axios from 'axios';

const Login = () => {
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/auth/login", form, {
        withCredentials: true,
      });

      setAuth({
        accessToken: res.data.accessToken,
        role: res.data.user.role,  // ✅ fixed
      });

      if (res.data.user.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/user");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Login failed. Please check your credentials");
      console.error("Login error:", err.response?.data || err.message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}

      <form className="space-y-4" onSubmit={handleLogin}>
        <div>
          <input
            type="email"
            placeholder="Email"
            value={form.email}
            className="w-full p-2 border rounded"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            value={form.password}
            className="w-full p-2 border rounded"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
