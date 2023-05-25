import { Component } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
})
export class EmployeesComponent {
  amountOfEmployees = 3;
  showMoreEmployees() {
    this.amountOfEmployees += this.employees.length - this.amountOfEmployees;
    this.showLessToggle();
  }

  showLessEmployees() {
    this.amountOfEmployees = 3;
    this.showLessToggle();
  }
  showLess = false;
  showLessToggle() {
    if (this.amountOfEmployees === this.employees.length) {
      this.showLess = true;
    } else {
      this.showLess = false;
    }
  }

  employees = [
    {
      name: 'Anders Westad',
      position: 'Eier og Eiendomsmegler',
      image: '/assets/employees/employee1.jpg',
      phone: '+47 955 22 321',
      email: 'anders@cyber-security.no',
    },
    {
      name: 'Markus Lundeberg',
      position: 'Eier og Eiendomsmegler',
      image: '/assets/employees/employee2.jpg',
      phone: '+47 905 42 256',
      email: 'markus@cyber-security.no',
    },
    {
      name: 'Thomas Bärnheim',
      position: 'CEO',
      image: '/assets/employees/employee3.jpg',
      phone: '+47 708 85 2992',
      email: 'thomas@cyber-security.se',
    },
    {
      name: 'Camilla Skavikeng',
      position: 'Eiendomsmegler',
      image: '/assets/employees/employee4.jpg',
      phone: '+47 680 648 111',
      email: 'cammila@cyber-security.no',
    },
    {
      name: 'Eliot Ødegaard',
      position: 'Eiendomsmegler',
      image: '/assets/employees/employee2.jpg',
      phone: '+47 974 91 105',
      email: 'markus@cyber-security.no',
    },
    {
      name: 'Carolina Gingles Burke',
      position: 'Eindomsmegler',
      image: '/assets/employees/employee3.jpg',
      phone: '+47 744 703 401',
      email: 'carolinagb@cyber-security.no',
    },
    {
      name: 'Carolina Lopez-Braun',
      position: 'Juridisk avdeling',
      image: '/assets/employees/employee4.jpg',
      phone: '+47 608 314 397',
      email: 'carolina@cyber-security.no',
    },
    {
      name: 'Bent Ottervik',
      position: 'Eindomsrådgiver i Bergen',
      image: '/assets/employees/employee1.jpg',
      phone: '+47 917 87 188',
      email: 'bent@cyber-security.no',
    },
    {
      name: 'Eliot Ødegaard',
      position: 'CEO',
      image: '/assets/employees/employee2.jpg',
      phone: '+47 974 91 105',
      email: 'markus@cyber-security.no',
    },
  ];
}
