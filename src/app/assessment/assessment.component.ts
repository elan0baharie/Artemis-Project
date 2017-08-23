import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.css'],
  animations: [
    trigger( 'myTestAnimation', [
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
  stateTwo = 'beginShow';
  stateThree = 'beginShow';
  stateFour = 'beginShow';
  stateFive = 'beginShow';
  stateSix = 'beginShow';
  stateSeven = 'beginShow';
  stateEight = 'beginShow';
  stateNine = 'beginShow';
  stateTen = 'beginShow';
  stateEleven = 'beginShow';
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
  public showSlideEleven: boolean;
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
  public strategySixValue: string;
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
    this.showSlideEleven = true;
    this.responsebox1 = false;
    this.responsebox2 = false;
    this.responsebox3 = false;
    this.responsebox4 = false;
  }

  backSlideOne() {
    this.showSlideOne = true;
    this.showSlideTwo = false;
  }

  backSlideTwo() {
    this.showSlideTwo = true;
    this.showSlideThree = false;
  }

  backSlideThree() {
    this.showSlideThree = true;
    this.showSlideFour = false;
  }

  backSlideFour() {
    this.showSlideFour = true;
    this.showSlideFive = false;
  }

  backSlideFive() {
    this.showSlideFive = true;
    this.showSlideSix = false;
  }

  backSlideSix() {
    this.showSlideSix = true;
    this.showSlideSeven = false;
  }

  backSlideSeven() {
    this.showSlideSeven = true;
    this.showSlideEight = false;
  }

  backSlideEight() {
    this.showSlideEight = true;
    this.showSlideNine = false;
  }

  backSlideNine() {
    this.showSlideNine = true;
    this.showSlideTen = false;
  }

  backSlideTen() {
    this.showSlideTen = true;
    this.showSlideEleven = false;
  }

  runAnimateTwo() {
    this.showSlideOne = false;
    this.showSlideTwo = true;
    this.stateTwo = (this.stateTwo === 'beginShow' ? 'endShow' : 'endShow');
  }

  runAnimateThree() {
    this.showSlideTwo = false;
    this.showSlideThree = true;
    this.stateThree = (this.stateThree === 'beginShow' ? 'endShow' : 'endShow');
  }

  runAnimateFour() {
    this.showSlideThree = false;
    this.showSlideFour = true;
    this.stateFour = (this.stateFour === 'beginShow' ? 'endShow' : 'endShow');
  }

  runAnimateFive() {

    this.showSlideFour = false;
    this.showSlideFive = true;
    this.stateFive = (this.stateFive === 'beginShow' ? 'endShow' : 'endShow');
  }

  runAnimateSix() {

    this.showSlideFive = false;
    this.showSlideSix = true;
    this.stateSix = (this.stateSix === 'beginShow' ? 'endShow' : 'endShow');
  }

  runAnimateSeven() {

    this.showSlideSix = false;
    this.showSlideSeven = true;
    this.stateSeven = (this.stateSeven === 'beginShow' ? 'endShow' : 'endShow');
  }

  runAnimateEight() {

    this.showSlideSeven = false;
    this.showSlideEight = true;
    this.stateEight = (this.stateEight === 'beginShow' ? 'endShow' : 'endShow');
  }

  runAnimateNine() {

    this.showSlideEight = false;
    this.showSlideNine = true;
    this.stateNine = (this.stateNine === 'beginShow' ? 'endShow' : 'endShow');
  }

  runAnimateTen() {
    this.showSlideNine = false;
    this.showSlideTen = true;
    this.stateTen = (this.stateTen === 'beginShow' ? 'endShow' : 'endShow');
  }

  runAnimateEleven() {
    this.showSlideTen = false;
    this.showSlideEleven = true;
    this.stateEleven = (this.stateEleven === 'beginShow' ? 'endShow' : 'endShow');
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
    const realStratNumSix = parseInt(this.strategySixValue, 10);

    this.remoteScore = realRemoteNumOne + realRemoteNumTwo + realRemoteNumThree + realRemoteNumFour + realRemoteNumFive;
    this.strategyScore = realStratNumOne + realStratNumTwo + realStratNumThree + realStratNumFour + realStratNumFive + realStratNumSix;
    console.log('Your remote score is ' + this.remoteScore + ' out of 20.');
    console.log('Your remote score is ' + this.strategyScore + ' out of 24.');

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
}
