import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule,HttpClientModule,CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {
  constructor(private fb:FormBuilder,private http: HttpClient){}
  contactForm!: FormGroup;
  isError:boolean = false
  message:string |null = null
  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name:[''],
      email:[''],
      website:[''],
      message:['']
    })
  }
  submit(){
    const formData = this.contactForm.value;
    this.http.post('/', formData).subscribe(
      () => {
        // Handle successful submission
        console.log('Form submitted successfully');
        this.message = 'Thank you for your response !!!'
        this.contactForm.reset();
      },
      error => {
        // Handle error
        this.message = 'Not able to submit respone, Try again :('
        this.isError = true
        console.error('Error submitting form:', error);
      }
    );
  }

}
