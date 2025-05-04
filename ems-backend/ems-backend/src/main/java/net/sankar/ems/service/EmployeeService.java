package net.sankar.ems.service;

import net.sankar.ems.dto.EmployeeDto;

import java.util.List;

public interface EmployeeService {
    EmployeeDto createEmployee(EmployeeDto employeeDto);

    EmployeeDto getEmployeeId(Long employeeId);


    List<EmployeeDto> getAllEmployees();

    EmployeeDto updateEmployee (Long employeeId, EmployeeDto updatedEmployee);

    void deleteEmployee(Long employeeId);
}
