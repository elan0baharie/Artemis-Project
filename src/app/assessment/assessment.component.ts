import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';

@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.css'],
  animations: [
    trigger( 'myTestAnimation',[
      state('beginShow', style({
        opacity: 0
      })),
      state('endShow', style({
        opacity: 1
      })),
      transition('beginShow => endShow', animate('800ms ease-in'))
      ]
    )
  ]
})

export class AssessmentComponent implements OnInit {
  stateTwo: string = 'beginShow';
  stateThree: string = 'beginShow';
  stateFour: string = 'beginShow';
  stateFive: string = 'beginShow';
  stateSix: string = 'beginShow';
  stateSeven: string = 'beginShow';
  stateEight: string = 'beginShow';
  stateNine: string = 'beginShow';
  stateTen: string = 'beginShow';
  public test: boolean;
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
    this.showSlideTwo = true;
    this.showSlideThree = true;
    this.showSlideFour = true;
    this.showSlideFive = true;
    this.showSlideSix = true;
    this.showSlideSeven = true;
    this.showSlideEight = true;
    this.showSlideNine = true;
    this.showSlideTen = true;
    this.responsebox1 = false;
    this.responsebox2 = false;
    this.responsebox3 = false;
    this.responsebox4 = false;
  }

  runAnimateTwo() {
    console.log("Running Animate");
    this.showSlideOne = false;
    this.showSlideTwo = true;
    this.stateTwo = (this.stateTwo === 'beginShow' ? 'endShow' : 'endShow');
  }

  runAnimateThree() {
    console.log("Running Animate");
    this.showSlideTwo = false;
    this.showSlideThree = true;
    this.stateThree = (this.stateThree === 'beginShow' ? 'endShow' : 'endShow');
  }

  runAnimateFour() {
    console.log("Running Animate");
    this.showSlideThree = false;
    this.showSlideFour = true;
    this.stateFour = (this.stateFour === 'beginShow' ? 'endShow' : 'endShow');
  }

  runAnimateFive() {
    console.log("Running Animate");
    this.showSlideFour = false;
    this.showSlideFive = true;
    this.stateFive = (this.stateFive === 'beginShow' ? 'endShow' : 'endShow');
  }

  runAnimateSix() {
    console.log("Running Animate");
    this.showSlideFive = false;
    this.showSlideSix = true;
    this.stateSix = (this.stateSix === 'beginShow' ? 'endShow' : 'endShow');
  }

  runAnimateSeven() {
    console.log("Running Animate");
    this.showSlideSix = false;
    this.showSlideSeven = true;
    this.stateSeven = (this.stateSeven === 'beginShow' ? 'endShow' : 'endShow');
  }

  runAnimateEight() {
    console.log("Running Animate");
    this.showSlideSeven = false;
    this.showSlideEight = true;
    this.stateEight = (this.stateEight === 'beginShow' ? 'endShow' : 'endShow');
  }

  runAnimateNine() {
    console.log("Running Animate");
    this.showSlideEight = false;
    this.showSlideNine = true;
    this.stateNine = (this.stateNine === 'beginShow' ? 'endShow' : 'endShow');
  }

  runAnimateTen() {
    console.log("Running Animate");
    this.showSlideNine = false;
    this.showSlideTen = true;
    this.stateTen = (this.stateTen === 'beginShow' ? 'endShow' : 'endShow');
  }

  runAssess() {
    const realRemoteNumOne = parseInt(this.remoteOneValue, 10);
    const realRemoteNumTwo = parseInt(this.remoteTwoValue, 10);
    const realRemoteNumThree = parseInt(this.remoteThreeValue, 10);
    const realRemoteNumFour = parseInt(this.remoteFourValue, 10);
    const realRemoteNumFive = parseInt(this.remoteFiveValue, 10);
    const realStratNumOne = parseInt(this.strategyOneValue, 10);
    const realStratNumTwo = parseInt(this.strategyTwoValue, 10);
    const realStratNumThree = parseInt(this.strategyThreeValue, 10);
    const realStratNumFour = parseInt(this.strategyFourValue, 10);
    const realStratNumFive = parseInt(this.strategyFiveValue, 10);

    this.remoteScore = realRemoteNumOne + realRemoteNumTwo + realRemoteNumThree + realRemoteNumFour + realRemoteNumFive;
    this.strategyScore = realStratNumOne + realStratNumTwo + realStratNumThree + realStratNumFour + realStratNumFive;
    console.log('Your remote score is ' + this.remoteScore + ' out of 20.');
    console.log('Your remote score is ' + this.strategyScore + ' out of 20.');

    if (this.remoteScore >= 14) {
      this.quiz = false;
      this.responsebox1 = true;
      } else if (this.remoteScore >= 10 && this.remoteScore < 14) {
        this.quiz = false;
        this.responsebox2 = true;
      } else if (this.remoteScore < 10 ) {
        this.quiz = false;
        this.responsebox3 = true;
      } else {
        this.quiz = false;
        this.responsebox4 = true;
      }
  }

  goQuizTwo() {
    this.showSlideOne = true;
    this.showSlideTwo = false;
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
