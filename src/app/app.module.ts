import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

// components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxAccordionDemoComponent } from './component/ngx-accordion-demo/ngx-accordion-demo.component';
import { NgxAlertComponent } from './component/ngx-alert/ngx-alert.component'
import { NgxCarouselComponent } from './component/ngx-carousel/ngx-carousel.component';
import { NgxDatepickerComponent } from './component/ngx-datepicker/ngx-datepicker.component';
import { NgxDropdownsComponent } from './component/ngx-dropdowns/ngx-dropdowns.component';
import { NgxModalsComponent } from './component/ngx-modals/ngx-modals.component';
import { NgxPaginationComponent } from './component/ngx-pagination/ngx-pagination.component';
import { NgxRatingComponent } from './component/ngx-rating/ngx-rating.component';
import { NgxSortingComponent } from './component/ngx-sorting/ngx-sorting.component';
import { NgxTabsComponent } from './component/ngx-tabs/ngx-tabs.component';
import { NgxTimepickerComponent } from './component/ngx-timepicker/ngx-timepicker.component';
import { NgxLoaderComponent } from './component/ngx-loader/ngx-loader.component';
import { NgxSpinnerComponent } from './component/ngx-spinner/ngx-spinner.component';


// ngx-bootstarp
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule } from '@angular/forms';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { AlertModule } from 'ngx-bootstrap/alert';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { RatingModule } from 'ngx-bootstrap/rating';
import { SortableModule } from 'ngx-bootstrap/sortable';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import {  TooltipModule } from 'ngx-bootstrap/tooltip';

// ngx-ui-loader
import { NgxUiLoaderModule, NgxUiLoaderConfig, NgxUiLoaderRouterModule, SPINNER} from 'ngx-ui-loader';

// ngx-loader
import { NgxLoadingModule } from 'ngx-loading';

// pipe
import { CurrencyPipe } from '@angular/common';
import { IndianCurrency } from './component/ngx-accordion-demo/indianCurrency.pipe';

// currnecy 
import { NgxCurrencyModule } from "ngx-currency";
import { NgxCurrencyComponent } from './component/ngx-currency/ngx-currency.component';
import { NgxScrollComponent } from './component/ngx-scroll/ngx-scroll.component';

// perfect-scroll 
import { PerfectScrollbarModule, PerfectScrollbarConfigInterface, PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';

// ngx-scrollbar
import { NgScrollbarModule } from 'ngx-scrollbar';

// ngx-spinner
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { TabScrollComponent } from './component/tab-scroll/tab-scroll.component';
import { SlickSliderComponent } from './component/slick-slider/slick-slider.component';

import { SlickCarouselModule } from 'ngx-slick-carousel';

export const customCurrencyMaskConfig = {
  align: "left",
  allowNegative: false,
  allowZero: true,
  decimal: ".",
  precision: 2,
  prefix: " ",
  suffix: "",
  thousands: ",",
  nullable: true
};

const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  fgsColor: 'red',
  fastFadeOut: true,
  fgsSize: 60,
  minTime: 1000,
  // fgsOpacity: 0.9,
  // fgsType: SPINNER.circle, 
}

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  wheelPropagation: true
};

@NgModule({
  declarations: [
    AppComponent,
    NgxAccordionDemoComponent,
    NgxAlertComponent,
    NgxCarouselComponent,
    NgxDatepickerComponent,
    NgxDropdownsComponent,
    NgxModalsComponent,
    NgxPaginationComponent,
    NgxRatingComponent,
    NgxSortingComponent,
    NgxTabsComponent,
    NgxTimepickerComponent,
    NgxLoaderComponent,
    IndianCurrency,
    NgxCurrencyComponent,
    NgxScrollComponent,
    NgxSpinnerComponent,
    TabScrollComponent,
    SlickSliderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    AccordionModule.forRoot(),
    AlertModule.forRoot(),
    CarouselModule.forRoot(),
    CollapseModule.forRoot(),
    BsDatepickerModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    PaginationModule.forRoot(),
    PopoverModule.forRoot(),
    ProgressbarModule.forRoot(),
    RatingModule.forRoot(),
    SortableModule.forRoot(),
    TabsModule.forRoot(),
    TimepickerModule.forRoot(),
    TooltipModule.forRoot(),
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    NgxUiLoaderRouterModule,
    NgxLoadingModule.forRoot({}),
    ReactiveFormsModule,
    NgxCurrencyModule.forRoot(customCurrencyMaskConfig),
    PerfectScrollbarModule,
    NgxSpinnerModule,
    NgScrollbarModule,
    NgxPageScrollCoreModule.forRoot({ duration: 500 }),
    SlickCarouselModule,
  ],
  providers: [
    CurrencyPipe,
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
    },
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
