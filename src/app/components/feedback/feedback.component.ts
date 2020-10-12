import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from "@angular/forms";
import { Router } from "@angular/router";

import { DataService } from "../../services/data.service";
@Component({
  selector: "app-feedback",
  templateUrl: "./feedback.component.html",
  styleUrls: ["./feedback.component.css"],
})
export class FeedbackComponent implements OnInit {
  usernamePattern = "[a-zA-Z][a-zA-Z ]+";
  mobilePattern = "[0-9]*";
  mailform: FormGroup;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private service: DataService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.mailform = this.fb.group({
      name: [
        null,
        [Validators.required, Validators.pattern(this.usernamePattern)],
      ],
      city: [
        null,
        [Validators.required, Validators.pattern(this.usernamePattern)],
      ],
      email: [null, [Validators.required, Validators.email]],
      contactNumber: [
        null,
        [
          Validators.required,
          Validators.maxLength(10),
          Validators.pattern(this.mobilePattern),
        ],
      ],
      gender: [null, Validators.required],
      message: [
        null,
        [
          Validators.required,
          Validators.maxLength(150),
          Validators.pattern(this.usernamePattern),
        ],
      ],
    });
  }

  get f() {
    return this.mailform.controls;
  }

  sendMail(mailform) {
    this.submitted = true;
    if (this.mailform.invalid) {
      return;
    }
    console.log(mailform);
    this.service.postMessage(mailform).subscribe(
      (response) => {
        this.router.navigate(['./thank-you'])
        console.log(response);
      },
      (error) => {
        console.warn(error.responseText);
        console.log({ error });
      }
    );
  }
}
