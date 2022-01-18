import { Component, OnInit } from '@angular/core';
import { FormGroup, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  getValues(val: String) {
    console.warn(val);
  }

  userForm: FormGroup;

  clearForm() {
    this.userForm.reset();
  }

  constructor() {}

  ngOnInit(): void {}
}
