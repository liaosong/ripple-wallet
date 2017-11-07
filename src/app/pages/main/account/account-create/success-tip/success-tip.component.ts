import { Component, OnInit } from '@angular/core'
import { HttpClient } from "@angular/common/http";
import { ApiAddress } from "../../../../../core/core.api";

export interface ITipData {
  address: string
  privateKey: string
}

@Component({
  selector: 'app-success-tip',
  templateUrl: './success-tip.component.html',
  styleUrls: ['./success-tip.component.scss']
})
export class SuccessTipComponent implements OnInit {
  public privateKey = 's****************************'

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  showSecretKey() {
    this.privateKey = 'rB5of6MKHtmJKmDp7Sncj1dFSExYdUBRFq'
  }

  saveTheKey() {
    this.http.post(ApiAddress.SAVE_PRIVATE_KEY, {}).subscribe((res) => {
      console.log(res)
    })
  }

}
