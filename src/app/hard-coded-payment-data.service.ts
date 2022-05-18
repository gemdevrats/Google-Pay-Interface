import { Injectable } from '@angular/core';
import { Payment } from './payment';

@Injectable({
  providedIn: 'root'
})
export class HardCodedPaymentDataService {
  paymentData : Payment[] = [];
  constructor() {
    this.paymentData.push(new Payment('Pay','Sent','ADS456754356',2000,'You Paid',new Date('03/17/2021')));
    this.paymentData.push(new Payment('Pay','Received','',1500,'Request Received',new Date('06/23/2021')));
    this.paymentData.push(new Payment('Collect','Received','',250,'You Requested',new Date('08/12/2021')));
    this.paymentData.push(new Payment('Collect','Sent','ADS456754356',5000,'You Received',new Date('02/09/2022')));
    this.paymentData.push(new Payment('Pay','Received','',4500,'Request Received',new Date('04/23/2022')));
   }


}
