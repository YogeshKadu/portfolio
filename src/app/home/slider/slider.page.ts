import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { SwiperOptions } from 'swiper';
import { SwiperComponent } from 'swiper/angular';

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'app-slider',
  templateUrl: './slider.page.html',
  styleUrls: ['./slider.page.scss'],
  encapsulation:ViewEncapsulation.None
})
export class SliderPage implements OnInit {
  constructor() { }
  @ViewChild("canvas") canvas:ElementRef<HTMLCanvasElement>;
  @ViewChild('swiper', { static: false }) swiper?: SwiperComponent;
  ctx:CanvasRenderingContext2D;
  config:SwiperOptions ={
    direction:"vertical",
    mousewheel:true
  }
  ngOnInit() {
  }
  ionViewDidEnter(){
    this.ctx = this.canvas.nativeElement.getContext("2d");
    this.swiper.updateSwiper({});
  }
  slideNext(time=100){
    this.swiper.swiperRef.slideNext(time);
  }
  slideToIndex(index){
    this.swiper.swiperRef.slideTo(index,250);
  }
}
