import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgxAccordionDemoComponent } from './component/ngx-accordion-demo/ngx-accordion-demo.component';
import { NgxAlertComponent } from './component/ngx-alert/ngx-alert.component';
import { NgxCarouselComponent } from './component/ngx-carousel/ngx-carousel.component';
import { NgxCurrencyComponent } from './component/ngx-currency/ngx-currency.component';
import { NgxDatepickerComponent } from './component/ngx-datepicker/ngx-datepicker.component';
import { NgxDropdownsComponent } from './component/ngx-dropdowns/ngx-dropdowns.component';
import { NgxLoaderComponent } from './component/ngx-loader/ngx-loader.component';
import { NgxModalsComponent } from './component/ngx-modals/ngx-modals.component';
import { NgxPaginationComponent } from './component/ngx-pagination/ngx-pagination.component';
import { NgxRatingComponent } from './component/ngx-rating/ngx-rating.component';
import { NgxScrollComponent } from './component/ngx-scroll/ngx-scroll.component';
import { NgxSortingComponent } from './component/ngx-sorting/ngx-sorting.component';
import { NgxSpinnerComponent } from './component/ngx-spinner/ngx-spinner.component';
import { NgxTabsComponent } from './component/ngx-tabs/ngx-tabs.component';
import { NgxTimepickerComponent } from './component/ngx-timepicker/ngx-timepicker.component';
import { SlickSliderComponent } from './component/slick-slider/slick-slider.component';
import { TabScrollComponent } from './component/tab-scroll/tab-scroll.component';

const routes: Routes = [
  { path: '', component: NgxAccordionDemoComponent, pathMatch: 'full' },
  { path: 'ngx-accordion', component: NgxAccordionDemoComponent },
  { path: 'ngx-alert', component: NgxAlertComponent },
  { path: 'ngx-carousel', component: NgxCarouselComponent },
  { path: 'ngx-datepicker', component: NgxDatepickerComponent },
  { path: 'ngx-dropdowns', component: NgxDropdownsComponent },
  { path: 'ngx-modal', component: NgxModalsComponent },
  { path: 'ngx-pagination', component: NgxPaginationComponent },
  { path: 'ngx-rating', component: NgxRatingComponent },
  { path: 'ngx-tabs', component: NgxTabsComponent },
  { path: 'ngx-timepicker', component: NgxTimepickerComponent },
  { path: 'ngx-sorting', component: NgxSortingComponent },
  { path: 'ngx-loader', component: NgxLoaderComponent },
  { path: 'ngx-currency', component: NgxCurrencyComponent },
  { path: 'ngx-scroll', component: NgxScrollComponent },
  { path: 'ngx-spinner', component: NgxSpinnerComponent },
  { path: 'tab-scroll', component: TabScrollComponent },
  { path: 'ngx-slick-slider', component: SlickSliderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
