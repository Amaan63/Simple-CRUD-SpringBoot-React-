import React from "react";

const UpdateStudentForm = ({
  selectedStudent,
  handleChange,
  updateStudent,
  setFormOpen,
}) => {
  return (
    <div className="fixed inset-0  bg-opacity-40 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-xl shadow-xl w-[90%] max-w-md">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Update Student Form
        </h2>
        <form onSubmit={updateStudent}>
          <input
            type="text"
            name="studentName"
            value={selectedStudent.studentName}
            onChange={handleChange}
            placeholder="Name"
            className="w-full border p-2 rounded mb-3"
          />
          <input
            type="number"
            name="age"
            value={selectedStudent.age}
            onChange={handleChange}
            placeholder="Age"
            className="w-full border p-2 rounded mb-3"
          />
          <input
            type="text"
            name="department"
            value={selectedStudent.department}
            onChange={handleChange}
            placeholder="Department"
            className="w-full border p-2 rounded mb-3"
          />
          <div className="flex justify-between">
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Update
            </button>
            <button
              type="button"
              onClick={() => setFormOpen(false)}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateStudentForm;
