import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { constant } from '../Constants/constant';
// import {test} from './../Common/smtp.js';
declare let Email:any;

export interface ResponseData{
 name: string;
 description: string;
 url: string;
 html: string;
 markdown: string;
}
@Injectable({
 providedIn: 'root'
})
export class ApiService {
 private baseURL = 'https://www.techiediaries.com/api/data.json';
 constructor(private httpClient: HttpClient,) { }
 fetch(): Observable<ResponseData[]> {
    return this.httpClient.get(this.baseURL) as Observable<ResponseData[]>;
 }

 sendEmail(mailContent: any): Boolean{
    if(mailContent){
        
        Email.send({
            Host : constant.smtpServer,
            Username : constant.smtpUserName,
            Password : constant.smtpPass,
            To : mailContent.to,
            From : constant.smtpUserName,
            Subject : mailContent.subject + ":-" +  mailContent.from + ":-" + mailContent.number,
            Body : mailContent.body
        }).then(
          (message:any) => alert(message)
        );
    }
    return false;
 }
}