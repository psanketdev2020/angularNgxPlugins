import { Component, OnInit } from '@angular/core';


const primarGary = '#fff';
const secondaryWhite = '#ccc';
const ngxLoadingAnimationTypes = {
  chasingDots: 'chasing-dots',
  circle: 'sk-circle',
  circleSwish: 'circleSwish',
  cubeGrid: 'sk-cube-grid',
  doubleBounce: 'double-bounce',
  none: 'none',
  pulse: 'pulse',
  rectangleBounce: 'rectangle-bounce',
  rotatingPlane: 'rotating-plane',
  threeBounce: 'three-bounce',
  wanderingCubes: 'wandering-cubes'
};

@Component({
  selector: 'app-ngx-loader',
  templateUrl: './ngx-loader.component.html',
  styleUrls: ['./ngx-loader.component.css']
})


export class NgxLoaderComponent implements OnInit {

  public loading = true;
  public ngxLoadingAnimationTypes = ngxLoadingAnimationTypes;
  public primarGary = primarGary;
  public secondaryWhite = secondaryWhite;
  public config = {
    animationType: ngxLoadingAnimationTypes.none,
    primaryColour: this.primarGary,
    secondaryColour: this.secondaryWhite
  }

  constructor() { }

  ngOnInit(): void {
  }

}
