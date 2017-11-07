import { Component, OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms'
import { ApiAddress } from '../../../core/core.api'
import { Router } from '@angular/router'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public form: FormGroup
  public password: AbstractControl

  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      password: ['', Validators.compose([ Validators.required])]
    })

    this.password = this.form.controls['password']
  }

  register(value) {
    this.http.post(ApiAddress.CREATE_WALLET, value).subscribe(() => {
      this.router.navigate(['entrance/register-success'])
    }, (err) => {

    })
  }

}
