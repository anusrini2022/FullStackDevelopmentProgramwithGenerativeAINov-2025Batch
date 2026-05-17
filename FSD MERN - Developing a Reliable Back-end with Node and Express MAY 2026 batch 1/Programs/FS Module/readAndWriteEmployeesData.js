let fs = require('fs');
let emp1 = {
    id: 1,
    name: 'John',
    age: 30,
    department: 'HR'
};
let emp2 = {
    id: 2,              
    name: 'Jane',
    age: 25,
    department: 'IT'
};
let emp3 = {
    id: 3,
    name: 'Doe',
    age: 28,
    department: 'Finance'
};
let employees = [emp1, emp2, emp3]; 
let employeesData = JSON.parse(fs.readFileSync('employees.json', 'utf-8'));
if(employeesData.length==0){
    let data = JSON.stringify(employees);
    //let employeeJsonData = JSON.parse(data);
    fs.writeFileSync('employees.json', data);
    console.log('Employee data has been written to employees.json');
}else {
    let newEmp = {
        id: 5,
        name: 'John Doe',
        age: 36,
        department: 'IT'
    }
    let employeeExists = employeesData.some(emp => emp.id === newEmp.id);
    if(employeeExists){
        console.log(`Employee with id ${newEmp.id} already exists.`);
    }else {
        employeesData.push(newEmp);
        let updatedData = JSON.stringify(employeesData);
        fs.writeFileSync('employees.json', updatedData);
        console.log('New employee data has been added to employees.json');
    }
}


