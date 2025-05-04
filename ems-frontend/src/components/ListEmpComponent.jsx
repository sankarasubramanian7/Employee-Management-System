import React, { useEffect, useState } from "react";
import { deleteEmployee, listEmployees } from "../services/EmployeeService";
import { useNavigate } from "react-router-dom";

const ListEmpComponent = () => {
  const [employees, setEmployees] = useState([]);
  const navigator = useNavigate();

  useEffect(() => {
    getAllEmployees();
  }, []);

  function getAllEmployees() {
    listEmployees()
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function addNewEmployee() {
    navigator("/add-employee");
  }

  function updateEmployee(id) {
    navigator(`/edit-employee/${id}`);
  }

  function removeEmployee(id) {
    console.log(id);
    deleteEmployee(id)
      .then((response) => {
        getAllEmployees();
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div className="container">
      <h2 className="text-center my-4">List of Employees</h2>

      <div className="mb-3">
        <button className="btn btn-primary" onClick={addNewEmployee}>
          Add Employee <i className="bi bi-plus-lg"></i>
        </button>
      </div>

      {/* Table wrapped inside .table-responsive to ensure responsiveness */}
      <div className="table-responsive">
        <table className="table table-striped table-bordered">
          <thead className="table-dark">
            <tr>
              <th>Employee Id</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.length > 0 ? (
              employees.map((employee, index) => (
                <tr key={employee.id}>
                  <td data-label="Employee Id">{index + 1}</td>{" "}
                  {/* Row number */}
                  <td data-label="First Name">{employee.firstName}</td>
                  <td data-label="Last Name">{employee.lastName}</td>
                  <td data-label="Email">{employee.email}</td>
                  <td data-label="Actions" className="text-center">
                    <button
                      className="btn btn-info me-2"
                      onClick={() => updateEmployee(employee.id)}
                    >
                      Update <i className="bi bi-pencil-square"></i>
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => removeEmployee(employee.id)}
                    >
                      Delete <i className="bi bi-trash3"></i>
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center">
                  No employees found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListEmpComponent;
