import { Component, OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { RippleAccount } from '../../../core/states/account/account.model'
import { ApiAddress } from '../../../core/core.api'

@Component({
  templateUrl: 'overview.component.html',
  styleUrls: ['overview.component.scss']
})

export class OverviewComponent implements OnInit {
  public accounts: RippleAccount[]
  constructor(
    private http: HttpClient
  ) {
  }

  ngOnInit() {
    this.http.get(ApiAddress.ACCOUNTS).subscribe((accounts: RippleAccount[]) => {
      this.accounts = accounts
    })
  }
}
