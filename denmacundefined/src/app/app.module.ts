import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { WhoAmIComponent } from './who-am-i/who-am-i.component';
import { ProjectsComponent } from './projects/projects.component';
import { ModalModule } from 'ngx-bootstrap';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    WhoAmIComponent,
    ProjectsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
