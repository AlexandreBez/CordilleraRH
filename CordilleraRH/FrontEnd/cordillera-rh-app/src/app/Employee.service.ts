export class EmployeeService{

    employees = [
        {
            id: 1,
            name: 'Jhon Mark',
            role: 'QA Tester',
            company: 'Sony'
        },
        {
            id: 2,
            name: 'Elizabeth Lang',
            role: 'QA Supervisor',
            company: 'Microsoft'
        },
        {
            id: 3,
            name: 'Ana Plazcinsk',
            role: 'Game Developer',
            company: 'EA'
        },
        {
            id: 4,
            name: 'Tiago Martinez',
            role: 'Web Developer',
            company: 'Lietz Softwares'
        },
    ];

    createEmployee(){
    }

    getEmployees(){
        return this.employees;
    };

    updateEmployee(){

    };

    deleteEmployees(id: number){
        this.employees.pop();
        console.log(id);
    };
}