import React, { useState, useEffect } from 'react';

const Admin = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({ id: '', name: '', gmail: '' });

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    setUsers(storedUsers);
  }, []);

  const addUser = () => {
    if (user.id && user.name && user.gmail) {
      const newUsers = [...users, user];
      setUsers(newUsers);
      localStorage.setItem('users', JSON.stringify(newUsers));
      setUser({ id: '', name: '', gmail: '' });
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-4">Admin Registration</h1>
      <input 
        type="text" 
        placeholder="ID" 
        value={user.id} 
        onChange={e => setUser({ ...user, id: e.target.value })} 
        className="border border-gray-300 rounded-md p-2 mb-2 w-full"
      />
      <input 
        type="text" 
        placeholder="Name" 
        value={user.name} 
        onChange={e => setUser({ ...user, name: e.target.value })} 
        className="border border-gray-300 rounded-md p-2 mb-2 w-full"
      />
      <input 
        type="email" 
        placeholder="Gmail" 
        value={user.gmail} 
        onChange={e => setUser({ ...user, gmail: e.target.value })} 
        className="border border-gray-300 rounded-md p-2 mb-4 w-full"
      />
      <button 
        onClick={addUser}
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
      >
        Add User
      </button>
      <h2 className="text-xl font-semibold mt-6">User List</h2>
      <ul className="mt-4">
        {users.map(u => (
          <li key={u.id} className="border-b border-gray-200 py-2">
            {u.name} ({u.gmail})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Admin;
