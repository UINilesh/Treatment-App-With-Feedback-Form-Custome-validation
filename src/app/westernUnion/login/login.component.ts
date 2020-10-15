import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from "@angular/forms";

@Component({
  selector: "login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  submitted = false;
  loginform: FormGroup;

  username = new FormControl("");
  password = new FormControl("");
  rememberMe = new FormControl("");

  marked = false;
  theCheckbox = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.loginform = this.fb.group({
      username: [
        null,
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(10),
        ],
      ],
      password: [
        null,
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(10),
        ],
      ],
      rememberMe: [null],
    });
  }

  get f() {
    return this.loginform.controls;
  }
  loginAction() {
    this.submitted = true;
    if (!this.loginform.valid) {
      return;
    }
    console.log(this.loginform.value);
  }

  toggleVisibility(e) {
    this.marked = e.target.checked;
    console.log((this.marked = e.target.checked));
  }
}
