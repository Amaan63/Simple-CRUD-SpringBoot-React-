import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const viewStudents = () => {
  const [students, setStudents] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchStudents();
  }, []); // Removed students.length to prevent infinite loops

  const fetchStudents = async () => {
    try {
      const baseURL = "http://localhost:8080/crudapp/viewAllStudents";
      const response = await axios.get(baseURL);
      setStudents(response.data);
      setError(null); // Clear any previous errors
    } catch (err) {
      setError("Server not responding. Please try again later.");
      setStudents([]); // Clear students if there's an error
    }
  };

  const deleteStudent = async (id) => {
    const baseURL = "http://localhost:8080/crudapp/deleteStudent/" + id;
    await axios.delete(baseURL);
    fetchStudents();
  };

  return (
    <>
      <div className="flex flex-row items-center justify-center gap-3 mt-2">
        <Link
          to="/add-student"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          Add Student
        </Link>
        <Link
          to="/"
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
        >
          Home Page
        </Link>
      </div>
      <h1 className="text-3xl font-bold text-center my-6">Student Details</h1>

      {/* Simple error message */}
      {error && <p className="text-center text-red-500">{error}</p>}

      {/* Message when no students exist */}
      {!error && students.length === 0 && (
        <p className="text-center text-gray-500">No students found</p>
      )}

      {/* Student cards */}
      <div className="flex justify-center flex-wrap gap-4">
        {students.map((student) => (
          <div
            key={student.id}
            className="bg-black rounded-2xl shadow-lg p-6 w-80 border border-gray-200"
          >
            <p className="text-green-500">
              <span className="font-semibold">ID:</span> {student.id}
            </p>
            <p className="text-green-500">
              <span className="font-semibold">Name:</span> {student.studentName}
            </p>
            <p className="text-green-500">
              <span className="font-semibold">Age:</span> {student.age}
            </p>
            <p className="text-green-500">
              <span className="font-semibold">Department:</span>{" "}
              {student.department}
            </p>
            <div className="flex flex-row items-center justify-center gap-3 ">
              <button
                onClick={() => deleteStudent(student.id)}
                className="bg-red-500 text-white py-2 px-4 rounded mt-4"
              >
                Delete
              </button>
              <button className="bg-green-500 text-white py-2 px-4 rounded mt-4">
                Update
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default viewStudents;
