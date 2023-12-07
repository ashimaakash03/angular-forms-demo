import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit{


  ngOnInit(): void {
    let form= document.querySelector('form') as HTMLFormElement;
    form.addEventListener('submit', (submitEvent: SubmitEvent)=>{
      if(!form.checkValidity){
        submitEvent.preventDefault();
        submitEvent.stopPropagation();
      }

    form.classList.add('was-validated')
    })
  }

  registrationForm: FormGroup;

  constructor(private formBuilder: FormBuilder){
    this.registrationForm = this.formBuilder.group({
      fullname: ['', Validators.required],
      email: ['', Validators.required],
      contact: ['', Validators.required],
      password: ['',Validators.required],
    });
  }

}
