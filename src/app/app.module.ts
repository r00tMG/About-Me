import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { IndexComponent } from './components/index/index.component';
import { FooterComponent } from './components/footer/footer.component';
import {CommitterComponent} from './components/index/committer/committer.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {StoreDevtools, StoreDevtoolsModule} from "@ngrx/store-devtools";
import { aboutReducer } from './@ngrx/about.reducer';
import { AboutEffects } from './@ngrx/about.effects';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    IndexComponent,
    FooterComponent,
    CommitterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({catalogStore:aboutReducer}),
    EffectsModule.forRoot([AboutEffects]),
    StoreDevtoolsModule.instrument()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
