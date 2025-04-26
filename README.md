# Sparklehood- Assignment Project
# 🚨 Incident Reporting API

This is a Node.js + Express.js + MongoDB based REST API for reporting, managing, and tracking incidents.  
It supports creating, fetching, and deleting incident reports with different severity levels.

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB + Mongoose
- dotenv (Environment Variables)
- Postman

---

## API's

- POST
    http://localhost/api/v2/incident/post
- Get
    http://localhost/api/v2/incident/get/all
    http://localhost/api/v2/incident/get/:id
- Delete
    http://localhost/api/v2/incident/delete/:id

## 🚀 Features

- **Post Incident**: Create a new incident report
- **Fetch All Incidents**: Retrieve all incident reports sorted by date
- **Get Incident by ID**: View a specific incident by its unique ID
- **Delete Incident**: Delete an incident by ID
- **Input Validation** and **Error Handling**

---

## 📦 Installation

1. **Clone the repository**

```bash
https://github.com/Bharatjawa2/Sparklehood.git
cd Backend
npm install
```

2. Create an ENV File
```bash
PORT=4000
MONGODB_URL=your_mongodb_connection_url
```

3.Seeding (Dummy Data)
```bash
 node seed.js
```

4.Run the server
```bash
nodemon server.js
```


