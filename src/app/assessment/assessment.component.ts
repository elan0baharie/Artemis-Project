import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HireQuestion } from '../hire-question.model';

@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.css']
})

export class AssessmentComponent implements OnInit {
  public remoteScore: number;
  public strategyScore: number;
  public remoteOneValue: string;
  public remoteTwoValue: string;
  public remoteThreeValue: string;
  public remoteFourValue: string;
  public strategyOneValue: string;
  public strategyTwoValue: string;
  public strategyThreeValue: string;
  public strategyFourValue: string;


  constructor() { }

  ngOnInit() {
  }

  runAssess(){
    var realRemoteNumOne = parseInt(this.remoteOneValue);
    var realRemoteNumTwo = parseInt(this.remoteTwoValue);
    var realRemoteNumThree = parseInt(this.remoteThreeValue);
    var realRemoteNumFour = parseInt(this.remoteFourValue);
    var realStratNumOne = parseInt(this.strategyOneValue);
    var realStratNumTwo = parseInt(this.strategyTwoValue);
    var realStratNumThree = parseInt(this.strategyThreeValue);
    var realStratNumFour = parseInt(this.strategyFourValue);

    this.remoteScore = realRemoteNumOne + realRemoteNumTwo + realRemoteNumThree + realRemoteNumFour;
    this.strategyScore = realStratNumOne + realStratNumTwo + realStratNumThree + realStratNumFour;
    console.log("Your remote score is " + this.remoteScore + " out of 16.");
    console.log("Your strategy score is " + this.strategyScore + " out of 16.");
    if(this.remoteScore >= 10) {
      location.href = 'http://www.artemisconnection.com/application';
    } else if (this.remoteScore >= 6 && this.remoteScore < 10) {
      location.href = 'http://www.twitter.com';
    } else {
      location.href = 'http://www.Apple.com';
    }
  }

}
