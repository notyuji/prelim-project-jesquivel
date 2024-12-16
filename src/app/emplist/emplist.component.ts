import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-emplist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './emplist.component.html',
  styleUrls: ['./emplist.component.css']
})
export class EmplistComponent {
  employees = [
    { id: 1, name: 'Abby Dizon', gender: 'Female', email: 'abbydizon@gmail.com', status: 'Inactive', salary: 35000 },
    { id: 2, name: 'Reuel Sundiam', gender: 'Male', email: 'reuelsundiam@gmail.com', status: 'Active', salary: 40000 },
    { id: 3, name: 'Almina Tanglao', gender: 'Female', email: 'alminat@gmail.com', status: 'Inactive', salary: 35000 },
    { id: 4, name: 'Ethan Gonzales', gender: 'Male', email: 'ethang@gmail.com', status: 'Active', salary: 37500 },
  ];
}
