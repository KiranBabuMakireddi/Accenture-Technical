import React, { useState } from "react";
import UserCard from "./components/UserCard";

// Static user data
const usersList = [
  { id: 1, name: "Alice", role: "Frontend Developer", location: "Delhi" },
  { id: 2, name: "Bob", role: "Backend Developer", location: "Mumbai" },
  { id: 3, name: "Carol", role: "Full Stack Developer", location: "Remote" }
];

function App() {
  const [search, setSearch] = useState("");

  // Filter users by name or role
  const filteredUsers = usersList.filter((user) =>
    (user.name + user.role).toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-tr from-indigo-100 to-blue-100 p-6">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
        User Profiles
      </h1>

      <div className="max-w-md mx-auto mb-8">
        <input
          type="text"
          placeholder="Search by name or role..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 place-items-center">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => <UserCard key={user.id} user={user} />)
        ) : (
          <div className="col-span-full flex flex-col items-center justify-center p-10 text-center bg-white/80 backdrop-blur-md rounded-2xl shadow-lg w-full max-w-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              No users found
            </h2>
            <p className="text-gray-500">
              Try changing your search keyword or come back later.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
