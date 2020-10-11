import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './components/student/student.component';
import { StudentService } from './services/student.service';
import { HttpClientModule } from '@angular/common/http';
import { HighmarksComponent } from './highmarks/highmarks.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    HighmarksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
