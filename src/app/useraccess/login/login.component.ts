import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    Username : new FormControl(''),
    Password : new FormControl(''),
  });

  constructor(private auth:AuthService, private router:Router)
  {

  }
  ngOnInit(): void {
    if(this.auth.isLoggedIn())
    {
      this.router.navigate(["admin"]);
    }
  }


  onSubmit() {

    this.auth.onLogin(this.loginForm.value).subscribe((res:any) => {
      console.log(res);
      localStorage.setItem('token',res.token);
      this.router.navigate(["admin"]);
    },
    error => {
      console.log(error);
      this.router.navigate(["login"]);

    });

    this.loginForm.get("Username")?.reset();
    this.loginForm.get("Password")?.reset();

  }

}
