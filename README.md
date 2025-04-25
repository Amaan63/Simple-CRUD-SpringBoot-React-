# Simple-CRUD-SpringBoot-React-

This is a **basic CRUD (Create, Read, Update, Delete)** application built using **Spring Boot** for the backend and **React** for the frontend. The app performs simple operations on student data, allowing users to add, view, update, and delete student records.

## 🛠️ Tech Stack

- **Frontend:** React
- **Backend:** Spring Boot
- **API Communication:** Axios (for HTTP requests)

## 📌 Features

- **Add Student:** Users can enter student details and submit them to the backend.
- **View All Students:** The frontend fetches and displays all student records using an API call.
- **Update Student:** Existing student records can be updated through the frontend interface.
- **Delete Student:** Users can delete student records, and the change is reflected immediately.

## 🔄 Data Flow

1. **React Frontend:**

   - Sends requests using `axios` to communicate with the backend.
   - Displays student data in a simple UI.
   - Handles input forms for creating and editing student data.

2. **Spring Boot Backend:**
   - Exposes REST APIs for CRUD operations.
   - Handles business logic and data processing.
   - Stores data in a connected database.

## 🔧 API Endpoints (Sample)

- `GET /viewAllStudents` – Get all students
- `POST /addStudent` – Add a new student
- `PUT /updateStudent` – Update existing student
- `DELETE /deleteStudent/{id}` – Delete student by ID

## 🚀 How to Run

### Backend (Spring Boot)

1. Clone the repository.
2. Open in your preferred IDE.
3. Configure the database in `application.properties`.
4. Run the application.

### Frontend (React)

1. Navigate to the frontend directory.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the development server.

---
