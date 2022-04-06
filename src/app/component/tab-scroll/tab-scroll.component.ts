import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { PageScrollService } from 'ngx-page-scroll-core';

@Component({
  selector: 'app-tab-scroll',
  templateUrl: './tab-scroll.component.html',
  styleUrls: ['./tab-scroll.component.css'],
})
export class TabScrollComponent implements OnInit {
  activeSection = 1;
  constructor(
    private pageScrollService: PageScrollService,
    @Inject(DOCUMENT) private document: any
  ) {}

  ngOnInit(): void {}

  scrollTo(event: HTMLElement, index: number) {
    console.log(event, index);
    this.pageScrollService.scroll({
      scrollTarget: event,
      document: this.document,
    });

    this.activeSection = index;
  }

  @HostListener('window: scroll')
  onWindowScroll(event: HTMLElement, index: number) {
    this.pageScrollService.scroll({
      scrollTarget: event,
      document: this.document,
    });
  }
}
