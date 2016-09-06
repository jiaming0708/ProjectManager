import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic }    from '@angular/platform-browser-dynamic';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppComponent } from './app.component';
import { routing, appRoutingProviders } from './app.route';
import { CreateComponent } from './template/create.component';
import { DashBoardComponent } from './dashboard/dashboard.component';

import '../scss/main.scss';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  declarations: [
    AppComponent,
    CreateComponent,
    DashBoardComponent
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);