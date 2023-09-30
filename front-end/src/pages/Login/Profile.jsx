import React, { useEffect, useState } from "react";
import api from "./Api";

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await api.post("/hello");
        setUser(response.data);
      } catch (error) {}
    };

    fetchProfile();
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Welcome, {user}!</h2>
      <p>Email: {user}</p>
    </div>
  );
};

export default Profile;
