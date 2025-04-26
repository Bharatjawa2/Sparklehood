# 🚨 Sparklehood - Assignment Project
## Incident Reporting API

A **Node.js + Express.js + MongoDB** RESTful API for reporting, managing, and tracking AI safety incidents, following best practices like input validation and error handling.

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB (Mongoose ODM)
- dotenv (Environment Variables)
- Postman / curl (for API testing)

---

## 📚 Available API Endpoints

| Method | Endpoint | Description |
| :----- | :------- | :---------- |
| **POST** | `/api/v2/incident/post` | Create a new incident |
| **GET** | `/api/v2/incident/get/all` | Fetch all incidents |
| **GET** | `/api/v2/incident/get/:id` | Fetch a specific incident by ID |
| **DELETE** | `/api/v2/incident/delete/:id` | Delete an incident by ID |

---

## 🚀 Features

- **Create Incident**: Log a new incident report.
- **Fetch All Incidents**: Retrieve all incident reports sorted by date.
- **Get Incident by ID**: View a specific incident's details.
- **Delete Incident**: Remove an incident based on ID.
- **Robust Validation**: Ensures proper incident creation.
- **Error Handling**: Consistent API responses for errors.

---

## 📦 Installation and Setup

### 1. Clone the Repository

```bash
git clone https://github.com/Bharatjawa2/Sparklehood.git
cd Backend
npm install
```

---

### 2. Setup Environment Variables

Create a `.env` file in the root folder with the following content:

```env
PORT=4000
MONGODB_URL=your_mongodb_connection_url
```

> Replace `your_mongodb_connection_url` with your actual MongoDB Atlas connection string.

---

### 3. Seed the Database (Optional)

To insert sample incidents into your database:

```bash
node seed.js
```

---

### 4. Start the Server

```bash
nodemon server.js
```

> The API will be available at `http://localhost:4000`

---

## 🧪 Example API Usage

### ➡️ Create a New Incident

- **POST** `/api/v2/incident/post`
- **Request Body (JSON):**

```json
{
  "title": "System Malfunction",
  "description": "AI model outputting inaccurate results under stress.",
  "severity": "High"
}
```

---

### ➡️ Fetch All Incidents

- **GET** `/api/v2/incident/get/all`

---

### ➡️ Fetch a Specific Incident by ID

- **GET** `/api/v2/incident/get/:id`

Example:

```bash
GET http://localhost:4000/api/v2/incident/get/662cbd25d2fbad8e63d3a017
```

---

### ➡️ Delete an Incident by ID

- **DELETE** `/api/v2/incident/delete/:id`

Example:

```bash
DELETE http://localhost:4000/api/v2/incident/delete/662cbd25d2fbad8e63d3a017
```

---

## ⚠️ Validation Rules

- **title**: Required (String)
- **description**: Required (String)
- **severity**: Required, must be one of: `"Low"`, `"Medium"`, `"High"`

If validation fails, the API returns:

```json
{
  "message": "Invalid input"
}
```
with HTTP Status Code: **400 Bad Request**.

---

## 🎯 Project Status

- ✅ CRUD functionality complete.
- ✅ Input validation and error handling implemented.
- ✅ MongoDB connection configured.
- ✅ Seed script available for quick testing.

---

## 💬 Notes

- All date fields (`reported_at`) are auto-generated upon incident creation.
- Database queries are optimized with sorting (most recent first).

---

# 🚀 Ready for Testing and Deployment!
