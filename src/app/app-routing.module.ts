import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateFormsComponent } from './components/template-forms/template-forms.component';
import { ReactiveFormsComponent } from './components/reactive-forms/reactive-forms.component';

const routes: Routes = [
  {path: 'template', component: TemplateFormsComponent, pathMatch: 'full'},
  {path: 'reactive', component: ReactiveFormsComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
