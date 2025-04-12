import React from "react";

const UserCard = ({ user }) => {
  return (
    <div className="bg-white/80 backdrop-blur-md shadow-xl rounded-2xl p-6 w-72 h-80 flex flex-col items-center justify-between text-center hover:-translate-y-1 hover:shadow-2xl transition-transform duration-300">
      <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-blue-400 to-purple-500 flex items-center justify-center text-5xl text-white shadow-md">
        👤
      </div>
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-1">{user.name}</h2>
        <p className="text-blue-600 font-medium">{user.role}</p>
        <p className="text-gray-500 text-sm">{user.location}</p>
      </div>
      <button className="mt-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-full font-medium hover:opacity-90 transition">
        Contact
      </button>
    </div>
  );
};

export default UserCard;
