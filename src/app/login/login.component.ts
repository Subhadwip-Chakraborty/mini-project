import { Component} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EnrollementService } from '../enrollement.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private fb:FormBuilder,private es:EnrollementService) { }

  register:any=this.fb.group({
    email:['',Validators.required],
    password:['',Validators.required],  
  })

  get email(){
    return this.register.get('email');
  }
  
  get password(){
    return this.register.get('password');
  }
  onSubmit(){
    console.log(this.register.value);
    this.es.enroll(this.register.value).subscribe((res)=> {
      console.log(res);
    })
}
}