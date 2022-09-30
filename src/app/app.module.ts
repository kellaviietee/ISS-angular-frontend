import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { ProductService } from './services/product.service';
import { IssComponentComponent } from './components/iss-component/iss-component.component';
import { RouterModule, Routes } from '@angular/router';
import { PeopleListComponent } from './components/people-list/people-list.component';

const routes:Routes = [
  {path: "iss", component:IssComponentComponent},
  {path: "people", component:PeopleListComponent},
  {path: "", redirectTo: "/iss", pathMatch: "full"},
  {path: "**", redirectTo: "/iss", pathMatch: "full"}

];

@NgModule({
  declarations: [
    AppComponent,
    IssComponentComponent,
    PeopleListComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
