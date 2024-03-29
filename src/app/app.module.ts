import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { HttpClientModule } from '@angular/common/http';
import { ChatBotComponent } from './Components/chat-bot/chat-bot.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { PwaComponent } from './Components/pwa/pwa.component';
import { HomeComponent } from './Components/home/home.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ModalComponent } from './Reuseable-component/modal/modal.component';
@NgModule({
  declarations: [
    AppComponent,
    ChatBotComponent,
    NavbarComponent,
    PwaComponent,
    HomeComponent,
    FooterComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
