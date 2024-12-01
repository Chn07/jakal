import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonicModule, NavController, ToastController } from '@ionic/angular';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
  standalone: true,
  imports: [IonicModule, ReactiveFormsModule, CommonModule], // Add CommonModule here
})
export class SignupPage implements OnInit {
  form!: FormGroup;
  private navCtrl = inject(NavController);
  private toastController = inject(ToastController);

  constructor() {
    this.initForm();
  }

  ngOnInit() {}

  initForm() {
    this.form = new FormGroup({
      name: new FormControl(null, { validators: [Validators.required] }),
      phone: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(11), Validators.maxLength(11)],
      }),
      email: new FormControl(null, { validators: [Validators.required, Validators.email] }),
      password: new FormControl(null, { validators: [Validators.required, Validators.minLength(8)] }),
    });
  }

  async onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();

      const toast = await this.toastController.create({
        message: 'Please fill in all required fields correctly.',
        duration: 2000,
        color: 'danger',
        position: 'top',
      });
      await toast.present();
    } else {
      this.navCtrl.navigateForward('/login');
    }
  }

  back() {
    this.navCtrl.back();
  }
}
