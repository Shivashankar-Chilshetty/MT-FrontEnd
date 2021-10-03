import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public name: any;
  public email: any;
  public password: any;
  constructor(public appService: AppService, public toastr: ToastrService, public router: Router) { }

  ngOnInit(): void {
  }
  public goToSignIn: any = () => {
    this.router.navigate(['/'])
  }

  public signupFunction: any = () => {
    if (!this.name) {
      this.toastr.warning('Please Enter your Name')
    }

    else if (!this.email) {
      this.toastr.warning('Please Enter your email')
    }
    else if (!this.password) {
      this.toastr.warning('Enter password')
    }
    else {
        let userData = {
          name: this.name,
          email: this.email,
          password: this.password,
        }

      this.appService.signupFunction(userData).subscribe(
        (data) => {
          console.log(data)
          if (data.status === 200) {
            this.toastr.success('sign up successful');
            setTimeout(() => {
              this.goToSignIn()
            }, 2000)
          }
          else {
            this.toastr.error(data.message);
          }

        },
        (error) => {
          this.toastr.error('some error occured')
        }
      )
    }
  }


}
