import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {
  constructor(private fb:FormBuilder){}
  contactForm!: FormGroup;
  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name:[''],
      email:[''],
      website:[''],
      message:['']
    })
  }
  submit(){
    this.contactForm.reset()
  }

}
