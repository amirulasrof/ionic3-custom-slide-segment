import { Component, ViewChild } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	example;

	@ViewChild(Slides) slides: Slides;

  constructor(public navCtrl: NavController) {

  	//default init for segment
  	this.example = "s1";

  }

  //reverse of index??????
  changeSlide(){
    this.slides.slideTo(0, 500);
  }

  changeSlide1(){
    this.slides.slideTo(1, 500);
  }


  slideChanged() {
    let currentIndex = this.slides.getActiveIndex();
    console.log('Current index is', currentIndex);

    if(currentIndex == 0){
      this.example = "s1";
    }
    else if(currentIndex == 1){
      this.example = "s2";
    }
  }

}
