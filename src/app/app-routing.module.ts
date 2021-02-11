import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SuggestionComponent } from './components/log-in/suggestion.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '', component: SuggestionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
