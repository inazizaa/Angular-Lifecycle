import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { LifecycletwoComponent } from './lifecycletwo/lifecycletwo.component';

const routes: Routes = [
  {
    path: 'lifecycle',
    component: LifecycleComponent,
  },
  {
    path: 'cycletwo',
    component: LifecycletwoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
