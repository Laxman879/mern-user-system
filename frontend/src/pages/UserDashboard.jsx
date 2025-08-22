import React, { useEffect, useState } from 'react';
import axios  from 'axios';
import { useAuth } from '../context/AuthContext'

const UserDashboard = () => {

    const {auth} = useAuth();
    const [profile, setProfile] = useState(null);
    const [error,setError] = useState(null)
    useEffect(()=>{
        const fetchProfiles = async()=>{
            if(!auth?.accessToken) return;
            try {
                const res = await axios.get("/api/users/me",{
                    headers:{
                        Authorization: `Bearer ${auth?.accessToken}`
                    },
                    withCredentials:true
                })
                console.log(res.data)
                setProfile(res.data)
                console.log(res.data)
            } catch (error) {
                console.log("Failed to fetch user Profile:",error);
                setError("Failed to fetch user Profile")
            }
        }
        fetchProfiles()
    },[auth])
  return (
      <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl">
      <h2 className="text-2xl font-bold mb-4 text-blue-700">User Dashboard</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      {profile ? (
        <div className="space-y-4">
          <div>
            <span className="font-semibold text-gray-700">Username:</span>
            <span className="ml-2 text-gray-900">{profile.username}</span>
          </div>
          <div>
            <span className="font-semibold text-gray-700">Email:</span>
            <span className="ml-2 text-gray-900">{profile.email}</span>
          </div>
          <div>
            <span className="font-semibold text-gray-700">Role:</span>
            <span className="ml-2 text-gray-900 capitalize">{profile.role}</span>
          </div>
          <div>
            <span className="font-semibold text-gray-700">Created At:</span>
            <span className="ml-2 text-gray-900">{new Date(profile.createdAt).toLocaleString()}</span>
          </div>
        </div>
      ) : (
        <div className="text-gray-500">Loading profile...</div>
      )}
    </div>
  )
}

export default UserDashboard