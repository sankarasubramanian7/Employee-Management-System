package net.sankar.ems.mapper;

import net.sankar.ems.dto.EmployeeDto;
import net.sankar.ems.entity.Employee;

public class EmployeeMapper {

    // Convert Employee to EmployeeDto
    public static EmployeeDto mapToEmployeeDto(Employee employee) {
        return new EmployeeDto(
                employee.getId(),
                employee.getFirstName(),
                employee.getLastName(),
                employee.getEmail()
        );
    }

    // Convert EmployeeDto to Employee
    public static Employee mapToEmployee(EmployeeDto employeeDto) {
        return new Employee(
                employeeDto.getId(),
                employeeDto.getFirstName(),
                employeeDto.getLastName(),
                employeeDto.getEmail()
        );
    }
}
