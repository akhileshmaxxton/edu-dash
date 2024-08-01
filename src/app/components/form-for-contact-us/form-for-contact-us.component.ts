import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IContact } from '../../interface/icontact';
import axios from 'axios';
import { UniServiceService } from '../../service/uni-service.service';

@Component({
  selector: 'app-form-for-contact-us',
  templateUrl: './form-for-contact-us.component.html',
  styleUrl: './form-for-contact-us.component.css'
})
export class FormForContactUsComponent {
  angForm!: FormGroup;
  constructor(private fb: FormBuilder, private uniService: UniServiceService) {
   this.createForm();
 }
  createForm() {
   this.angForm = this.fb.group({
      email: ['', Validators.required ],
      name: ['', Validators.required ],
      phone: ['', Validators.required ],
      state: ['', Validators.required ],
      country: ['', Validators.required ],
      message: ['', Validators.required ],
      check: [false, Validators.requiredTrue] 
   });
 }

 async onSubmit() {
  if (this.angForm.valid) {
    const formValues: IContact = this.angForm.value;
    try {
      const response = await this.uniService.contactApi(formValues);  // Replace axios.post('https://your-api-endpoint.com/contact', formValues);
      console.log('Response:', response.data);
      // Handle successful response here
    } catch (error) {
      console.error('Error:', error);
      // Handle error response here
    }
  }
}
}
