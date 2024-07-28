import React, { useEffect, useState } from 'react';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    setUsers(storedUsers);
  }, []);

  return (
    <div className="p-6 max-w-lg mx-auto bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-4">User List</h1>
      <ul>
        {users.map(u => (
          <li key={u.id} className="border-b border-gray-200 py-2">
            {u.name} ({u.gmail})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
