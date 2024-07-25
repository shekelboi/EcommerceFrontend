import { Component } from '@angular/core';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-categories-dropdown',
  standalone: true,
  imports: [DropdownModule, FormsModule, ReactiveFormsModule],
  templateUrl: './categories-dropdown.component.html',
  styleUrl: './categories-dropdown.component.css'
})
export class CategoriesDropdownComponent {
  example = '';
  options = [
    { name: 'test', code: 't' }
  ];
}
