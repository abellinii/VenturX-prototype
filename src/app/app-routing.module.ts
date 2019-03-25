import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VenturxComponent } from './venturx/venturx.component';

const routes: Routes = [
{path: '' ,component: VenturxComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
