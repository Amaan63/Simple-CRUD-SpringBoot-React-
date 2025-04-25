import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const addStudent = () => {
  // React ka useState hook use karke formData naam ka ek state variable banaya gaya hai
  const [formData, setFormData] = useState({
    id: "", // id field initially empty
    studentName: "", // student ka naam initially empty
    age: "", // student ki age initially empty
    department: "", // department ka naam initially empty
  });

  // Jab input field me koi change hota hai to ye function trigger hota hai
  const handleChange = (e) => {
    const { name, value } = e.target; // input ka name aur value extract kiya gaya hai

    // setFormData function se formData state ko update kiya gaya hai
    // Spread operator (...FormData) purane formData ko copy karta hai, yeh sab changes ka track rakhta hai aur last updated wale ko set kar deta hai
    // aur [name]: value se uss particular field ko update karta hai jisme change hua hai
    setFormData({ ...formData, [name]: value });
    {
      /*console.log(
      "Updated:",
      JSON.stringify({ ...formData, [name]: value }, null, 2)
    ); */
    }
  };

  // Jab form submit hota hai to ye function call hota hai
  const handleSubmit = async (e) => {
    e.preventDefault(); // Form submit hone par page reload na ho iske liye default action roka gaya hai
    console.log(formData); // Console me updated formData ko print kiya gaya hai
    try {
      const response = await axios.post(
        "http://localhost:8080/crudapp/addStudent",
        formData
      );
      alert("Student Added Successfully");
      // Clear the form after successful submission
      setFormData({
        id: "",
        studentName: "",
        age: "",
        department: "",
      });
    } catch (error) {
      alert("Error is coming: " + error.message);
    }
  };

  return (
    <>
      <div className="flex flex-row items-center justify-center  gap-3 mt-2">
        <Link
          to="/"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors "
        >
          Home Page
        </Link>
        <Link
          to="/view-students"
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
        >
          View Students
        </Link>
      </div>
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-96">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Add Student Form
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="id"
                className="block text-sm font-medium text-gray-700"
              >
                ID:
              </label>
              <input
                type="text"
                id="id"
                name="id"
                placeholder="Enter Student ID"
                value={formData.id} // controlled input
                onChange={handleChange}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="studentName"
                className="block text-sm font-medium text-gray-700"
              >
                Name:
              </label>
              <input
                type="text"
                id="studentName"
                name="studentName"
                placeholder="Enter Student Name"
                value={formData.studentName} // controlled input
                onChange={handleChange}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="age"
                className="block text-sm font-medium text-gray-700"
              >
                Age:
              </label>
              <input
                type="number"
                id="age"
                name="age"
                placeholder="Enter Student Age"
                value={formData.age} // controlled input
                onChange={handleChange}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="department"
                className="block text-sm font-medium text-gray-700"
              >
                Department:
              </label>
              <input
                type="text"
                id="department"
                name="department"
                placeholder="Enter Student Department"
                value={formData.department} // controlled input
                onChange={handleChange}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default addStudent;
