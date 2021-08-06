import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter.component';
import { CounterViewComponent } from './counter-view.component';
import { DecrementButtonComponent } from './decrement-button.component';
import { FooterComponent } from './footer.component';
import { HeaderComponent } from './header.component';
import { IncrementButtonComponent } from './increment-button.component';
import { MainComponent } from './main.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    CounterComponent,
    CounterViewComponent,
    IncrementButtonComponent,
    DecrementButtonComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], { initialNavigation: 'enabledBlocking' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
