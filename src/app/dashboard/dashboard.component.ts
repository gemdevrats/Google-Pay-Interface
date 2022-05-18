import { Component, OnInit } from '@angular/core';
import { HardCodedPaymentDataService } from '../hard-coded-payment-data.service';
import { Payment } from '../payment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private hardCodedPaymentData:HardCodedPaymentDataService) { }

  paymentData : Payment[] = [];
  ngOnInit(): void {
    this.paymentData = this.hardCodedPaymentData.paymentData;
  }

}
