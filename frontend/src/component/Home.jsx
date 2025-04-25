import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-8">
      <div className="text-center font-semibold text-2xl">
        Hello this is Home Page
      </div>
      <div className="flex gap-4">
        <Link
          to="/add-student"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          Add Student
        </Link>
        <Link
          to="/view-students"
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
        >
          View Students
        </Link>
      </div>
    </div>
  );
};

export default Home;
