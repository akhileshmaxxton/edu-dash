import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IUserLogin } from '../../interface/iuser-login';
import { UniServiceService } from '../../service/uni-service.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  public user: IUserLogin = {
    email: '',
    password: '',
    terms: false
  };

  constructor(private uniService: UniServiceService) {
    
   }

  async onSubmit(form: NgForm) {
    if (form.valid && this.user.terms) {
      const formData: IUserLogin = this.user;
      console.log("dormData",formData);
      try{
        const response = await this.uniService.loginApi(formData);
        console.log('Response:', response.data);
      }
      catch(error){
        console.error('Error:', error);
      }
      console.log(this.user);
    } else {
      console.log('Form is invalid or checkbox is not checked.');
    }
  }
}
