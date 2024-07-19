import React from 'react'

export default function Dashboard() {
  const users = [
    { id: 1, name: 'John Doe', dateCreated: '2023-01-01', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Jane Smith', dateCreated: '2023-01-05', role: 'Publisher', status: 'Suspended' },
    { id: 3, name: 'Alice Johnson', dateCreated: '2023-01-10', role: 'Reviewer', status: 'Inactive' },
    { id: 4, name: 'Bob Brown', dateCreated: '2023-02-01', role: 'Moderator', status: 'Active' },
    { id: 5, name: 'Charlie Davis', dateCreated: '2023-02-15', role: 'Admin', status: 'Suspended' },
    { id: 6, name: 'Dana White', dateCreated: '2023-03-01', role: 'Publisher', status: 'Inactive' },
    { id: 7, name: 'Eve Black', dateCreated: '2023-03-10', role: 'Reviewer', status: 'Active' },
    { id: 8, name: 'Frank Green', dateCreated: '2023-04-01', role: 'Moderator', status: 'Suspended' },
    { id: 9, name: 'Grace Blue', dateCreated: '2023-04-15', role: 'Admin', status: 'Inactive' },
    { id: 10, name: 'Henry Yellow', dateCreated: '2023-05-01', role: 'Publisher', status: 'Active' },
  ];

  return (
    <div className="container mx-auto mt-10">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b-4 border-gray-300">#</th>
              <th className="py-2 px-4 border-b-4 border-gray-300">Name</th>
              <th className="py-2 px-4 border-b-4 border-gray-300">Date Created</th>
              <th className="py-2 px-4 border-b-4 border-gray-300">Role</th>
              <th className="py-2 px-4 border-b-4 border-gray-300">Status</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id} className="text-center">
                <td className="py-2 px-4 border-b">{index + 1}</td>
                <td className="py-2 px-4 border-b">{user.name}</td>
                <td className="py-2 px-4 border-b">{user.dateCreated}</td>
                <td className="py-2 px-4 border-b">{user.role}</td>
                <td className={`py-2 px-4 border-b ${user.status === 'Active' ? 'text-green-600' : user.status === 'Suspended' ? 'text-red-600' : 'text-yellow-600'}`}>
                  {user.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

