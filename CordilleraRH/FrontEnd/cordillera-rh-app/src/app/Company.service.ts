export class CompanyService{

    companys = [
        'Sony',
        'Wipro',
        'Fujima',
        'Konami',
        'Microsoft',
        'AMD',
        'Intel'
    ];

    company = [
        {
            id: 1,
            name: 'Sony',
            country: 'Europe'
        },
        {
            id: 2,
            name: 'Fujima',
            country: 'Japan'
        },
        {
            id: 3,
            name: 'Bosch',
            country: 'Poland'
        },
        {
            id: 4,
            name: 'Intelbras',
            country: 'Brazil'
        }
    ]

    getCompanys(){
        return this.company;
    }

    deleteCompany(id: number){
        this.company.pop();
        console.log(id);
    };
}