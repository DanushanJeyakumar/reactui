import React from 'react';
import { FiMoreVertical } from 'react-icons/fi';

const users = [
  {
    name: 'Arun Kannan',
    email: 'ArunKannan@icloud.com',
    avatar: '/user1.jpeg',
    status: 'Active',
  },
  {
    name: 'Meena Rajendran',
    email: 'MeenaRajendran@hotmail.com',
    avatar: '/user2.jpg',
    status: 'Inactive',
  },
  {
    name: 'Sathish Kumar',
    email: 'SathishKumar@yahoo.com',
    avatar: '/user3.jpg',
    status: 'Active',
  },
  {
    name: 'Divya Shanmugam',
    email: 'DivyaShanmugam@gmail.com',
    avatar: '/user4.jpg',
    status: 'Pending',
  },
];

const statusStyles = {
  Active: 'bg-green-100 text-green-700',
  Inactive: 'bg-red-100 text-red-700',
  Pending: 'bg-yellow-100 text-yellow-700',
};

const UserManagement = () => {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 max-w-5xl mx-auto">
      <div className="mb-6">
        <h2 className="text-2xl font-bold">
          User <span className="text-purple-600">Data</span>
        </h2>
        <p className="text-gray-500">Manage your team members and their status</p>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50 text-gray-500 text-sm">
            <tr>
              <th className="px-4 py-3 text-left font-medium">👤 Avatar</th>
              <th className="px-4 py-3 text-left font-medium">Name</th>
              <th className="px-4 py-3 text-left font-medium">Status</th>
              <th className="px-4 py-3 text-left font-medium">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 text-sm">
            {users.map((user, index) => (
              <tr key={index}>
                <td className="px-4 py-3">
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                </td>
                <td className="px-4 py-3">
                  <div className="font-semibold">{user.name}</div>
                  <div className="text-gray-500">{user.email}</div>
                </td>
                <td className="px-4 py-3">
                  <span
                    className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold ${statusStyles[user.status]}`}
                  >
                    {user.status === 'Active' && '✅'}
                    {user.status === 'Inactive' && '❌'}
                    {user.status === 'Pending' && '⚠️'}
                    {user.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-right">
                  <FiMoreVertical className="text-gray-400 cursor-pointer" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center mt-6 text-sm text-gray-500">
        <span>Showing 1 to 4 of 4 users</span>
        <div className="space-x-2">
          <button className="px-4 py-2 border rounded-lg hover:bg-gray-100">Previous</button>
          <button className="px-4 py-2 border rounded-lg hover:bg-gray-100">Next</button>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;
