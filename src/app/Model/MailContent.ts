import { EmailValidator, FormControl, FormGroup, FormBuilder, Validators } from "@angular/forms";

export class MailContent{
    
    sendMailForm = new FormGroup({
        from: new FormControl('', Validators.required),
        to: new FormControl('dhananjayab198@gmail.com,dhananjayab1997@gmail.com'),
        subject: new FormControl('', Validators.required),
        body: new FormControl('',Validators.required)
    });

}