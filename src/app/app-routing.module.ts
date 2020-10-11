import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentComponent } from './components/student/student.component';
import { HighmarksComponent } from './highmarks/highmarks.component';



const routes: Routes = [
  { path: '', component: StudentComponent },
  { path: 'details', component: StudentComponent },
  { path: 'highmarks', component: HighmarksComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
