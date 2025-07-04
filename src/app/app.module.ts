import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReleaseDatePipe } from './pipes/release-date.pipe';
import { HighlightRatingDirective } from './directives/highlight-rating.directive';
@NgModule({
declarations: [
AppComponent // Adicione esta linha
],
imports: [
BrowserModule,
IonicModule.forRoot(),
AppRoutingModule,
HttpClientModule
],
providers: [{ provide: RouteReuseStrategy, useClass:
IonicRouteStrategy }],
bootstrap: [AppComponent],
})
export class AppModule {}

