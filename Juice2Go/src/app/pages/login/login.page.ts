import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router, RouterLink } from '@angular/router';  // Import Router for navigation

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule,RouterLink, ReactiveFormsModule]  // Ensure ReactiveFormsModule is imported
})
export class LoginPage implements OnInit {
  form!: FormGroup;

  constructor(private router: Router) {
    this.initForm();
  }

  ngOnInit() {}

  private initForm() {
    this.form = new FormGroup({
      email: new FormControl(null, { 
        validators: [Validators.required, Validators.email]
      }),
      password: new FormControl(null, { 
        validators: [Validators.required, Validators.minLength(8)]
      }),
    });
  }

  onSubmit() {
    if (this.form.valid) {
      // Navigate to the home page if the form is valid
      this.router.navigate(['/home']);
    } else {
      // Mark the form as touched to show validation errors
      this.form.markAllAsTouched();
    }
  }
}
