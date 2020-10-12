import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ChartModule, HIGHCHARTS_MODULES } from 'angular-highcharts';
import highmaps from '../../node_modules/highcharts/modules/map.src';
import { MapChart } from 'angular-highcharts';
import { DataService } from './services/data.service';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { TreatmentsComponent } from './components/treatments/treatments.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { ThankComponent } from './components/thank/thank.component';


export function highchartsModules() {
  return [highmaps];
}

@NgModule({
  declarations: [
    AppComponent,
    FeedbackComponent,
    TreatmentsComponent,
    HeaderComponent,
    FooterComponent,
    ThankComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [{ provide: HIGHCHARTS_MODULES, useFactory: highchartsModules }, MapChart, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
