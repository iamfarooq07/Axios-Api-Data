<<<<<<< HEAD
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(true);
  const url = "http://localhost:3000/messages";

  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [time, setTime] = useState("");
  const [editingId, setEditingId] = useState(null);

  // Fetch messages
  const getData = async () => {
    try {
      setLoading(true);
      const res = await axios.get(url);
      setPost(res.data);
    } catch (err) {
      console.error("GET Error:", err);
    } finally {
      setLoading(false);
    }
  };

  const addData = async () => {
    if (!name || !message || !time) {
      alert("Fill all fields");
      return;
    }

    try {
      await axios.post(url, { name, message, time });
      setName("");
      setMessage("");
      setTime("");
      getData();
    } catch (err) {
      console.error("POST Error:", err);
    }
  };

  const updateData = async () => {
    if (!editingId) return;
    if (!name || !message || !time) {
      alert("Fill all fields before updating");
      return;
    }

    try {
      await axios.put(`${url}/${editingId}`, { name, message, time });

      setPost(
        post.map((item) =>
          item.id === editingId ? { ...item, name, message, time } : item
        )
      );

      setName("");
      setMessage("");
      setTime("");
      setEditingId(null);
    } catch (err) {
      console.error("PUT Error:", err);
    }
  };

  const editData = (item) => {
    setName(item.name);
    setMessage(item.message);
    setTime(item.time);
    setEditingId(item.id);
  };

  const deleteData = async (id) => {
    try {
      await axios.delete(`${url}/${id}`);
      setPost(post.filter((p) => p.id !== id));
    } catch (err) {
      console.error("DELETE Error:", err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (loading) {
    return (
      <h1 className="text-center text-4xl font-extrabold my-5">Loading...</h1>
    );
  }

  return (
    <div className="max-w-md mx-auto p-5 bg-white shadow-lg rounded-lg mt-10">
      <h2 className="text-2xl font-bold mb-5 text-center">
        {editingId ? "Edit Message" : "Add Message"}
      </h2>

      <label className="block text-gray-700 font-medium mb-1">Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter Your Name"
        className="w-full mb-4 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <label className="block text-gray-700 font-medium mb-1">Message</label>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Enter Your Message"
        className="w-full mb-4 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <label className="block text-gray-700 font-medium mb-1">Time</label>
      <input
        type="text"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        placeholder="Enter Your Time"
        className="w-full mb-4 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <button
        onClick={editingId ? updateData : addData}
        className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
      >
        {editingId ? "Update" : "Add Data"}
      </button>

      <div className="mt-6">
        {post.map((value) => (
          <div
            key={value.id}
            className="flex justify-between items-center border border-gray-300 rounded p-4 mb-4 bg-gray-50 shadow-sm"
          >
            <div>
              <h3 className="font-semibold text-lg">Name: {value.name}</h3>
              <p className="text-gray-700">Message: {value.message}</p>
              <p className="text-gray-500 text-sm">Time: {value.time}</p>
            </div>
            <div className="flex gap-3">
              <button
                className="bg-green-500 text-white px-3 py-2 rounded-2xl"
                onClick={() => editData(value)}
              >
                Edit
              </button>
              <button
                className="bg-red-500 text-white px-3 py-2 rounded-2xl"
                onClick={() => deleteData(value.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
=======
import { Button } from "@/components/ui/button";
import ContextApi from "./context/ContextApi";
import Navbar from "./Dashboard/Navbar";

function App() {
  return (
    <div>
      {/* <Button>Click me</Button> */}
      <Navbar />
      <main className="p-6">Content here</main>
      {/* <ContextApi /> */}
>>>>>>> origin/main
    </div>
  );
}

export default App;
