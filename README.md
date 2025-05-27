# Employee Management System

A full-stack **Employee Management System** built with **Java Spring Boot** (backend) and **React** (frontend). The application provides basic **CRUD operations** (Create, Read, Update, Delete) for managing employee records.

## 🚀 Features

- Add new employees
- View all employees
- Update existing employee details
- Delete employees
- RESTful API with Spring Boot
- Interactive and responsive UI with React

---

## 🛠️ Tech Stack

### Backend
- Java 17+
- Spring Boot
- Spring Data JPA
- H2 / MySQL (for database)
- Maven
- Lombok

### Frontend
- React
- Axios (for API calls)
- Bootstrap / Tailwind (optional for styling)

---

## ⚙️ Getting Started

### Prerequisites

- Java JDK 17+
- Node.js and npm
- Maven

### Backend Setup (Spring Boot)

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/employee-management-system.git
    cd employee-management-system/backend
    ```

2. Configure your application properties:

   **`src/main/resources/application.properties`**
   ```properties
   spring.datasource.url=jdbc:h2:mem:testdb
   spring.datasource.driverClassName=org.h2.Driver
   spring.datasource.username=
   spring.datasource.password=
   spring.jpa.database-platform=org.hibernate.dialect.H2Dialect
   spring.h2.console.enabled=true
   spring.jpa.hibernate.ddl-auto=update
