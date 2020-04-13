import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { RepositoriesComponent } from './repositories/repositories.component';



const routes: Routes = [
  {path:"user-profile", component:UsersComponent},
  {path:"search-repo", component:RepositoriesComponent},
  {path: "", redirectTo:"/user-profile", pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
