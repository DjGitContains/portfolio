import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {
  submitted: Boolean=false;
  @ViewChild('myModalClose') modalClose: any;
  mailModel!: FormGroup<{ name: FormControl<string | null>; number: FormControl<string | null>; from: FormControl<string | null>; to: FormControl<string | null>; subject: FormControl<string | null>; body: FormControl<string | null>; }>;

  constructor(private formBuilder: FormBuilder, private apiService:ApiService){}

  ngOnInit(): void {
  this.mailModel = this.formBuilder.group({
    name: ['', Validators.required],
    number: ['', Validators.required],
    from: ['', [Validators.required, Validators.email]],
    to: ['dhananjayab1997@gmail.com'],
    subject:['', Validators.required],
    body:['',Validators.required]
  });
  }
  get formCon() { return this.mailModel.controls; }
    
  onSubmit(){
    this.submitted = true;
    console.log(this.mailModel.value);
    if (this.mailModel.invalid) {
      return;
    }
    this.modalClose.nativeElement.click();
    this.apiService.sendEmail(this.mailModel.value);
  }

}
