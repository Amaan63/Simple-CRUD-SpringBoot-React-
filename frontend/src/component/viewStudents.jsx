import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UpdateStudentForm from "./updateStudentForm";

const ViewStudents = () => {
  const [students, setStudents] = useState([]);
  const [error, setError] = useState(null);
  const [selectedStudent, setSelectedStudent] = useState({
    id: "",
    studentName: "",
    age: "",
    department: "",
  });
  const [isFormOpen, setFormOpen] = useState(false);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const baseURL = "http://localhost:8080/crudapp/viewAllStudents";
      const response = await axios.get(baseURL);
      setStudents(response.data);
      setError(null);
    } catch (err) {
      setError("Server not responding. Please try again later.");
      setStudents([]);
    }
  };

  const deleteStudent = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/crudapp/deleteStudent/${id}`);
      fetchStudents();
    } catch (err) {
      setError("Delete failed. Please try again.");
    }
  };

  const handleUpdate = (student) => {
    setSelectedStudent(student);
    setFormOpen(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSelectedStudent({ ...selectedStudent, [name]: value });
  };

  const updateStudent = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        "http://localhost:8080/crudapp/updateStudent",
        selectedStudent
      );
      setFormOpen(false);
      fetchStudents();
    } catch (error) {
      setError("Failed to update student. Please try again.");
    }
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

      {error && <p className="text-center text-red-500">{error}</p>}
      {!error && students.length === 0 && (
        <p className="text-center text-gray-500">No students found</p>
      )}

      <div className="flex justify-center flex-wrap gap-4">
        {students.map((student) => (
          <div
            key={student.id}
            className="relative bg-black rounded-2xl shadow-lg p-6 w-80 border border-gray-200"
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
            <div className="flex flex-row items-center justify-center gap-3">
              <button
                onClick={() => deleteStudent(student.id)}
                className="bg-red-500 text-white py-2 px-4 rounded mt-4"
              >
                Delete
              </button>
              <button
                onClick={() => handleUpdate(student)}
                className="bg-green-500 text-white py-2 px-4 rounded mt-4"
              >
                Update
              </button>
            </div>
          </div>
        ))}
        {/* Pop up over the cards */}
        {isFormOpen && (
          <UpdateStudentForm
            selectedStudent={selectedStudent}
            handleChange={handleChange}
            updateStudent={updateStudent}
            setFormOpen={setFormOpen}
          />
        )}
      </div>
    </>
  );
};

export default ViewStudents;
