import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-forms',
  templateUrl: './template-forms.component.html',
  styleUrls: ['./template-forms.component.css']
})
export class TemplateFormsComponent implements OnInit{
  ngOnInit(): void {
    let form= document.querySelector('form') as HTMLFormElement

    form.addEventListener('submit', (submitEvent: SubmitEvent)=>{
      if(!form.checkValidity){
        submitEvent.preventDefault();
        submitEvent.stopPropagation();
      }
      form.classList.add('was-validated');
    })
  }

  registerUser(signupForm: any){
    console.log(signupForm.value);
  }

}
