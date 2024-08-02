import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IUserRegister } from '../../interface/iuser-register';
import { UniServiceService } from '../../service/uni-service.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {
  public registerForm!: FormGroup;

  constructor(private fb: FormBuilder, private uniService: UniServiceService) {}

  ngOnInit() {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      confirm_password: ['', [Validators.required]],
      terms: [false, [Validators.requiredTrue]]
    }, { validators: this.passwordMatchValidator });
  }

  passwordMatchValidator(group: FormGroup): { [key: string]: boolean } | null {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirm_password')?.value;
    return password === confirmPassword ? null : { passwordMismatch: true };
  }

  async onSubmit() {
    if (this.registerForm.valid) {
      const formData: IUserRegister = this.registerForm.value;
      console.log("dormData",formData);
      try {
        const response = await this.uniService.registerApi(formData);  // Replace axios.post('https://your-api-endpoint.com/register', formData);
        console.log('Response:', response.data);
      } catch (error) {
        console.error('Error:', error);
       
      }
      
    }
  }
}
