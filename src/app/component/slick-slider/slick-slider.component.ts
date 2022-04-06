import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slick-slider',
  templateUrl: './slick-slider.component.html',
  styleUrls: ['./slick-slider.component.css'],
})
export class SlickSliderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  slideConfig = {
    infinite: true,
    speed: 300,
    centerMode: true,
    centerPadding: '20px',
    slidesToShow: 5,
    arrows: true,
  };

  slickInit($event) {
    let centerImg = document.querySelector('.slick-current.slick-center');
    centerImg.nextElementSibling.nextElementSibling.classList.remove(
      'smallscale'
    );
    centerImg.previousElementSibling.previousElementSibling.classList.remove(
      'smallscale'
    );
    centerImg.previousElementSibling.classList.add('smallscale');
    centerImg.nextElementSibling.classList.add('smallscale');
  }

  afterChange(e) {
    let centerImg = document.querySelector('.slick-current.slick-center');
    centerImg.nextElementSibling.nextElementSibling.classList.remove(
      'smallscale'
    );
    centerImg.previousElementSibling.previousElementSibling.classList.remove(
      'smallscale'
    );
    centerImg.previousElementSibling.classList.add('smallscale');
    centerImg.nextElementSibling.classList.add('smallscale');
  }

  beforeChange(e) {
    let centerImg = document.querySelector('.slick-current.slick-center');
    centerImg.nextElementSibling.nextElementSibling.classList.remove(
      'smallscale'
    );

    centerImg.previousElementSibling.previousElementSibling.classList.remove(
      'smallscale'
    );
    centerImg.previousElementSibling.classList.add('smallscale');
    centerImg.nextElementSibling.classList.add('smallscale');
  }

  slideConfig1 = {
    respovsive: [
      {
        breakpoint: 1920,
        settings: 'unslick',
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
          infinite: false,
          arrow: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.3,
          slidesToScroll: 1,
          dots: true,
          infinite: false,
          arrow: false,
        },
      },
    ],
  };
}
