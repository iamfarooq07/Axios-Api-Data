import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [post, setPost] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [userId, setUserId] = useState(null);

  const apiUrl = "http://localhost:3000/users";

  const fetchData = async () => {
    try {
      const response = await axios.get(apiUrl);
      setPost(response.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  const postData = async () => {
    try {
      const response = await axios.post(apiUrl, { name, email });
      setPost([...post, response.data]);
      setName("");
      setEmail("");
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  const updateData = async () => {
    if (userId === null) return;
    try {
      await axios.put(`${apiUrl}/${userId}`, { name, email });
      setPost(
        post.map((user) =>
          user.id === userId ? { ...user, name, email } : user
        )
      );
      setName("");
      setEmail("");
      setUserId(null);
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  const deleteData = async (id) => {
    try {
      await axios.delete(`${apiUrl}/${id}`);
      setPost(post.filter((user) => user.id !== id));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const editUser = (user) => {
    setUserId(user.id);
    setName(user.name);
    setEmail(user.email);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">User Management</h1>

      {/* Form */}
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border border-gray-300 rounded-md p-3 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter Name"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-gray-300 rounded-md p-3 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter Email"
        />
        {userId === null ? (
          <button
            onClick={postData}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold w-full py-3 rounded-md transition"
          >
            Add User
          </button>
        ) : (
          <button
            onClick={updateData}
            className="bg-green-500 hover:bg-green-600 text-white font-semibold w-full py-3 rounded-md transition"
          >
            Update User
          </button>
        )}
      </div>

      {/* Users List */}
      <div className="w-full max-w-md mt-6">
        {post.length === 0 && (
          <p className="text-center text-gray-500">No users available.</p>
        )}
        {post.map((user) => (
          <div
            key={user.id}
            className="bg-white rounded-lg shadow-md p-4 mb-4 flex justify-between items-center transition hover:shadow-lg"
          >
            <div>
              <h2 className="font-semibold text-gray-800">{user.name}</h2>
              <p className="text-gray-600">{user.email}</p>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => editUser(user)}
                className="bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded-md transition"
              >
                Edit
              </button>
              <button
                onClick={() => deleteData(user.id)}
                className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-md transition"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
