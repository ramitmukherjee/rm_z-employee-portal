import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { SortUserPipe } from './sort-user.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule, MatInputModule, MatButtonModule, MatRadioModule, MatDatepickerModule, MatNativeDateModule, MatSelectModule, MatOptionModule } from '@angular/material';
import { GenderPipe } from './gender.pipe';
import { DepartmentPipe } from './department.pipe';

const routes: Routes = [
  {path: 'createUser', component: UserComponent},
  {path: 'viewUsers', component: UserDetailsComponent},
  {path: '', component: UserComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserDetailsComponent,
    SortUserPipe,
    GenderPipe,
    DepartmentPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ReactiveFormsModule,
    AngularFontAwesomeModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatOptionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
