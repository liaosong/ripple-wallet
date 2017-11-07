import { Component, OnInit } from '@angular/core'
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms'
import { HttpClient } from '@angular/common/http'
import { ApiAddress } from '../../../core/core.api'
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public password: AbstractControl
  public form: FormGroup

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
  ) {
    this.form = fb.group({
      password: ['0123456789abcdef', Validators.compose([Validators.required])]
    })

    this.password = this.form.controls['password']
  }

  ngOnInit() {
  }

  openWallet(values) {
    this.http.post(ApiAddress.OPEN_WALLET, values).subscribe((res) => {
      this.router.navigate(['/overview'])
    }, (err) => {
      console.log(err)
    })
  }

}
