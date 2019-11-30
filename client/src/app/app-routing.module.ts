import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { UserDetailsComponent } from './user-details/user-details.component';


const routes: Routes = [
  {path: 'createUser', component: UserComponent},
  {path: 'viewUsers', component: UserDetailsComponent},
  {path: '', component: UserComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
