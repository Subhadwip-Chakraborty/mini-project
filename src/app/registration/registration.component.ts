import { Component} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EnrollementService } from '../enrollement.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  
  
  constructor(private fb:FormBuilder,private es:EnrollementService) { }


  
  register:any=this.fb.group({
    fname:['',[Validators.required,Validators.minLength(3)]],
    lname:['',Validators.required],
    email:['',[Validators.required,Validators.email]],
    pass:['',Validators.required],
    cpass:['',Validators.required]

  })

  get fname(){
    return this.register.get('fname');
  }
  
  get lname(){
    return this.register.get('lname');
  }
  get email(){
    return this.register.get('email')
  }
  get pass(){
    return this.register.get('pass')
  }
  get cpass(){
    return this.register.get('cpass');
    
  }
  onSubmit(){
    console.log(this.register.value);
    this.es.loginData(this.register.value).subscribe((res)=> {
      console.log(res);
    })
}
}
