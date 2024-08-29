import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { TranslateModule } from '@ngx-translate/core';
import { AppInjector } from './shared/services/app-injector';
import { SharedModule } from './shared/shared.module';
import { NgxsModule } from '@ngxs/store';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    TranslateModule.forRoot(),
    HttpClientModule,
    SharedModule,
    MatDialogModule,
    NgxsModule.forRoot()
  ],
  providers: [
    provideAnimationsAsync(),
    {
      provide: APP_BASE_HREF, useValue: '/vehicles-park/'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    AppInjector.injector = injector;
  }
 }
