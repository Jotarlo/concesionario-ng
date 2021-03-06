import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './public/template/header/header.component';
import { NavbarComponent } from './public/template/navbar/navbar.component';
import { FooterComponent } from './public/template/footer/footer.component';
import { NotFoundComponent } from './public/error/not-found/not-found.component';
import { InternalServerErrorComponent } from './public/error/internal-server-error/internal-server-error.component';
import { HomeComponent } from './public/general/home/home.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { AddTokenInterceptor } from './interceptors/add-token.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    NotFoundComponent,
    InternalServerErrorComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AddTokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
