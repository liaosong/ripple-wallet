import { Component, OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms'

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
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      password: ['', Validators.compose([ Validators.required])]
    })

    this.password = this.form.controls['password']
  }

  register(value) {
    // this.http
  }

}
