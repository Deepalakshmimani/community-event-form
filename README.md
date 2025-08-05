
# 🎉 Community Event Registration App

A simple full-stack web application to register users for a community event, store their details in a MySQL database, and view all registered members.

---

## 🚀 Features

- User-friendly registration form
- Stores data in MySQL
- Redirects to a success page after submission
- View all registered members in a table

---

## 🛠️ Technologies Used

- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Node.js, Express
- **Database:** MySQL

---


## 🧾 Requirement Analysis

### 🔐 Required Fields & Validation Rules

| Field        | Required | Validation Rule                              |
|--------------|----------|----------------------------------------------|
| Full Name    | ✅ Yes   | At least 2 characters, letters and spaces only |
| Email        | ✅ Yes   | Valid email format using regex                |
| Phone Number | ✅ Yes   | 10-digit phone number (only digits)           |
| Age          | ✅ Yes   | Must be **18 or older**                       |
| Gender       | ✅ Yes   | Must choose one                               |
| Category     | ✅ Yes   | Dropdown selection required                   |
| Notes        | ❌ No    | Max 200 characters                            |

> ✅ Regex used for email: `/^[\\w.-]+@[\\w.-]+\\.\\w{2,}$/`

---

## 📁 Project Structure

```text
EventApp/
├── db.js # MySQL database connection
├── server.js # Express server
├── package.json # NPM configuration file
├── public/
│ ├── index.html # Registration form page
│ ├── success.html # Success confirmation page
│ ├── members.html # List of registered members
│ ├── style.css # Styles for form 


