import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public email:any;
  public password:any;

  constructor(public appService : AppService,public toastr: ToastrService,  public router : Router) { }

  ngOnInit(): void {
  }
  public goToSignUp=()=>{
    this.router.navigate(['/sign-up'])
  }
  public signinFunction:any=()=>{
    if(!this.email){
      this.toastr.warning('Enter email');
    }
    else if(!this.password){
      this.toastr.warning('Enter passowrd')
    }
    else{
      let userData = {
        email : this.email,
        password : this.password
      }
      this.appService.signinFunction(userData).subscribe(
        (apiResponse)=>{
          if(apiResponse.status===200){
            this.toastr.success('login successful')
            this.router.navigate(['/welcome'])
          }
          else{
            this.toastr.error(apiResponse.message)
          }
        },
        (err)=>{
          this.toastr.error('some errror occured')
        }
      )
    }
  }

}
