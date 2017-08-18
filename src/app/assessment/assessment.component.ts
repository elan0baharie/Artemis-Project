import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HireQuestion } from '../hire-question.model';

@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.css']
})

export class AssessmentComponent implements OnInit {
  public quiz: boolean;
  public showSlideOne: boolean;
  public showSlideTwo: boolean;
  public showSlideThree: boolean;
  public showSlideFour: boolean;
  public showSlideFive: boolean;
  public showSlideSix: boolean;
  public showSlideSeven: boolean;
  public showSlideEight: boolean;
  public showSlideNine: boolean;
  public showSlideTen: boolean;
  public remoteScore: number;
  public strategyScore: number;
  public remoteOneValue: string;
  public remoteTwoValue: string;
  public remoteThreeValue: string;
  public remoteFourValue: string;
  public remoteFiveValue: string;
  public strategyOneValue: string;
  public strategyTwoValue: string;
  public strategyThreeValue: string;
  public strategyFourValue: string;
  public strategyFiveValue: string;
  public responsebox1: boolean;
  public responsebox2: boolean;
  public responsebox3: boolean;
  public responsebox4: boolean;



  constructor() { }

  ngOnInit() {
    this.quiz = true;
    this.showSlideOne = true;
    this.showSlideTwo = false;
    this.showSlideThree = false;
    this.showSlideFour = false;
    this.showSlideFive = false;
    this.showSlideSix = false;
    this.showSlideSeven = false;
    this.showSlideEight = false;
    this.showSlideNine = false;
    this.showSlideTen = false;
    this.responsebox1 = false;
    this.responsebox2 = false;
    this.responsebox3 = false;
    this.responsebox4 = false;
  }

  runAssess(){
    var realRemoteNumOne = parseInt(this.remoteOneValue);
    var realRemoteNumTwo = parseInt(this.remoteTwoValue);
    var realRemoteNumThree = parseInt(this.remoteThreeValue);
    var realRemoteNumFour = parseInt(this.remoteFourValue);
    var realRemoteNumFive = parseInt(this.remoteFiveValue);
    var realStratNumOne = parseInt(this.strategyOneValue);
    var realStratNumTwo = parseInt(this.strategyTwoValue);
    var realStratNumThree = parseInt(this.strategyThreeValue);
    var realStratNumFour = parseInt(this.strategyFourValue);
    var realStratNumFive = parseInt(this.strategyFiveValue);

    this.remoteScore = realRemoteNumOne + realRemoteNumTwo + realRemoteNumThree + realRemoteNumFour + realRemoteNumFive;
    this.strategyScore = realStratNumOne + realStratNumTwo + realStratNumThree + realStratNumFour + realStratNumFive;
    console.log("Your remote score is " + this.remoteScore + " out of 20.");
    console.log("Your strategy score is " + this.strategyScore + " out of 20.");

    if(this.remoteScore >= 14){
      this.quiz = false;
      this.responsebox1 = true;
      }
    else if (this.remoteScore >= 10 && this.remoteScore < 14){
        this.quiz = false;
        this.responsebox2 = true;
      }
    else if (this.remoteScore < 10 ){
        this.quiz = false;
        this.responsebox3 = true;
      }
    else {
        this.quiz = false;
        this.responsebox4 = true;
      }


    // if(this.remoteScore >= 10) {
    //   location.href = 'http://www.facebook.com';
    // } else if (this.remoteScore >= 6 && this.remoteScore < 10) {
    //   location.href = 'http://www.twitter.com';
    // } else {
    //   location.href = 'http://www.Apple.com';
    // }
  }

  goSlideOne() {
    this.showSlideOne = true;
    this.showSlideTwo = false;
  }

  goSlideTwo() {
    this.showSlideOne = false;
    this.showSlideTwo = true;
    this.showSlideThree = false;
  }

  goSlideThree() {
    this.showSlideTwo = false;
    this.showSlideThree = true;
    this.showSlideFour = false;
  }

  goSlideFour() {
    this.showSlideThree = false;
    this.showSlideFour = true;
    this.showSlideFive = false;

  }

  goSlideFive() {
    this.showSlideFour = false;
    this.showSlideFive = true;
    this.showSlideSix = false;

  }

  goSlideSix() {
    this.showSlideFive = false;
    this.showSlideSix = true;
    this.showSlideSeven = false;

  }

  goSlideSeven() {
    this.showSlideSix = false;
    this.showSlideSeven = true;
    this.showSlideEight = false;

  }

  goSlideEight() {
    this.showSlideSeven = false;
    this.showSlideEight = true;
    this.showSlideNine = false;

  }

  goSlideNine() {
    this.showSlideEight = false;
    this.showSlideNine = true;
    this.showSlideTen = false;

  }

  goSlideTen() {
    this.showSlideNine = false;
    this.showSlideTen = true;
  }
}
