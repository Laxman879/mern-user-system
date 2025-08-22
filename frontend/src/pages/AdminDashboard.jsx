import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';

const AdminDashboard = () => {
  const { auth } = useAuth();
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAdmin = async () => {
      if (!auth?.accessToken) return;
      try {
        const res = await axios.get("/api/users", {
          headers: {
            Authorization: `Bearer ${auth?.accessToken}`
          },
          withCredentials: true
        });
        console.log("Admin users:",res.data); // <-- Add this line
        setUsers(res.data.users);
      } catch (error) {
        setError("Failed to fetch user Profile");
      }
    };
    fetchAdmin();
  }, [auth]);

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl">
      <h2 className="text-2xl font-bold mb-6 text-blue-700">Admin Dashboard</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      {users.length > 0 ? (
        <div className="space-y-4">
          {users.map(user => (
            <div key={user._id} className="p-4 border rounded-lg shadow-sm bg-gray-50">
              <div>
                <span className="font-semibold text-gray-700">Username:</span>
                <span className="ml-2 text-gray-900">{user.username}</span>
              </div>
              <div>
                <span className="font-semibold text-gray-700">Email:</span>
                <span className="ml-2 text-gray-900">{user.email}</span>
              </div>
              <div>
                <span className="font-semibold text-gray-700">Role:</span>
                <span className="ml-2 text-gray-900 capitalize">{user.role}</span>
              </div>
              <div>
                <span className="font-semibold text-gray-700">Created At:</span>
                <span className="ml-2 text-gray-900">{new Date(user.createdAt).toLocaleString()}</span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-gray-500">No users found.</div>
      )}
    </div>
  );
};

export default AdminDashboard;