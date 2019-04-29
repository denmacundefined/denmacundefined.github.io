import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { WhoAmIComponent } from './who-am-i/who-am-i.component';
import { LINKS } from './link.constants';

const routes: Routes = [{ 
    path: '',
    redirectTo: LINKS[0],
    pathMatch: 'full'
  }, { 
    path: LINKS[0],
    component: WhoAmIComponent
  }];

@NgModule({
  declarations: [
    AppComponent,
    WhoAmIComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
