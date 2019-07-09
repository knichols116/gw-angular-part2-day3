import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoggedOutComponent } from './logged-out/logged-out.component';

const routes: Routes = [
  { path: '', component: LoggedOutComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
