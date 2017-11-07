import { Component, OnInit } from '@angular/core'
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms'
import { HttpClient } from '@angular/common/http'
import { ApiAddress } from '../../../../core/core.api'
import { MdDialog } from '@angular/material'
import { ITipData, SuccessTipComponent } from './success-tip/success-tip.component'

@Component({
  selector: 'app-account-create',
  templateUrl: './account-create.component.html',
  styleUrls: ['./account-create.component.scss']
})
export class AccountCreateComponent implements OnInit {
  public privateKey: AbstractControl
  public form: FormGroup

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private dialog: MdDialog
  ) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      privateKey: ['']
    })
    this.privateKey = this.form.controls['privateKey']
  }

  createWallet(value?) {
    // create with private key
    if (value) {
      this.http.post(ApiAddress.CREATE_ACCOUNT, value).subscribe((res: ITipData) => {
        this.dialog.open(SuccessTipComponent, res)
      })
    } else {
      this.http.post(ApiAddress.CREATE_ACCOUNT, {}).subscribe((res) => {
        this.dialog.open(SuccessTipComponent, res)
      })
    }
  }

}
