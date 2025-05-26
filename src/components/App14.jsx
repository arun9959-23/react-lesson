import React, { useState, useEffect } from "react";
import axios from "axios";

export default function App14() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchData = async () => {
    const url = "https://jsonplaceholder.typicode.com/users";
    const res = await axios(url);
    setUsers(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>App14</h1>
      <h2>useEffect hook to fetch api</h2>
      <p>
        <input
          type="text"
          placeholder="Search name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </p>
      <ol>
        {filteredUsers.map((value) => (
          <li key={value.id}>
            {value.name}, {value.email}, {value.phone}
          </li>
        ))}
      </ol>
    </div>
  );
}
