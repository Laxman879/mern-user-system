
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

const  Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({username:'', email: '', password: '' });
  const [error, setError] = useState(null);

  const handlSubmit = async (e) => {
    e.preventDefault();
    try {
  await axios.post('/api/auth/register',form,{
withCredentials: true
  })
  alert("Successfully Register")
   console.log("Successfully Register",form);
  navigate("/login")
    } catch (err) {
      setError(err.response?.data?.message || "Login failed. Please check your credentials");
      console.error("Login error:", err.response?.data || err.message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl">
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}

      <form className="space-y-4" onSubmit={handlSubmit}>
         <div>
          <input
            type="text"
            placeholder="Username"
            value={form.username}
            className="w-full p-2 border rounded"
            onChange={(e) => setForm({ ...form, username: e.target.value })}
            required
          />
        </div>
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
           Register
        </button>
      </form>
    </div>
  );
};

export default  Register;
