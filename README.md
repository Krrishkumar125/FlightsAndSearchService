# ✈️ Flights and Search Service

A microservice for the **Airline Booking Management System** that manages flight-related operations and search functionalities.

---

## 📚 Table of Contents

- [📌 Project Overview](#-project-overview)
- [✨ Features](#-features)
- [🛠️ Technologies Used](#-technologies-used)
- [🚀 Getting Started](#-getting-started)
  - [🧰 Prerequisites](#-prerequisites)
  - [💻 Installation](#-installation)
  - [⚙️ Configuration](#️-configuration)
- [📦 Usage](#-usage)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)
- [📬 Contact](#-contact)

---

## 📌 Project Overview

The **Flights and Search Service** is a core microservice in the Airline Booking Management System. It manages the creation, retrieval, and search functionality of flight records. It is designed to be modular, scalable, and easily extendable as part of a distributed architecture.

---

## ✨ Features

- 🛫 **Flight Management**: Add, update, delete, and list flights.
- 🔍 **Search Flights**: Filter flights based on origin, destination, date, and more.
- 🧩 **Modular Microservice**: Can be integrated independently or with other services.
- ⚡ **Optimized for Performance**: Handles large datasets efficiently using Sequelize.

---

## 🛠️ Technologies Used

- **Node.js** – JavaScript runtime environment.
- **Express.js** – Lightweight web framework for handling HTTP requests.
- **MySQL** – Relational database to store flight data.
- **Sequelize** – ORM for Node.js with support for MySQL and migrations.

---

## 🚀 Getting Started

### 🧰 Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/en/download/)
- [MySQL](https://dev.mysql.com/downloads/)

---

### 💻 Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/Krrishkumar125/FlightsAndSearchService.git
   ```

2. **Navigate to the Project Directory**:

   ```bash
   cd FlightsAndSearchService
   ```

3. **Install Dependencies**:

   ```bash
   npm install
   ```

---

### ⚙️ Configuration

1. Create a `.env` file in the root directory:

   ```env
   PORT=3000
   ```

2. Inside `src/config`, create a `config.json` file:

   ```json
   {
     "development": {
       "username": "your_db_username",
       "password": "your_db_password",
       "database": "Flights_Search_DB_DEV",
       "host": "127.0.0.1",
       "dialect": "mysql"
     }
   }
   ```

   Replace `your_db_username` and `your_db_password` with your actual MySQL credentials.

---

## 📦 Usage

1. Start the development server:

   ```bash
   npm start
   ```

2. API Endpoints:

   - `GET /flights` – List all flights
   - `POST /flights` – Add a new flight
   - `GET /flights/search` – Search flights by query parameters

---

## 🤝 Contributing

Follow these steps to contribute:

1. Fork the repository
2. Create a new branch:

   ```bash
   git checkout -b feature-name
   ```

3. Commit your changes:

   ```bash
   git commit -m "Add new feature"
   ```

4. Push to GitHub:

   ```bash
   git push origin feature-name
   ```

5. Open a pull request 🚀

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 📬 Contact

Made with ❤️ by [Krrish Kumar](mailto:krrishkumar2028@gmail.com)  
Feel free to reach out for feedback, suggestions, or collaboration!

---
