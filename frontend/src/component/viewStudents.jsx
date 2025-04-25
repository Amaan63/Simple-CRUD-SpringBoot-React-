import axios from "axios";
import React, { useEffect, useState } from "react";

const viewStudents = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, [students.length]);

  const fetchStudents = async () => {
    const baseURL = "http://localhost:8080/crudapp/viewAllStudents";
    const response = await axios.get(baseURL);
    setStudents(response.data);
  };

  const deleteStudent = async (id) => {
    const baseURL = "http://localhost:8080/crudapp/deleteStudent/" + id;
    await axios.delete(baseURL);
    fetchStudents();
  };

  return (
    <>
      <h1 className="text-3xl font-bold text-center my-6">Student Details</h1>
      <div className="flex justify-center flex-wrap gap-4">
        {students.map((student) => (
          <div
            key={student.id} // ✅ Key added here
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
            {/* Delete Button */}
            <button
              onClick={() => deleteStudent(student.id)}
              className="bg-red-500 text-white py-2 px-4 rounded mt-4"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default viewStudents;
